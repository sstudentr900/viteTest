<template>
  <h2>computed 計算屬性</h2>
  <br>
  <h3>畫面更新會觸發一般函數</h3>
  <input type="text" v-model="test">
  <hr>
  <h3>數字轉百分比(一般函數)</h3>
  <p>一般函數=>畫面更新都會觸發一般函數</p>
  <input type="text" v-model="num">
  <p>{{ numFn() }}</p>
  <hr>
  <h3>數字轉百分比(computed)</h3>
  <p>計算返回該值</p>
  <p>不要重新給值</p>
  <p>不要seilde-effect 不要污染到變數</p>
  <p>computed=>監聽變數改變才會觸發computed</p>
  <input type="text" v-model="num">
  <p>{{ numFn2 }}</p>
  <hr>
  <h3>computed get set</h3>
  <input type="text" v-model="fullName">
  <p>{{firstName}} {{lastName}}</p>
  <hr>
  <h4>參考</h4>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=9HLPU8a85fw&list=PLSCgthA1AnifSzKdpV4FWq1pLVF4FbZ4K&index=7">computed 計算屬性</a>
    </li>
    <li>
      <a href="https://www.youtube.com/watch?v=gJF5Cf2fz1A">定義資料 ref、reactive、computed 深度探討</a>
    </li>
  </ul>
  <hr>
</template>
<script setup>
  import {computed,ref} from 'vue'

  //畫面更新會觸發一般函數
  const test = ref(1)

  //一般函數=>畫面更新都會觸發numFn函數
  const num = ref(0.6)
  const numFn = ()=>{
    console.log('一般函數')
    //不是數字
    if(Number.isNaN(num.value*100)) return num.value;
    //是數字
    return `${num.value*100}%`;
  }

  //computed=>監聽變數改變才會觸發numFn2函數
  const numFn2 = computed(()=>{
    console.log('computed')
    //不是數字
    if(Number.isNaN(num.value*100)) return num.value;
    //是數字
    return `${num.value*100}%`;
  })

  //computed get set
  const firstName = ref('john')
  const lastName = ref('Doe')
  const fullName = computed({
    get(){
      //取值
      return `${firstName.value} ${lastName.value}`
    },
    set(newName){
      //設定值
      const [newfirstName,newlastName] = newName.split(' ')
      firstName.value = newfirstName
      lastName.value = newlastName
    }
  })

</script>
<style></style>
