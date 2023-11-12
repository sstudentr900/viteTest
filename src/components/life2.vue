<template>
  <p>life2</p>
</template>
<script setup>
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
    console.log('life2_onBeforeMount 掛載前 放異步')
  })
  onMounted(() => {
    console.log('life2_onMounted 掛載')
  })
  onBeforeUpdate(()=>{
    console.log('life2_onBeforeUpdate 更新前')
  })
  onUpdated(()=>{
    console.log('life2_onUpdated 更新')
  })
  onBeforeUnmount(()=>{
    console.log('life2_onBeforeUnmount 移除前')
  })
  onUnmounted(()=>{
    console.log('life2_onUnmounted 移除')
  })
</script>
<style></style>
