<script setup> 
  import Navbar from './components/Navbar.vue';
</script>
<template>
  <!-- <h1>app</h1> -->
  <Navbar/>
  <div class="app_main">
    <router-view/>
  </div>
</template>
<style>
body{
  margin: 0;
  padding: 0;
}
.app_main{
  padding: 20px 80px 20px 360px;
  max-width: 960px;
}
hr{
  margin: 60px 0;
  /* opacity: .8; */
}
ul{
  padding-left: 20px;
}
h2,
h3{
  margin: 50px 0 20px;
}
p{
  margin: 0;
}
pre{
  border: 1px solid #4d4d4d;
  padding: 20px 0;
  border-radius: 8px;
}
</style>
