<template>
  <p>{{ props.name }}</p>
  <button @click='props.updateName("jack")'>chage name</button>
</template>
<script setup>
  // import {ref} from 'vue'
  const props = defineProps({
    name:{
      type: String,
      default: ''
    },
    updateName:{
      type: Function, 
      default: ()=>{},
    }
  })
</script>
<style scoped></style>
