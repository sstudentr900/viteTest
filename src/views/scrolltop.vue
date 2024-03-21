<template>
  <h2>滾動到頂</h2>
  <h3></h3>
  <pre>
    #src/router/index.js

    import { createRouter, createWebHistory } from 'vue-router'
    const router = createRouter({
      routes: [
        ...
      ],

      //滾動到頂
      scrollBehavior(){
        return{
          left:0,
          top:0,
        }
      }
    })

    // 將路由實例導出，以便其他地方可以導入並使用它
    export default router
  </pre>
  <h3>參考</h3>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=eqQrjNXveo8&list=PLFbd8KZNbe---KNiUInMOOSEtmfudpONG&index=53">【黑马程序员】前端Vue3小兔鲜实战项目-Day4-06-二级分类-定制路由滚动行为</a>
    </li>
  </ul>
</template>
<script setup></script>
<style scoped></style>
