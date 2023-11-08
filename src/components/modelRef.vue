<template>
  <h2>建立組件與基本資料綁定 v-model、ref</h2>
  <br>
  <h3>單向綁定</h3>
  <p>{{data}}</p>
  <hr>
  <h3>雙向綁定</h3>
  <!-- v-model 綁定資料 -->
  <input type="text" v-model="text">
  <p>{{text}}</p>
  <hr>
  <h4>參考</h4>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=vfxWeC1PwOc&list=PLSCgthA1AnifSzKdpV4FWq1pLVF4FbZ4K&index=5">建立組件與基本資料綁定 v-model、ref【Proladon】</a>
    </li>
  </ul>
  <hr>
</template>
<script setup>
  import {ref} from '@vue/reactivity'
  //靜態資料
  const data ='hellow vue'
  //ref 動態資料(監聽畫面和資料做改變)
  const text = ref('125')
</script>
<style></style>
