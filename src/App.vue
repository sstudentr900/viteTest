<script setup> 
  import Navbar from './components/Navbar.vue';
</script>
<template>
  <!-- <h1>app</h1> -->
  <Navbar/>
  <div class="app_main">
    <router-view />
  </div>
</template>
<style scoped>
body{
  margin: 0;
  padding: 0;
}
.app_main{
  padding: 20px 20px 20px 240px;
}
</style>