<template>
  <h2>watch、watchEffect 監聽器【Proladon】</h2>
  <h3>ref 監聽</h3>
  <input type="text" v-model="text">
  <h3>ref 物件監聽需deep:true</h3>
  <input type="text" v-model="text2.levels.text">
  <h3>reactive 物件監聽</h3>
  <input type="text" v-model="text3.levels.text">
  <h3>監聽多個</h3>
  <input type="text" v-model="text4.levels.text">
  <input type="text" v-model="text4.label">
  <h3>watchEffect 監聽</h3>
  <input type="text" v-model="text5.levels.text">
  <h3>停止監聽 stop()</h3>
  <h3>樣式變化</h3>
  <input type="text" :style="dynamicStyle" v-model="text6">
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
  //ref 文字監聽
  const text = ref('text')
  //watch(新資料,前個資料)
  watch(text,(newDate,oldDate)=>{
    console.log(newDate,oldDate)
  })

  //ref 物件監聽需 deep:true
  const text2 = ref({
    levels:{
      text: 'text',
    }
  })
  watch(
    ()=>text2.value.levels.text,
    (newDate,oldDate)=>{
      console.log(newDate,oldDate)
    },
    {deep:true}
  )
  
  //reactive 只能用在物件 取值不用加value 
  const text3 = reactive({
    levels:{
      text: 'text',
    },
    label: '1234'
  })
  //reactive物件
  watch(
    ()=>text3.levels.text,
    (newDate,oldDate)=>{
      console.log(newDate,oldDate)
    },
    {deep:true}
  )

  //監聽多個
  const text4 = reactive({
    levels:{
      text: 'text',
    },
    label: '1234'
  })
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
  const text5 = reactive({
    levels:{
      text: 'text',
    },
    label: '1234'
  })


  //停止監聽 stop()
  const stop = watchEffect(()=>{
    console.log(text5.levels.text)
    //停止監聽
    if(text5.levels.text=='stop'){stop()}
  })


  //樣式變化
  const text6 = ref('')
  const dynamicStyle = reactive({
    color:'red',
    fontSize:'14px',
    transition: 'ease-in-out 0.2s'
  })
  //watch(新資料,前個資料)
  watch(text6,(newDate,oldDate)=>{
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
<style scoped></style>
