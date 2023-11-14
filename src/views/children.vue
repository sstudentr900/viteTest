<script setup>
  import {computed,reactive,ref,watch,watchEffect} from 'vue'
  import {RouterLink,RouterView} from 'vue-router'
</script>
<template>
  <h2>children</h2>
  <br>
  <!-- 開頭要斜線 -->
  <RouterLink to="/children/childrenA">childrenA</RouterLink>
  <RouterLink to="/children/childrenB">childrenB</RouterLink>
  <RouterView/>
</template>
<style scoped>
  a{
    padding: 6px 12px;
  }
</style>
