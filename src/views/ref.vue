<template>
  <h2>各板本變數</h2>
  <pre class="prettyprint">
      //Vue2 data內放變數
      data: {
        msg: 'Hello World'
      }

      //Vue3 setup內放變數,需要return
      setup() {
        const msg = ref('Hello World');
        return { msg }
      }

      //vite 搭配setup不用return
      const msg = ref('Hello World');
  </pre>

  <h2>ref()</h2>
  <ul>
    <li>ref 可以包任何型別</li>
    <li>ref 包裝該值讓他有響應試</li>
    <li>ref 是obj請用const</li>
    <li>ref 在script用時要.value才能取值</li>
  </ul>
  <pre class="prettyprint">
      #template
      <h1>vue: {{ count }}</h1>
      <button @click="increment"> count is: {{ count }}</button>

      #script
      const count = ref(0); 
      const increment = ()=>{
        //count 被包裝後需要用.value才能取值
        console.log(count)
        count.value += 1;
      }
  </pre>

  <h2>reactive()</h2>
  <ul>
    <li>reactive 只可以包{}和[]</li>
  </ul>
  <pre class="prettyprint">
      #template
      <h1>vue: {{ data }}</h1>

      #script
      const data = reactive({
        name: 'mike'
      }); 
      setTimeout(()=>{
        data.name = 'jacky'
      },2000)
  </pre>

  <h2>ref vs reactive</h2>
  <p>ref 取值需要加.value</p>
  <p>watch 觀看ref(object) 深度不會被監聽</p>
  <pre class="prettyprint">
      import { ref, reactive,watch } from 'vue';
      //ref包入object時watch不能被監聽
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
      watch(people2,()=>{
        console.log('people2被監聽')
      })

      //reactive 會解包 ref
      const num = ref(0);
      const people3 = reactive({
        num: num,
      });
      setTimeout(() => {
        //不需要.value
        people3.num = 300;
      }, 2000);

      <template>
        <h1>{{ people }}</h1>
        <h1>{{ people1 }}</h1>
        <h1>{{ people2 }}</h1>
        <h1>{{ people3 }}</h1>
      </template>
  </pre>
  <h4>參考</h4>
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
  </ul>
  <hr>
  <h2>reactive、ref</h2>
  <br>
  <h3>ref(動態資料監聽畫面和資料做改變)</h3>
  <p>ref可以包任何型別的值</p>
  <p>ref需用const接值</p>
  <p>取值要加.vue</p>
  <p>ref包obj watch 不能監聽除非deep</p>
  <p>text:{{text}}</p>
  <button @click="changeText">changeRef</button>
  <hr>
  <h3>reactive 只能用在物件 取值不用加value </h3>
  <p>reactive 會解包ref直接取值</p>
  <p>text:{{text3}}</p>
  <button @click="changeText3">changeReactive</button>
  <hr>
  <h4>參考</h4>
  <ul>
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
</template>
<script setup>
  import {reactive,ref} from 'vue'
  //ref 動態資料(監聽畫面和資料做改變)
  const text = ref('125')
  const changeText= ()=>{
    text.value = '132'
  }

  //reactive 只能用在物件 取值不用加value 
  const text3 = reactive({
    text: 'text',
    age: 12,
  })
  const changeText3= ()=>{
    text3.text = '132'
    text3.age = '23'
  }
</script>
<style></style>