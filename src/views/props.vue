<template>
  <h2>父子組件溝通、傳資料</h2>
  <br>
  <input type="text" v-model="meg">
  <h3>父傳子</h3>
  <p>使用defindProps定義父值</p>
  <props5 :data="meg" data2="meg"/>
  <hr>
  <h3>子傳父</h3>
  <p>使用defineEmits定義子傳父</p>
  <props6 :data="meg" @update="updateHandler"/>
  <hr>
  <h3>model props emits(自訂義組件的資料綁定)</h3>
  <props2 v-model="num"/>
  {{num}}
  <hr>
  <h3>父傳子 子傳父</h3>
  <props3 :name="name" @changeName='updateName'/>
  <hr>
  <h3>One-Way Data Flow 單向資料流(props no emits)</h3>
  <props4 :name="name2" :updateName='updateName2'/>
  <hr>
  <h4>參考</h4>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=gbtu3SHZvkk&list=PLSCgthA1AnifSzKdpV4FWq1pLVF4FbZ4K&index=9">父子組件溝通、傳資料</a>
    </li>
    <li>
      <a href="https://www.youtube.com/watch?v=ureFPVghH30">components / props / emit</a>
    </li>
    <li>
      <a href="https://www.youtube.com/watch?v=firPRbhoX7o">v-model 資料的雙向綁定 / 自訂義組件的資料綁定 / One-Way Data Flow 單向資料流</a>
    </li>
  </ul>
  <hr>
</template>
<script setup>
  import {computed,reactive,ref,watch,watchEffect} from 'vue'
  import props5 from '../components/props5.vue'
  import props6 from '../components/props6.vue'
  const meg = ref('')
  //子傳父
  const updateHandler=(value)=>{
    console.log(value)
  }

  //model props/emits 自訂義組件的資料綁定
  import props2 from '../components/props2.vue'
  const num = ref('133')

  //props/emits
  import props3 from '../components/props3.vue'
  const name = ref('kk')
  const updateName = (newName)=>{
    name.value = newName
  }

  //props no emits
  import props4 from '../components/props4.vue'
  const name2= ref('kk')
  const updateName2 = (newName)=>{
    name2.value = newName
  }
</script>
<style></style>
