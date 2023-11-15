<script setup>
  import {computed,reactive,ref,watch,watchEffect} from 'vue'
  import props5 from '../components/props5.vue'
  import props6 from '../components/props6.vue'
  //父傳子
  const meg = ref('')

  //子傳父
  const updateHandler=(value)=>{
    console.log(value)
  }

  //model傳值 自訂義組件的資料綁定
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

  //class 切換
  import props7 from '../components/props7.vue'

</script>
<template>
  <h2>父子組件溝通、傳資料</h2>
  <p>defindProps接父值</p>
  <p>defineEmits傳父值</p>
  <br>
  <input type="text" v-model="meg">
  <h3>父傳子 meg是文字</h3>
  <props5 data2="meg"/>
  <props5 :data="'meg'"/>
  <h3>父傳子 meg是變數</h3>
  <props5 :data="meg"/>
  <hr>
  <h3>子傳父</h3>
  <p>使用defineEmits定義子傳父</p>
  <props6 :data="meg" @update="updateHandler"/>
  <hr>
  <h3>model傳值 (自訂義組件的資料綁定)</h3>
  <props2 v-model="num"/>
  {{num}}
  <hr>
  <h3>父子傳值</h3>
  <props3 :name="name" @changeName='updateName'/>
  <hr>
  <h3>One-Way Data Flow 單向資料流(props no emits)</h3>
  <p>把父變數傳給子達到同步</p>
  <props4 :name="name2" :updateName='updateName2'/>
  <hr>
  <h3>class 切換</h3>
  <props7 color="red"/>
  <props7 color="blue"/>
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
<style></style>
