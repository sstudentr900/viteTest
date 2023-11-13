<template>
  <div>child:{{ data }},字數:{{msgCount}}</div>
  <button @click="handlerClick">click</button>
</template>
<script setup>
  import {computed,reactive,ref,watch,watchEffect} from 'vue'

  //父值
  const props = defineProps({
    data:{
      type: String,
      default: '',
      requires: true,
    }
  })

  //子傳父
  const emit = defineEmits(['update'])
  const handlerClick =()=>{
    emit('update','handlerClick')
  }

  //computed
  const msgCount = computed(()=>{
    return props.data.length
  })
  //watch
  watch(msgCount,(value)=>{
    emit('update',value)
  })
</script>
<style></style>
