<template>
  <h2>文字監聽</h2>
  <br>
  <h3>樣式變化</h3>
  <input type="text" :style='dynamicStyle' v-model="text">
  <hr>
  <h4>參考</h4>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=2s8gJ-0gUBs&list=PLSCgthA1AnifSzKdpV4FWq1pLVF4FbZ4K&index=9">watch、watchEffect 監聽器【Proladon】</a>
    </li>
  </ul>
  <hr>
</template>
<script setup>
  import {computed,reactive,ref,watch,watchEffect} from 'vue'
  const text = ref('')
  const dynamicStyle = reactive({
    color:'red',
    fontSize:'14px',
    transition: 'ease-in-out 0.2s'
  })
  //watch(新資料,前個資料)
  watch(text,(newDate,oldDate)=>{
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
