<template>
  <h2>吸顶导航交互实现</h2>
  <h3></h3>
  <!-- <pre>
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
  </pre> -->
  <h3>參考</h3>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=F-1EMc_U8cI&list=PLFbd8KZNbe---KNiUInMOOSEtmfudpONG&index=32" target="_blank">【黑马程序员】前端Vue3小兔鲜实战项目-Day2-16-Layout-吸顶导航交互实现</a>
    </li>
  </ul>
</template>
<script setup>
</script>
<style lang="scss">
</style>