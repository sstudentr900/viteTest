<template>
  <h2>如何在 Vue3 中处理 img 标签图片无法加载的问题</h2>
  <pre>
    #template img
    :src="data.img" @error.once="$defaultImage($event,'basis.png')"

    #js
    export function getUrl(url){
      return new URL(`/src/assets/img/${url}`, import.meta.url).href
    }
    export function defaultImage(event,defaultImage='basis.png'){
      // event.target.src = '/src/assets/img/basis.png';
      event.target.src = getUrl(defaultImage);
    }
  </pre>
  <hr>
  <h4>參考</h4>
  <ul>
    <li>
      <a href="https://champyin.com/2018/11/26/js%E5%A6%82%E4%BD%95%E8%AF%86%E5%88%AB%E5%9B%BE%E7%89%87%E5%8A%A0%E8%BD%BD%E5%A4%B1%E8%B4%A5/">Vue3 如何挂js如何识别图片加载失败</a>
    </li>
    <li>
      <a href="https://www.cnblogs.com/zhiyiYo/p/15973175.html">如何在 Vue3 中处理 img 标签图片无法加载的问题</a>
    </li>
  </ul>
  <hr>
</template>
<script setup>
  import {computed,reactive,ref,watch,watchEffect} from 'vue'
</script>
<style></style>
