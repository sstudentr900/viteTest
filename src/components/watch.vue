<template>
  <h2>watch、watchEffect 監聽器【Proladon】</h2>
  <br>
  <h3>文字監聽</h3>
  <input type="text" v-model="text">
  <h3>物件監聽2</h3>
  <input type="text" v-model="text2.levels.text">
  <h3>物件監聽3</h3>
  <input type="text" v-model="text3.levels.text">
  <h3>物件監聽4</h3>
  <input type="text" v-model="text4.levels.text">
  <input type="text" v-model="text4.label">
  <h3>物件監聽5</h3>
  <input type="text" v-model="text5.levels.text">
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
  const text = ref('text')
  //ref 能用在整數，物件
  const text2 = ref({
    levels:{
      text: 'text',
    }
  })
  //reactive 只能用在物件 取值不用加value 
  const text3 = reactive({
    levels:{
      text: 'text',
    },
    label: '1234'
  })
  const text4 = reactive({
    levels:{
      text: 'text',
    },
    label: '1234'
  })
  const text5 = reactive({
    levels:{
      text: 'text',
    },
    label: '1234'
  })

  //watch(新資料,前個資料)
  watch(text,(newDate,oldDate)=>{
    console.log(newDate,oldDate)
  })
  //物件監聽(需deep:true)
  watch(
    ()=>text2.value.levels.text,
    (newDate,oldDate)=>{
      console.log(newDate,oldDate)
    },
    {deep:true}
  )
  //reactive物件
  watch(
    ()=>text3.levels.text,
    (newDate,oldDate)=>{
      console.log(newDate,oldDate)
    },
    {deep:true}
  )
  //監聽多個
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
  const stop = watchEffect(()=>{
    console.log(text5.levels.text)
    //停止監聽
    if(text5.levels.text=='stop'){stop()}
  })
</script>
<style></style>
