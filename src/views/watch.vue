<template>
  <h2>vue3 watch 單個監聽</h2>
  <p>第一個參數count不用加value</p>
  <pre>
    &lt;script setup>
      import {ref,watch} form 'vue'
      const count = ref(0)

      //監聽
      watch(count,(newValue,oldValue)=>{
        console.log(`監聽值:count,舊值${oldValue},新值${newValue}`)
      })
    &lt;/script>
  </pre>
  <h2>vue3 watch 多個監聽</h2>
  <pre>
    &lt;script setup>
      import {ref,watch} form 'vue'
      const count = ref(0)
      const name =ref('jack')

      //監聽
      watch(
        [count,name],
        ([newCount,newName],[oldCount,oldName])=>{
          console.log(`監聽多值:[count,name],舊值${[oldCount,oldName]},新值${[newCount,newName]}`)
        }
      )
    &lt;/script>
  </pre>
  <h2>vue3 watch immediate 監聽值沒改變前立即執行函數</h2>
  <pre>
    &lt;script setup>
      import {ref,watch} form 'vue'
      const count = ref(0)

      //監聽
      watch(count,(newValue,oldValue)=>{
        console.log(`監聽值:count,舊值${oldValue},新值${newValue}`)
      },{
        immediate: true
      })
    &lt;/script>
  </pre>
  <h2>vue3 watch deep 深度監聽</h2>
  <p>ref是對象需要deep才能監聽</p>
  <p>deep是監聽全部會造成資源浪費</p>
  <pre>
    &lt;script setup>
      import {ref,watch} form 'vue'
      const state = ref({count:0})
      const changCount=()=>{
        state.value.count++
      }

      //監聽
      watch(state,(newValue,oldValue)=>{
        console.log(`count變化`)
      },{
        deep: true
      })
    &lt;/script>

    &lt;template>
      &lt;div>&lbrace;&lbrace;state.count&rbrace;&rbrace;&lt;/div>
      &lt;div>button @click="changCount">
    &lt;/template>
  </pre>
  <h2>vue3 watch 精確監聽</h2>
  <p>不使用deep監聽</p>
  <pre>
    &lt;script setup>
      import {ref,watch} form 'vue'
      const state = ref({count:0})
      const changCount=()=>{
        state.value.count++
      }

      //監聽
      watch(
        ()=>state.value.count,
        ()=>console.log(`count變化`)
      )
    &lt;/script>

    &lt;template>
      &lt;div>&lbrace;&lbrace;state.count&rbrace;&rbrace;&lt;/div>
      &lt;div>button @click="changCount">
    &lt;/template>
  </pre>
  <h3>參考</h3>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=ngbNJX0-1xo&list=PLFbd8KZNbe---KNiUInMOOSEtmfudpONG&index=8">API-watch</a>
    </li>
    <li>
      <a href="https://www.youtube.com/watch?v=_MNg54De_ts&list=PLFbd8KZNbe---KNiUInMOOSEtmfudpONG&index=9">API-watch</a>
    </li>
  </ul>
  <h2>watchEffect</h2>
  <p>watchEffect()不用指定要監聽的目標，只要在callback函式中對應響應式資料更新後就會依照對應資料來執行了，而與 watch 不同的是，watchEffect()在初始setup()的時候，就會先執行一次了。</p>
  <pre>
    &lt;script setup>
      const stop = watchEffect(()=>{
        console.log(name.value)
      })
      
      stop(); //停止監聽
    &lt;/script>

    &lt;template>
      &lt;div>&lbrace;&lbrace;state.count&rbrace;&rbrace;&lt;/div>
      &lt;div>button @click="changCount">
    &lt;/template>
  </pre>
  <h3>參考</h3>
  <ul>
    <li>
      <a href="https://ithelp.ithome.com.tw/articles/10276627">watchEffect</a>
    </li>
  </ul>
  <h2>vue3监听路由变化</h2>
  <pre>
    &lt;script setup>
      import { useRoute } from 'vue-router'
      const route = useRoute()
      watch(
        () => route.path,
        (newPath, oldPath) => { console.log(newPath) },
        { immediate: true }
      );
    &lt;/script>
  </pre>
  <h3>參考</h3>
  <ul>
    <li>
      <a href="https://juejin.cn/post/7171489778230100004">vue3监听路由变化</a>
    </li>
  </ul>
  <!-- <watch1/>
  <h2>watch</h2>
  <pre>
    watch:{
      //監聽數據
      slideData:{
        immediate:true,//不須數據改變立即監聽
        handler:function(){
            console.log('監聽數據')
        }
      }
    }
  </pre>
  <p>nextTick監聽v-for完執行</p>
  <pre>
    watch:{
      slideData:{
        handler:function(){
          //監聽v-for完執行
          this.$nextTick(()=>{})
        }
      }
    }
    export default {
      data() {
        return {
          slideData:''
        };
      },
      mounted() {
      },
      watch:{
        slideData:{
          immediate:true,//不須數據改變直接執行
          handler:function(){
            console.log('slideData')
          }
        }
      },
      // computed:{
      // },
      // methods: {
      // }
    };
  </pre>
  <hr>
  <h3>參考</h3>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=3F_xRWa39pM&list=PLmOn9nNkQxJEFpabd412vGw_k7-lHlJOP&index=39">官網</a>
    </li>
  </ul>
  <hr> -->
  <!-- <h2>watch監聽器</h2>
  <pre class="prettyprint">
    <div id="app">
      <h3>watch 監聽單一變數</h3>
      <label for="name">監聽變數：</label>
      <input type="text" id="name" v-model="tempName">
      <P>大於五個字: {{ big }}</P>
      <p>小於五個字: {{ small }}</p>
    </div>
    var App = {
      data() {
        return {
          small: "",
          tempName: "",
        };
      },
      watch: {
        tempName(a, b) {
          console.log(a, b);
          if (a.length > 5) {
            this.big = `文字超過${b.length}個字`;
          } else {
            this.small = `文字未超過${a.length}個字`;
          }
        },
      }
    };
    Vue.createApp(App).mount("#app");
  </pre>
  <h2>watch與computed不同的地方</h2>
  <ol>
    <li>watch監聽單一變數</li>
    <li>computed監聽多個變數事件,產生一個值</li>
  </ol>
  <pre class="prettyprint">
    <div id="app">
      <label for="store">店家名稱</label>
      <input type="text" v-model="store">
      <br>
      <label for="productName">商品名稱</label>
      <input type="text" v-model="productName">
      <br>
      <label for="productPrice">商品價格</label>
      <input type="number" v-model.number="productPrice">
      <p>computed: {{ comVale }}</p>
      <p>watch: {{ watchValue }}</p>
    </div>
    var App = {
      data() {
        return {
          watchValue: "",
          // 單一產品
          store: "高雄",
          productName: "褲子",
          productPrice: 500,
        };
      },
      computed: {
        comVale() {
          return `${this.store},${this.productName},${this.productPrice}`
        }
      },
      watch: {
        store() {
          this.watchValue = `${this.store},${this.productName},${this.productPrice}`
        },
        productName() {
          this.watchValue = `${this.store},${this.productName},${this.productPrice}`
        },
        productPrice() {
          this.watchValue = `${this.store},${this.productName},${this.productPrice}`
        },
      }
    };
    Vue.createApp(App).mount("#app");
  </pre>
  <h2>使用watch監聽多個變數</h2>
  <ol>
    <li>data就要改為物件</li>
    <li>watch裡面改為handler</li>
    <li>deep也要改為true</li>
  </ol>
  <pre class="prettyprint">
    <label for="store">店家名稱：</label>
    <input type="text" v-model="product.store">
    <br>
    <label for="productName">商品名稱：</label>
    <input type="text" v-model="product.name">
    <br>
    <label for="productPrice">商品價格：</label>
    <input type="number" v-model.number="product.price">
    <p>value: {{ value }}</p>
    var App = {
      data() {
        return {
          product: {
            store: "高雄",
            name: "褲子",
            price: 500,
          },
        };
      },
      watch: {
        product: {
          handler(n, o) {
            console.log(n, o);
            this.value = `${this.product.store},${this.product.name},${this.product.price}`
          },
          deep: true,
        }
      }
    };
    Vue.createApp(App).mount("#app");
  </pre>
  <hr> -->
</template>
<script setup>
  import watch1 from '../components/watch1.vue'
</script>
<style></style>
