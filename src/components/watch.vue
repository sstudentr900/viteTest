<template>
  <h2>watch、watchEffect 監聽器【Proladon】</h2>
  <br>
  <h3>文字監聽</h3>
  <input type="text" v-model="text">
  <h3>物件監聽</h3>
  <input type="text" v-model="text2.levels.text">
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
  import {computed,ref,watch} from 'vue'
  const text = ref('text')
  const text2 = ref({
    levels:{
      text: 'text',
    }
  })
  //watch(新資料,前個資料)
  watch(text,(newDate,oldDate)=>{
    console.log(newDate,oldDate)
  })
  //物件監聽
  watch(
    ()=>text2.value.levels.text,
    (newDate,oldDate)=>{
      console.log(newDate,oldDate)
    },
    {deep:true}
  )
</script>
<style></style>
