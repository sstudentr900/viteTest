<template>
  <div class="navbar">
    <router-link to="/ref">ref reactive 變數</router-link>
    <router-link to="/watch">watch 變數監聽</router-link>
    <router-link to="/computed">computed 計算函數</router-link>
    <router-link to="/component">component 組件</router-link>
    <router-link to="/composables">composables js共用邏輯</router-link>
    <router-link to="/props">props emit 資料傳遞</router-link>
    <router-link to="/pinia">pinia 資料傳遞</router-link>
    <router-link to="/model">v-model 相向綁定</router-link>
    <router-link to="/naive">naive ui</router-link>
    <router-link to="/slot">slot</router-link>
    <router-link to="/vrouter">router</router-link>
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
