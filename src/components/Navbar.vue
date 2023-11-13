<template>
  <div class="navbar">
    <router-link to="/ref">ref</router-link>
    <router-link to="/watch">watch</router-link>
    <router-link to="/computed">computed</router-link>
    <router-link to="/component">component</router-link>
    <router-link to="/composables">composables</router-link>
    <router-link to="/props"> props emit</router-link>
    <router-link to="/model">v-model</router-link>
  </div>
</template>
<script setup></script>
<style scoped>
  .navbar{
    width: 220px;
    position: fixed;
    top: 0;
    left: 0;
    min-height: 100vh;
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    padding: 20px;
    align-items: baseline;
    box-sizing: border-box;
    display: flex;
    flex-flow: column;
  }
</style>
