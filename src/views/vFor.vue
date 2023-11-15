<template>
  <h2>v-for 迴圈渲染與 key 屬性【Proladon】</h2>
  <br>
  <h3>v-for array</h3>
  <ul>
    <li v-for="text in dataList">{{text}}</li>
  </ul>
  <hr>
  <h3>v-for obj</h3>
  <p>for 也可以跑obj</p>
  <ul>
    <li v-for="text in dataObjList">{{text}}</li>
  </ul>
  <p>obj 顯示key</p>
  <ul>
    <li v-for="(value,key,index) in dataObjList" v-show="index!==2">
      {{index}}:{{key}}:{{value}}
    </li>
  </ul>
  <hr>
  <h3>:key</h3>
  <p>key的值不能重複的</p>
  <p>key會刪除該元素(p)重新再載入所以動畫會重複執行</p>
  <div>
    <p class="test-cls" :key="test">{{test}}</p>
  </div>
  <p>key的值不能重複的(key,index都會重複,value不會)</p>
  <p>li有動畫時就不會只更換資料而是會重複執行動畫</p>
  <ul>
    <li v-for="(value,key,index) in dataObjList2" class="test-cls" :key="value">
      {{index}}:{{key}}:{{value}}
    </li>
  </ul>
  <hr>
  <h4>參考</h4>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=w6UaYZExkz0&list=PLSCgthA1AnifSzKdpV4FWq1pLVF4FbZ4K&index=6">v-for 迴圈渲染與 key 屬性【Proladon】</a>
    </li>
  </ul>
  <hr>
</template>
<script setup>
  import {ref} from '@vue/reactivity'
  const dataList=['a','b','c','d']
  const dataObjList= {a:'a1',b:'b1',c:'c1',d:'d1'}
  const dataObjList2= ref({a:'a1',b:'b1',c:'c1',d:'d1'})
  const test = ref('test')
  setTimeout(() => {
    test.value = 'apple'
  }, 2000);
  setTimeout(() => {
    dataObjList2.value = {a:'a3',b:'b4',c:'c5',d:'d6'}
  }, 2000);
</script>
<style>
  .test-cls{
    font-size: 40px;
    animation: openIn 1s ease-in-out;
  }
  @keyframes openIn {
    0%{
      opacity: 0;
      transform: translateY(20px)
    }
    100%{
      opacity: 1;
      transform: translateY(0)
    }
  }
</style>
