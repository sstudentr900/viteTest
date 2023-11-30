<template>
  <h2>組件生命週期</h2>
  <br>
  <h3>onUpdated 畫面更新</h3>
  <button @click="count++"> add num</button>
  {{ count }}
  <h3>onUnmounted 組件刪除</h3>
  <button @click='showLife2 = !showLife2 '>showLife2 toggle</button>
  <life2 v-if='showLife2' />
  <hr>
  <h4>參考</h4>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=UWcXzh9DhRY&list=PLSCgthA1AnifSzKdpV4FWq1pLVF4FbZ4K&index=12">組件生命週期</a>
    </li>
  </ul>
  <hr>
  <h2>生命週期</h2>
  <pre class="prettyprint">
    <xmp>
      import { onMounted, onUpdated } from 'vue'
      export default {
        name: 'HelloWorld',
        setup() {
          onMounted(() => console.log('Mounted'));
          onUpdated(() => console.log('Updated'));
          // ...
        }
      }
    </xmp>
  </pre>
  <pre class="prettyprint">
    <xmp>
      <!-- <script> -->
        import {
          inject
        } from 'vue'
        export default {
          name: 'componentsView',
          computed: {

          },
          setup() {
            const $api = inject('$api');
            $api.reqCateBanner().then(function (response) {
              console.log(response)
            })
          },
          methods: {
            getData() {
              this.$api.reqCateBanner().then(function (response) {
                console.log(response)
              })
            },
          }
        }
      <!-- </script> -->
    </xmp>
  </pre>
  <hr> 
  <h2>生命週期介紹</h2>
  <img src="https://i.imgur.com/hFcI2tF.png" alt="">
  <h3>實體建立階段</h3>
  <ol>
    <li>beforeCreate:Vue實體建立，狀態事件還沒初始化</li>
    <li>created:資料建立完成已配置選項 data 、computed、methods、watch,若直接操作 DOM 節點會找不到元素</li>
    <li>beforeMount:HTML結構準備與DOM節點綁定，尚未掛載</li>
    <li>mounted:實例已掛載，完成編譯 template 內容,已經將DOM元素掛載到畫面上</li>
  </ol>
  <h3>實體更新階段</h3>
  <ol>
    <li>beforeUpdate:當資料有更動，畫面更新前</li>
    <li>Update:當資料有更動，畫面更新完成</li>
  </ol>
  <h3>銷毀階段</h3>
  <ol>
    <li>beforeUnmount:Vue實體被銷毀前</li>
    <li>unmounted:Vue實體被銷毀完成</li>
  </ol>
  <pre class="prettyprint">
    <xmp>
      <div id="app">
        <button @click="isShowing = !isShowing">
          <span v-if="isShowing">隱藏元件</span>
          <span v-else>顯示元件</span>
        </button>
        <hr>
        <lifecycle v-if="isShowing"></lifecycle>
      </div>
      <!-- <script> -->
        var app = Vue.createApp({
          data() {
            return {
              isShowing: false
            }
          }
        });
        app.component('lifecycle', {
          template: `<div>
        <h4>{{ state }}</h4>
        <input type="text" class="form-control" v-model="state">
      </div>`,
          data() {
            return {
              state: 'Vue data 資料狀態'
            }
          },
          beforeCreate() {
            console.log(`beforeCreate! ${this.state}`);
          },
          created() {
            console.log(`created! ${this.state}`);
            alert(`created! ${this.state}`);
          },
          beforeMount() {
            alert(`beforeMount! ${this.state}`);
          },
          mounted() {
            alert(`mounted! ${this.state}`);
          },
          beforeUpdate() {
            console.log(`beforeUpdate! ${this.state}`);
          },
          updated() {
            console.log(`updated! ${this.state}`);
          },
          beforeUnmount() {
            console.log(`beforeUnmount! ${this.state}`);
          },
          unmounted() {
            console.log(`unmounted! ${this.state}`);
          }
        });
        app.mount('#app');
      <!-- </script> -->
    </xmp>
  </pre>
  <hr> 
  <h4>參考</h4>
  <ul>
    <li>
      <a href="https://ithelp.ithome.com.tw/articles/10280361" target="_blank">Vue.js 從零開始</a>
    </li>
  </ul>
  <hr>  
</template>
<script setup>
  import life2 from '../components/life2.vue'
  import {
    onBeforeMount,
    onMounted ,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted,
    ref
  } from 'vue'
  const count = ref(0)
  const showLife2 = ref(true)
  //掛載之前
  onBeforeMount(()=>{
    console.log('life1_onBeforeMount 掛載前 放異步')
  })
  onMounted(() => {
    console.log('life1_onMounted 掛載')
  })
  onBeforeUpdate(()=>{
    console.log('life1_onBeforeUpdate 更新前')
  })
  onUpdated(()=>{
    console.log('life1_onUpdated 更新')
  })
  onBeforeUnmount(()=>{
    console.log('life1_onBeforeUnmount 移除前')
  })
  onUnmounted(()=>{
    console.log('life1_onUnmounted 移除')
  })
</script>
<style></style>
