<template>
  <h2>composables js共用邏輯</h2>
  <br>
  <h3>滑鼠XY</h3>
  <p>新增 src/composables/use函數名稱.js</p>
  <p>use做開頭</p>
  <p>pageX:{{pageX}},pageY:{{pageY}}</p>
  <hr>
  <h3>addCount readonly</h3>
  <p>{{ count }}</p>
  <button @click="addCount(count++)">addCount</button>
  <hr>
  <h3>fetch</h3>
  <!-- <div>{{ data.length }}</div> -->
  <div v-if="data.length===0">loading...</div>
  <div v-else>{{ data }}</div>
  <hr>
  <h4>參考</h4>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=JrIF9LidZGo&list=PLbOfcOk7bN42Kzp1wQsoLuU0vPUmFBe-X&index=5">composition API 共用邏輯 / Composables</a>
    </li>
  </ul>
  <hr>
</template>
<script setup>
  import {onMounted,ref} from 'vue'
  //滑鼠XY引用
  import { useWindowPosition } from '../composables/useWindowPosition.js'
  const {pageX,pageY} = useWindowPosition()

  //addCount
  import { useAddCount } from '../composables/useAddCount.js'
  const {count,addCount} = useAddCount(0)

  //fetch
  import { useFetch } from '../composables/useFetch.js'
  const {data,errorMessage,fetchInit} = useFetch()
  onMounted(()=>{
    fetchInit()
  })

</script>
<style></style>
