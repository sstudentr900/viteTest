<template>
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