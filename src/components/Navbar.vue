<template>
  <div class="navbar">
    <router-link to="/start">start</router-link>
    <router-link to="/environment">Vite 與環境變數</router-link>
    <router-link to="/currentInstance">掛载全局方法</router-link>
    <router-link to="/life">生命週期</router-link>
    <!-- <router-link to="/installs">installs</router-link> -->
    <router-link to="/ref">ref reactive 變數</router-link>
    <router-link to="/watch">watch 變數監聽</router-link>
    <router-link to="/computed">computed 計算函數</router-link>
    <router-link to="/composables">composables js共用邏輯</router-link>
    <router-link to="/slot">slot</router-link>
    <router-link to="/component">component 組件</router-link>
    <router-link to="/props">props emit 資料傳遞</router-link>
    <router-link to="/pinia">pinia 資料傳遞</router-link>
    <router-link to="/model">v-model 相向綁定</router-link>
    <router-link to="/vrouter">router</router-link>
    <router-link to="/ifShow">ifShow</router-link>
    <router-link to="/vFor">for</router-link>
    <router-link to="/von">von</router-link>
    <router-link to="/style">style</router-link>
    <router-link to="/vhtml">vhtml</router-link>
    <router-link to="/imageerror">圖片載入</router-link>
    <router-link to="/imglazy">圖片懶加載</router-link>
    <router-link to="/transition">transition</router-link>
    <router-link to="/express">express</router-link>
    <router-link to="/nuxt">nuxt</router-link>
    <router-link to="/naive">plug naive ui</router-link>
    <router-link to="/validate">plug vee-validate</router-link>
    <router-link to="/axioss">plug axios</router-link>
    <router-link to="/mocks">plug mock</router-link>
    <router-link to="/jsonserver">plug JSON-SERVER</router-link>
    <router-link to="/throttle">plug throttle節流</router-link>
    <router-link to="/elementplus">plug elementplus</router-link>
    <router-link to="/i18n">plug i18n</router-link>
    <router-link to="/lazyload">plug lazyload</router-link>
    <router-link to="/nginx">plug nginx</router-link>
    <router-link to="/nprogress">plug nprogress</router-link>
    <router-link to="/scrolltotop">plug scrolltotop</router-link>
    <router-link to="/swiper">plug swiper輪播</router-link>
    <router-link to="/slide">plug slide</router-link>
    <router-link to="/slide2">plug slide2</router-link>
    <router-link to="/slide3">plug slide3</router-link>
    <router-link to="/slide4">plug slide4</router-link>
  </div>
</template>
<script setup></script>
<style scoped>
  .navbar{
    width: 280px;
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
    height: 100%;
    overflow: auto;
  }
</style>
