<template>{{ data.nowdata.length }}</template>
<script setup>
  import {onMounted,reactive,getCurrentInstance} from 'vue'
  const { proxy } = getCurrentInstance()
  const data = reactive({
    nowdata:''
  })
  onMounted(async() => {
    console.log('onMounted')
    try{
      const res = await proxy.$http.get(
        'https://60bd9841ace4d50017aab3ec.mockapi.io/api/post_card'
      );
      // console.log('onMounted',res.data)
      data.nowdata = res.data
    }catch(error){
      // console.log(error)
    }
  })
</script>
<style></style>
