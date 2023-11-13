<template>
  <h2>父子組件溝通、傳資料</h2>
  <br>
  <input type="text" v-model="meg">
  <h3>父傳子</h3>
  <p>使用defindProps定義父值</p>
  <child2 :data="meg" data2="meg"/>
  <hr>
  <h3>子傳父</h3>
  <p>使用defineEmits定義子傳父</p>
  <child3 :data="meg" @update="updateHandler"/>
  <hr>
  <h4>參考</h4>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=gbtu3SHZvkk&list=PLSCgthA1AnifSzKdpV4FWq1pLVF4FbZ4K&index=9">父子組件溝通、傳資料</a>
    </li>
    <li>
      <a href="https://www.youtube.com/watch?v=ureFPVghH30">components / props / emit</a>
    </li>
  </ul>
  <hr>
</template>
<script setup>
  import {computed,reactive,ref,watch,watchEffect} from 'vue'
  import child2 from '../components/child2.vue'
  import child3 from '../components/child3.vue'
  const meg = ref('')
  //子傳父
  const updateHandler=(value)=>{
    console.log(value)
  }
</script>
<style></style>
