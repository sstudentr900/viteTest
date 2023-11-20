<template>
  <div v-if="data.length===0">loading...</div>
  <div v-else>{{ data.length }}</div>
</template>
<script setup>
  //composables包裝
  import {onMounted} from 'vue'
  import { useAsios } from '../composables/useAsios.js'
  const {data,errorMessage,useAsiosInit} = useAsios({
    url:'https://60bd9841ace4d50017aab3ec.mockapi.io/api/post_card'
  })
  onMounted(()=>{
    useAsiosInit()
  })
</script>
<style></style>
