<template>
  <h2>v-if、v-else顯示 (物件會不顯示在html裡)</h2>
  <button v-on:click="changeView(1)">區塊1</button>
  <button @click="changeView(2)">區塊2</button>
  <button @click="changeView(4)">區塊3</button>
  <div class="div" v-if="view===1"><h3>區塊1</h3></div>
  <div class="div" v-if="view===2"><h3>區塊2</h3></div>
  <div class="div"  v-if="view!==1 && view!==2"><h3>錯誤</h3></div>
  <hr>
  <h2>v-show顯示 (使用css display實現)</h2>
  <button v-on:click="changeView(1)">區塊1</button>
  <button @click="changeView(2)">區塊2</button>
  <button @click="changeView(4)">區塊3</button>
  <div class="div" v-show="view===1"><h3>區塊1</h3></div>
  <div class="div" v-show="view===2"><h3>區塊2</h3></div>
  <div class="div"  v-if="view!==1 && view!==2"><h3>錯誤</h3></div>
  <hr>
  <h4>參考</h4>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=3WAs4Gnb2dA&list=PLSCgthA1AnifSzKdpV4FWq1pLVF4FbZ4K&index=5&pp=iAQB">v-if、v-else、v-show 條件渲染顯示與點擊事件綁定</a>
    </li>
  </ul>
  <hr>
</template>
<script setup>
  import {ref} from '@vue/reactivity'
  const view = ref(1)
  const changeView=(index)=>{
    //ref 取直要加.value
    view.value = index
  }
</script>
<style>
  .div{
    border: 1px solid #ddd
  }
</style>
