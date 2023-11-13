<template>
  <p>{{ props.name }}</p>
  <button @click='change'>chage name</button>
</template>
<script setup>
  // import {ref} from 'vue'
  const props = defineProps({
    name:{
      type: String,
      default: ''
    }
  })
  const emit = defineEmits(['changeName'])
  const change = ()=>{
    emit('changeName','jj')
  }
</script>
<style scoped></style>
