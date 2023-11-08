<template>
  <h2>computed get set</h2>
  <br>
  <h3></h3>
  <input type="text" v-model="fullName">
  <p>{{firstName}} {{lastName}}</p>
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
  const firstName = ref('john')
  const lastName = ref('Doe')
  const fullName = computed({
    get(){
      return `${firstName.value} ${lastName.value}`
    },
    set(newName){
      const [newfirstName,newlastName] = newName.split(' ')
      firstName.value = newfirstName
      lastName.value = newlastName
    }
  })
</script>
<style></style>
