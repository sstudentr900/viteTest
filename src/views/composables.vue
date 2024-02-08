<template>

  <h2>共用邏輯composables</h2>
  <ul>
    <li>先新增Composables資料夾</li>
    <li>在新增js檔,函數和檔名都以use當開頭</li>
  </ul>
  <h3>自定函數注册全局(圖片懶加載)</h3>
  <pre>
    #新增 lazyPlugin.js
    import { useIntersectionObserver } from '@vueuse/core'
    export const lazyPlugin = {
      install(app){
        //懶加載指令
        //（directives）用於向 DOM 元素應用特定的行為 指令以 v- 開頭
        app.directive('img-lazy',{
          mounted(el,binding){
            //el:綁定元素 img
            //binding: 綁定的值 binding.value == 圖片url
            console.log(el,binding.value)

            //監聽是否在可視區
            const {stop} = useIntersectionObserver(
              el, //物件
              ([{isIntersecting}])=>{
                console.log(isIntersecting) //boolean 監聽是否在可視區
                if(isIntersecting){
                  //進入可視區載入圖片
                  el.src = binding.value
                  stop() //停止監聽
                }
              }
            )
          }
        })
      }
    }

    #main.js 注册全局
    import { lazyPlugin } from './lazyPlugin.js'
    const app = createApp(App)
    app.use(lazyPlugin)
    app.mount('#app')

    #template使用
    &lt;img v-img-lazy='img url'>
  </pre>
  <h3>參考</h3>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=TOTq5QDXXSU&list=PLFbd8KZNbe---KNiUInMOOSEtmfudpONG&index=38">图片懒加载指令实现</a>
    </li>
    <li>
      <a href="https://vueuse.org/core/useIntersectionObserver/">官網</a>
    </li>
  </ul>
  <hr>
  <h3>限制資料只能讀取 readonly</h3>
  <pre>
    #新增 Composables/useSetData.js
    import {readonly, ref} from "vue";
    export function useSetData(val){
      const data2 = ref(val);
      const dataName = ref('mile');
      //外面傳值去修改dataName值
      const setName = (val)=>{
        dataName.value = val
      }

      const setValue = (val)=>{
        data2.value = val
      }

      return {
        //readonly 限制只能讀值
        dataName: readonly(dataName),
        data2,
        setValue,
        setName
      };
    }

    #引入到 app.vue
    import { onMounted, onUnmounted,ref } from "vue";
    // 引入函數
    import {useSetData} from './composables/useSetData.js';
    //執行函數
    const {data2,dataName,setValue,setName} = useSetData(0);
    // dataName.value = 'jj'; //給值會報錯 error readonly

    #template
    &lt;p&gt; &lbrace;&lbrace;data2&rbrace;&rbrace; &lt;/p&gt;
    &lt;p&gt; &lbrace;&lbrace;dataName&rbrace;&rbrace; &lt;/p&gt;
    //給值需要設定
    &lt;button @click="setValue(data2+1)"&gt; add &lt;/button&gt;
    &lt;button @click="setName('jakey')"&gt; setName &lt;/button&gt;
  </pre>
  <h3>共用函數(滑鼠位置)和使用</h3>
  <p>新增自訂useWindowPosition.js檔到Composables</p>
  <pre>
      #新增 Composables/useWindowPosition.js
      import { onMounted, onUnmounted,ref } from "vue";
      export function useWindowPosition(){
        const pageX = ref(0);
        const pageY = ref(0);
        const movePosition = (e)=>{
          console.log(e)
          pageX.value = e.pageX
          pageY.value = e.pageY
        }
        //載入
        onMounted(()=>{
          window.addEventListener('mousemove',movePosition)
        })
        // 有監聽就要有移除
        onUnmounted(()=>{
          window.removeEventListener('mousemove',movePosition)
        })
        //輸出的值
        return {
          pageX,
          pageY
        };
      }

      #script setup
      //引入到 app.vue
      import { onMounted, onUnmounted,ref } from "vue";
      // 引入函數
      import {useWindowPosition} from './composables/useWindowPosition.js';
      //執行函數
      const {pageX,pageY} = useWindowPosition();

      #template
      &lt;h2&gt; pageX:{{pageX}},pageY:{{pageY}} &lt;/h2&gt;
  </pre>
  <h3>axios範例</h3>
  <pre>
    #新增 Composables/useAxios.js
    import axios from "axios";
    import {ref} from "vue";
    export function useAxios(){
      const data = ref([]);//預設array
      const errorMessage = ref('');
      const init = async(url)=>{
        try{
          const res = await axios.get(url)
          data.value = res.data;
        }catch(error){
          //找不到資料
          errorMessage.value ="api error"
        }
      }
      return {
        data,
        errorMessage,
        init
      }
    }

    //引入到 app.vue
    import { onMounted } from '@vue/runtime-core';
    import {useAxios} from './composables/useAxios.js';
    //執行函數
    const {data,errorMessage,init} = useAxios();
    onMounted(()=>{
      init('https://60bd9841ace4d50017aab3ec.mockapi.io/api/post_card')
    })

    #template
    //沒有資料先顯示loading
    &lt;p v-if="data.length === 0"&gt;loading... &lt;/p&gt;
    //顯示資料
    &lt;p v-else&gt; {data} &lt;/p&gt;
    //api錯誤 
    &lt;p v-if="errorMessage!==''"&gt; {errorMessage}  &lt;/p&gt;
  </pre>
  <h3>參考</h3>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=JrIF9LidZGo&ab_channel=MikeCheng" target="_blank">共用邏輯 / Composables</a>
    </li>
    <li>
      <a href="https://www.youtube.com/watch?v=JrIF9LidZGo&list=PLbOfcOk7bN42Kzp1wQsoLuU0vPUmFBe-X&index=5">composition API 共用邏輯 / Composables</a>
    </li>
  </ul>
  <!-- <h2>composables js共用邏輯</h2>
  <br>
  <h3>滑鼠XY</h3>
  <p>新增 src/composables/use函數名稱.js</p>
  <p>use做開頭</p>
  <p>pageX:{{pageX}},pageY:{{pageY}}</p>
  <hr>
  <h3>addCount readonly</h3>
  <p>{{ count }}</p>
  <button @click="addCount(count++)">addCount</button>
  <hr>
  <h3>fetch</h3>
  <div>{{ data.length }}</div>
  <div v-if="data.length===0">loading...</div>
  <div v-else>{{ data }}</div>
  <hr> -->
</template>
<script setup>
  import {onMounted,ref} from 'vue'
  //滑鼠XY引用
  import { useWindowPosition } from '../composables/useWindowPosition.js'
  const {pageX,pageY} = useWindowPosition()

  //addCount
  import { useAddCount } from '../composables/useAddCount.js'
  const {count,addCount} = useAddCount(0)

  //fetch
  import { useFetch } from '../composables/useFetch.js'
  const {data,errorMessage,fetchInit} = useFetch()
  onMounted(()=>{
    fetchInit()
  })

</script>
<style></style>
