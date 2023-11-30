<template>
  <h2>watch、watchEffect 監聽器【Proladon】</h2>
  <br>
  <h3>ref 監聽</h3>
  <input type="text" v-model="text">
  <hr>
  <h3>ref 物件監聽需deep:true</h3>
  <input type="text" v-model="text2.levels.text">
  <hr>
  <h3>reactive 物件監聽</h3>
  <input type="text" v-model="text3.levels.text">
  <hr>
  <h3>監聽多個</h3>
  <input type="text" v-model="text4.levels.text">
  <input type="text" v-model="text4.label">
  <hr>
  <h3>watchEffect 監聽</h3>
  <input type="text" v-model="text5.levels.text">
  <hr>
  <h3>樣式變化</h3>
  <input type="text" :style="dynamicStyle" v-model="text6">
  <hr>
  <h2>watch、watchEffect、stop</h2>
  <pre class="prettyprint">
    <!-- <xmp> -->
    <template>
      <div>
        <input type="text" v-model="search">
        <input type="text" v-model="search2">
      </div>
    </template>
    //js
      import { ref, watch, watchEffect } from 'vue'
      export default {
        name: 'HelloWorld',
        setup() {
          const search = ref('');
          watch(search, (newValue, oldValue) => {
            console.log('watch search', newValue, oldValue)
          })
          const search2 = ref('');
          watch(search2, () => {
            console.log('watch search2', search2.value)
          })
          watchEffect(() => {
            console.log('watchEffect', search.value, search2.value)
          })
          return {
            search, search2
          }
        }
      }
    <!-- </xmp> -->
  </pre>
  <h3>要停止 watch、watchEffect，如下：</h3>
  <pre class="prettyprint">
    <!-- <xmp> -->
    const search = ref('');
      const stopWatch = watch(search, (newValue, oldValue) => {
        console.log('watch search', newValue, oldValue)
      })
      const stopWatchEffect = watchEffect(() => {
        console.log('watchEffect', search.value)
      })
      setTimeout(() => {
        stopWatch();
        stopWatchEffect();
      }, 5000)
    <!-- </xmp> -->
  </pre>
  <hr>
  <h4>參考</h4>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=2s8gJ-0gUBs&list=PLSCgthA1AnifSzKdpV4FWq1pLVF4FbZ4K&index=9">watch、watchEffect 監聽器【Proladon】</a>
    </li>
  </ul>
  <hr>
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
    <!-- <xmp> -->
    watch:{
        slideData:{
          handler:function(){
            //監聽v-for完執行
            this.$nextTick(()=>{})
          }
        }
      }
    <!-- <script> -->
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
    <!-- </script> -->
    <!-- </xmp> -->
  </pre>
  <hr>
  <h4>參考</h4>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=3F_xRWa39pM&list=PLmOn9nNkQxJEFpabd412vGw_k7-lHlJOP&index=39">官網</a>
    </li>
  </ul>
  <hr>
  <h2>watch監聽器</h2>
  <pre class="prettyprint">
    <!-- <xmp> -->
    <div id="app">
      <h3>watch 監聽單一變數</h3>
      <label for="name">監聽變數：</label>
      <input type="text" id="name" v-model="tempName">
      <P>大於五個字: {{ big }}</P>
      <p>小於五個字: {{ small }}</p>
    </div>
    <!-- <script> -->
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
    <!-- </script> -->
    <!-- </xmp> -->
  </pre>
  <h2>watch與computed不同的地方</h2>
  <ol>
    <li>watch監聽單一變數</li>
    <li>computed監聽多個變數事件,產生一個值</li>
  </ol>
  <pre class="prettyprint">
    <!-- <xmp> -->
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
    <!-- <script> -->
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
    <!-- </script> -->
    <!-- </xmp> -->
  </pre>
  <h2>使用watch監聽多個變數</h2>
  <ol>
    <li>data就要改為物件</li>
    <li>watch裡面改為handler</li>
    <li>deep也要改為true</li>
  </ol>
  <pre class="prettyprint">
    <!-- <xmp> -->
    <div id="app">
      <label for="store">店家名稱：</label>
      <input type="text" v-model="product.store">
      <br>
      <label for="productName">商品名稱：</label>
      <input type="text" v-model="product.name">
      <br>
      <label for="productPrice">商品價格：</label>
      <input type="number" v-model.number="product.price">
      <p>value: {{ value }}</p>
    </div>
    <!-- <script> -->
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
    <!-- </script> -->
    <!-- </xmp> -->
  </pre>
  <hr>
</template>
<script setup>
  import {computed,reactive,ref,watch,watchEffect} from 'vue'
  //ref 文字監聽
  const text = ref('text')
  //watch(新資料,前個資料)
  watch(text,(newDate,oldDate)=>{
    console.log(newDate,oldDate)
  })

  //ref 物件監聽需deep:true
  const text2 = ref({
    levels:{
      text: 'text',
    }
  })
  watch(
    ()=>text2.value.levels.text,
    (newDate,oldDate)=>{
      console.log(newDate,oldDate)
    },
    {deep:true}
  )
  
  //reactive 只能用在物件 取值不用加value 
  const text3 = reactive({
    levels:{
      text: 'text',
    },
    label: '1234'
  })
  //reactive物件
  watch(
    ()=>text3.levels.text,
    (newDate,oldDate)=>{
      console.log(newDate,oldDate)
    },
    {deep:true}
  )

  //監聽多個
  const text4 = reactive({
    levels:{
      text: 'text',
    },
    label: '1234'
  })
  watch(
    [
      ()=>text4.levels.text,
      ()=>text4.label,
    ],
    (newDate,oldDate)=>{
      console.log(newDate)
    },
    {deep:true}
  )


  //watchEffect 不用指定自動判斷底下依賴就監聽
  const text5 = reactive({
    levels:{
      text: 'text',
    },
    label: '1234'
  })
  const stop = watchEffect(()=>{
    console.log(text5.levels.text)
    //停止監聽
    if(text5.levels.text=='stop'){stop()}
  })


  //樣式變化
  const text6 = ref('')
  const dynamicStyle = reactive({
    color:'red',
    fontSize:'14px',
    transition: 'ease-in-out 0.2s'
  })
  //watch(新資料,前個資料)
  watch(text6,(newDate,oldDate)=>{
    console.log(newDate,oldDate)
    if(newDate.length%2===0){
      dynamicStyle.color='skyblue'
      dynamicStyle.fontSize='20px'
    }else{
      dynamicStyle.color='red'
      dynamicStyle.fontSize='14px'
    }
  })
</script>
<style></style>
