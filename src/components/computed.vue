<template>
  <h2>computed 計算屬性</h2>
  <!-- <p>計算返回該值</p>
  <p>不要重新給值</p>
  <p>不要seilde-effect 不要污染到變數</p> -->
  <br>
  <h3>數字轉百分比(一般函數)</h3>
  <p>一般函數=>畫面更新都會觸發一般函數</p>
  <input type="text" v-model="num">
  <p>{{ numFn() }}</p>
  <h3>數字轉百分比(computed)</h3>
  <p>computed=>監聽變數改變才會觸發computed</p>
  <input type="text" v-model="num">
  <p>{{ numFn2 }}</p>
  <h3>畫面更新會觸發一般函數</h3>
  <input type="text" v-model="test">
  <hr>
  <h4>參考</h4>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=9HLPU8a85fw&list=PLSCgthA1AnifSzKdpV4FWq1pLVF4FbZ4K&index=7">computed 計算屬性</a>
    </li>
  </ul>
  <hr>
</template>
<script setup>
  import {computed,ref} from 'vue'
  const num = ref(0.6)
  const test = ref(1)
  //一般函數=>畫面更新都會觸發numFn函數
  const numFn = ()=>{
    console.log('一般函數')
    // console.log(refValue,num.value)
    //不是數字
    if(Number.isNaN(num.value*100)) return num.value;
    //是數字
    return `${num.value*100}%`;
  }
  //computed=>需監聽變數改變才會觸發numFn2函數
  const numFn2 = computed(()=>{
    console.log('computed')
    //不是數字
    if(Number.isNaN(num.value*100)) return num.value;
    //是數字
    return `${num.value*100}%`;
  })
</script>
<style></style>
