<template>
  <div>child:{{ data }},字數:{{msgCount}}</div>
</template>
<script setup>
  import {computed,reactive,ref,watch,watchEffect} from 'vue'

  //array 方式
  // defineProps(['data'])

  //obj 方式
  const props = defineProps({
    data:{
      type: String,
      default: '',
      requires: true,
    }
  })


  const msgCount = computed(()=>{
    return props.data.length
  })
</script>
<style></style>
