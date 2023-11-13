<template>
  <h2>v-model</h2>
  <br>
  <h3>單向綁定(靜態資料)</h3>
  <p>{{data}}</p>
  <hr>
  <h3>雙向綁定(v-model 綁定資料)</h3>
  <p>對表單和components都可綁定</p>
  <p>v-model.lazy="text" 不會即時會變成change</p>
  <p>v-model.number="text" 字串會變數字須注意開頭不能O</p>
  <p>v-model.trim="text" 拿掉空格</p>
  <input type="text" v-model="text">
  <p>{{text}}</p>
  <hr>
  <h4>參考</h4>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=vfxWeC1PwOc&list=PLSCgthA1AnifSzKdpV4FWq1pLVF4FbZ4K&index=5">建立組件與基本資料綁定 v-model、ref【Proladon】</a>
    </li>
    <li>
      <a href="https://www.youtube.com/watch?v=firPRbhoX7o">v-model 資料的雙向綁定 / 自訂義組件的資料綁定 / One-Way Data Flow 單向資料流</a>
    </li>
  </ul>
</template>
<script setup>
  import {computed,reactive,ref,watch,watchEffect} from 'vue'
  //單向綁定(靜態資料)
  const data ='hellow vue'

  //雙向綁定
  const text = ref('125')
</script>
<style></style>
