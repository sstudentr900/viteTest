<template>
  <div class="navbar">
    <router-link active-class="active" to="/start">start</router-link>
    <router-link active-class="active" to="/environment">Vite 與環境變數</router-link>
    <router-link active-class="active" to="/setup">setup 語法糖</router-link>
    <router-link active-class="active" to="/currentInstance">掛载全局方法</router-link>
    <router-link active-class="active" to="/life">生命週期</router-link>
    <!-- <router-link active-class='active' to="/installs">installs</router-link> -->
    <router-link active-class="active" to="/ref">ref reactive 變數</router-link>
    <router-link active-class="active" to="/watch">watch 變數監聽</router-link>
    <router-link active-class="active" to="/computed">computed 計算函數</router-link>
    <router-link active-class="active" to="/composables">composables 共用函數</router-link>
    <router-link active-class="active" to="/component">component 共用組件</router-link>
    <router-link active-class="active" to="/slot">slot</router-link>
    <router-link active-class="active" to="/props">props emit 資料傳遞</router-link>
    <router-link active-class="active" to="/model">v-model 相向綁定</router-link>
    <router-link active-class="active" to="/vrouter">router</router-link>
    <router-link active-class="active" to="/vroutes">routes 巢狀路由</router-link>
    <router-link active-class="active" to="/vroutercatch">router catch 路由缓存</router-link>
    <router-link active-class="active" to="/ifShow">ifShow</router-link>
    <router-link active-class="active" to="/vFor">for</router-link>
    <router-link active-class="active" to="/von">von</router-link>
    <router-link active-class="active" to="/style">style</router-link>
    <router-link active-class="active" to="/vhtml">vhtml</router-link>
    <router-link active-class="active" to="/sass">sass</router-link>
    <router-link active-class="active" to="/active">active</router-link>
    <router-link active-class="active" to="/nav">選單</router-link>
    <router-link active-class="active" to="/imageerror">圖片載入</router-link>
    <router-link active-class="active" to="/imglazy">圖片懶加載</router-link>
    <router-link active-class="active" to="/vfile">圖片上傳</router-link>
    <router-link active-class="active" to="/transition">transition</router-link>
    <router-link active-class="active" to="/scrolltop">自動滾動</router-link>
    <router-link active-class="active" to="/download">download</router-link>
    <router-link active-class="active" to="/addtable">新增修改表單</router-link>
    <router-link active-class="active" to="/shoppingcart">shoppingcart 購物車</router-link>
    <router-link active-class="active" to="/input_checkbox">input checkbox</router-link>
    <router-link active-class="active" to="/pinia">plug pinia 資料傳遞</router-link>
    <router-link active-class="active" to="/express">plug express</router-link>
    <router-link active-class="active" to="/nuxt">plug nuxt</router-link>
    <router-link active-class="active" to="/naive">plug naive ui</router-link>
    <router-link active-class="active" to="/validate">plug vee-validate</router-link>
    <router-link active-class="active" to="/axioss">plug axios</router-link>
    <router-link active-class="active" to="/mocks">plug mock 模擬API</router-link>
    <router-link active-class="active" to="/jsonserver">plug json-sever 模擬API</router-link>
    <router-link active-class="active" to="/throttle">plug throttle節流</router-link>
    <router-link active-class="active" to="/elementplus">plug elementplus</router-link>
    <router-link active-class="active" to="/i18n">plug i18n</router-link>
    <router-link active-class="active" to="/lazyload">plug lazyload</router-link>
    <router-link active-class="active" to="/nginx">plug nginx</router-link>
    <router-link active-class="active" to="/nprogress">plug nprogress</router-link>
    <router-link active-class="active" to="/scrolltotop">plug scrolltotop</router-link>
    <router-link active-class="active" to="/swiper">plug swiper輪播</router-link>
    <router-link active-class="active" to="/slide">plug slide</router-link>
    <router-link active-class="active" to="/slide2">plug slide2</router-link>
    <router-link active-class="active" to="/slide3">plug slide3</router-link>
    <router-link active-class="active" to="/slide4">plug slide4</router-link>
    <router-link active-class="active" to="/slide5">plug slide5</router-link>
    <router-link active-class="active" to="/countdown">plug countdown</router-link>
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
  .navbar a.active{
    color:#fff;
  }
</style>
