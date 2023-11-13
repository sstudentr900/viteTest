<template>
  <h2>composables js共用邏輯</h2>
  <br>
  <h3>滑鼠XY</h3>
  <p>新增 src/composables/use函數名稱.js</p>
  <p>use做開頭</p>
  <p>pageX:{{pageX}},pageY:{{pageY}}</p>
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
  import {computed,ref} from 'vue'
  import { useWindowPosition } from '../composables/useWindowPosition.js'
  const {pageX,pageY} = useWindowPosition()
</script>
<style></style>
