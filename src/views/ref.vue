<template>
  <h2>各板本變數</h2>
  <pre>
    //Vue2 data內放變數
    data: {
      msg: 'Hello World'
    }

    //Vue3 setup內放變數,需要return
    setup() {
      const msg = ref('Hello World');
      return { msg }
    }

    //搭配setup不用return
    script setup
    const msg = ref('Hello World');
  </pre>
  <hr>
  <h2>ref()</h2>
  <ul>
    <li>ref(動態資料監聽畫面和資料做改變)</li>
    <li>ref 可以包任何型別</li>
    <li>ref 是obj請用const</li>
    <li>ref 在script用時要.value才能取值</li>
  </ul>
  <h3>ref包obj watch 不能監聽除非deep</h3>
  <pre>
    import { ref, reactive,watch } from 'vue';
    const people = ref(0);
    const people1 = ref({
      num: 0,
    });
    const people2 = reactive({
      num: 0,
    });
    setTimeout(() => {
      people.value = 50;
      people1.value.num = 100;
      people2.num = 200;
    }, 2000);
    watch(people,()=>{
      console.log('people被監聽')
    })
    watch(people1,()=>{
      console.log('people1不能被監聽')
    })
    watch(people1,()=>{
      console.log('people1有deep可以被監聽')
    },{deep: true})
  </pre>
  <h3>範例</h3>
  <pre>
    #script
    const text = ref(0)
    const changeText= ()=>{
      //count 被包裝後需要用.value才能取值
      text.value++
    }

    #template
    &lt;button @click="changeText"> 
  </pre>
  <p>text:{{text}}</p>
  <button @click="changeText">changeText</button>
  <hr>
  <h2>reactive()</h2>
  <p>reactive 只可以包{}和[] 取值不用加value</p>
  <h3>reactive 會解包 ref</h3>
  <pre>
    //reactive 會解包 ref
    import { reactive } from 'vue';
    const num = ref(0);
    const people3 = reactive({
      num: num,
    });
    setTimeout(() => {
      //不需要.value
      people3.num = 300;
    }, 2000);
  </pre>
  <h3>範例</h3>
  <pre>
    #script
    const text3 = reactive({
      count: 0
    })
    const setCount= ()=>{
      text3.count++
    }

    #template
    &lt;button @click="setCount">changeText&lt;/button>
  </pre>
  <p>text:{{text3.count}}</p>
  <button @click="setCount">changeText</button>
  <h3>參考</h3>
  <ul>
    <li>
      <a href="https://vuejs.org/tutorial/#step-2" target="_blank">vue 官網</a>
    </li>
    <li>
      <a href="https://cn.vitejs.dev/guide/#scaffolding-your-first-vite-project" target="_blank">vite 官網</a>
    </li>
    <li>
      <a href="https://stackoverflow.com/questions/61452458/ref-vs-reactive-in-vue-3" target="_blank">ref vs reactive</a>
    </li>
    <li>
      <a href="https://www.youtube.com/watch?v=rNQIA0Fe9KQ&ab_channel=MikeCheng" target="_blank">Vue3 + Vite 快速上手</a>
    </li>
    <li>
      <a href="https://www.youtube.com/watch?v=vfxWeC1PwOc&list=PLSCgthA1AnifSzKdpV4FWq1pLVF4FbZ4K&index=5">建立組件與基本資料綁定 v-model、ref【Proladon】</a>
    </li>
    <li>
      <a href="https://www.youtube.com/watch?v=rNQIA0Fe9KQ">初探 Vite 專案 / Vue3 初學者應該要先知道的東西 / 剛開始寫 Composition API 會犯的錯誤 !</a>
    </li>
    <li>
      <a href="https://www.youtube.com/watch?v=gJF5Cf2fz1A">定義資料 ref、reactive、computed 深度探討</a>
    </li>
  </ul>
  <hr>
  <h2>獲取dome value</h2>
  <pre>
    #script setup
    import { ref,onMounted } from 'vue';
    const h1Ref = ref(null)

    //須掛載完畢才能獲取
    onMounted(()=>{
      console.log(h1Ref.value)
    })

    #template
    綁定ref對象
    &lt;h1 ref="h1Ref">h1&lt;/h1>  
  </pre>
  <h3>參考</h3>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=4DEbi_DBjUM&list=PLFbd8KZNbe---KNiUInMOOSEtmfudpONG&index=13" target="_blank">模版引用</a>
    </li>
  </ul>
</template>
<script setup>
  import {reactive,ref} from 'vue'
  //ref 動態資料(監聽畫面和資料做改變)
  const text = ref(0)
  console.log(text)
  const changeText= ()=>{
    text.value++
  }

  //reactive 只能用在物件 取值不用加value 
  const text3 = reactive({
    count: 0
  })
  const setCount= ()=>{
    text3.count++
  }
</script>
<style></style>