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
