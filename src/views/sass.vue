<template>
  <h2>scss文件的自动导入</h2>
  <h3></h3>
  <pre>
    #新增 src/styles/var.scss
    $priceColor:#cf4444; 

    #新增 vite.config css
    export default defineConfig(({ command })=>{
      return {
        plugins: [],
        resolve:{
          //@=>./src
          alias:{
            '@':fileURLToPath(new URL('./src',import.meta.url))
          }
        },
        css:{
          preprocessorOptions:{
            scss:{
              //自動導入樣式
              additionalData:`@import "@/styles/var.scss";`
            }
          }
        }
      }
    })

    #引用
    &lt;style lang="scss">
      .text{
        color: $priceColor;
      }
    &lt;/style>


    &lt;template>
      &lt;p class="text">1233&lt;/p>
    &lt;/template>
  </pre>
  <p class="text">1233</p>
  <h3>參考</h3>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=5fDdNntCpYM&list=PLFbd8KZNbe---KNiUInMOOSEtmfudpONG&index=28" target="_blank">【黑马程序员】前端Vue3小兔鲜实战项目-Day2-12-项目起步-scss文件的自动导入</a>
    </li>
    <li>
      <a href="https://ithelp.ithome.com.tw/m/articles/10270465" target="_blank">Day_11 : 讓 Vite 來開啟你的 Vue 之 Config 常見配置 (Vite 最終篇 XD)</a>
    </li>
  </ul>
</template>
<script setup>
  import {reactive,ref} from 'vue'
</script>
<style lang="scss">
  .text{
    color: $priceColor;
  }
</style>