<template></template>
<script setup>
  import request from '../utils/request'
  import {onMounted} from 'vue'
  onMounted(()=>{
    console.log('onMounted')
    request({
      url:'/get',
      methods: 'get',
    }).then(res=>{
      // console.log(import.meta.env.VITE_APP_API)
      console.log(res.data)
    })
  })
</script>
<style scoped></style>
