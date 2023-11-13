<template>
  <h2>components</h2>
  <br>
  <h3>全域組件</h3>
  <pre>
    //在main註冊全域組件
    import vImg from './components/vImg.vue'
    app.component('vImg', vImg)

    //在template引用方式
    <!-- <vImg/> -->
  </pre>
  <hr>
  <h3>動態載入component</h3>
  <input type="text" v-model="ischange">
  <button @click="change(0)">componentA {{ischange}}</button>
  <button @click="change(1)">componentB {{ischange}}</button>
  <button @click="change(2)">componentC {{ischange}}</button>
  <components :is="componentA" />
  <hr>
  <h4>參考</h4>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=ureFPVghH30">components / props / emit</a>
    </li>
  </ul>
  <hr>
</template>
<script setup>
  import {computed,reactive,ref,watch,watchEffect} from 'vue'
  import componentA from '../components/componentA.vue'
  import componentB from '../components/componentB.vue'
  import componentC from '../components/componentC.vue'
  const ischange = ref(0)
  const change = (idx)=>{
    ischange.value = idx
  }
  const components = computed(()=>{
    // console.log('39',Number.isNaN(Number(ischange.value)))
    const value = Number.isNaN(Number(ischange.value))?0:Number(ischange.value)
    switch( value ){
      case 0:
        return componentA
      case 1:
        return componentB 
      case 2:
        return componentC
      default:
        return componentC
        // break;  
    }
  })
</script>
<style></style>
