<template>
  <h2>Vue-Router</h2>
  <br>
  <h3>main安裝</h3>
  <pre>
    //main
    import router from './router'  
    app.use(router);
  </pre>
  <hr>
  <h3>新增router</h3>
  <p>history</p>
  <pre>
    src/router/index.js

    import { createRouter, createWebHistory } from 'vue-router'
    import home from '../views/home.vue'

    const router = createRouter({
     
      history: createWebHistory(import.meta.env.BASE_URL),
      routes: [
        {path: '/',component: home},
        //動態載入(到該頁面才載入比較快)
        {path: '/about',component: ()=>import('../views/about.vue')},
        //找不到頁面，要放在最後
        {path: '/:error(.*)*',component: error},
      ]
    })

    // 將路由實例導出，以便其他地方可以導入並使用它
    export default router
  </pre>
  <hr>
  <h3>引用router</h3>
  <pre>
    <template>
      //連結
      <router-link to="/">home</router-link>

      //顯示頁面
      <router-view />
    </template>
  </pre>
  <hr>
  <h3>createWebHistory</h3>
  <p>需要服務器去配置</p>
  <p>import.meta.env.BASE_URL 用於指定應用程序的根路徑。如果應用程序可能在不同的 URL 路徑下運行（如子目 錄或子網站）就建議使用這個參數來設置。</p>
  <p>若無任何子目錄則可寫 history: createWebHistory()</p>
  <pre>
    history: createWebHistory(import.meta.env.BASE_URL),
  </pre>
  <h3>createWebHasHistory</h3>
  <p>網址會有#字號</p>
  <pre>
    history: createWebHasHistory()
  </pre>
  <hr>
  <h3>嵌套路由 children</h3>
  <pre>
    //src/router/index.js

    const router = createRouter({
      history: createWebHistory(import.meta.env.BASE_URL),
      routes: [
        //父
        {
          path: '/children',
          component: ()=>import('../views/children.vue'),
          //子
          children: [
            {
              //path不用斜線
              path: 'childrenA',
              component: ()=>import('../views/children/childrenA.vue'),
            },
            {
              path: 'childrenB',
              component: ()=>import('../views/children/childrenB.vue'),
            },
          ]
        },
      ]
    })
  </pre>
  <p>children.vue</p>
  <pre>
    //children.vue

    //script
    <!-- <script setup>
      import {RouterLink,RouterView} from 'vue-router'
    </script> -->
    
    //template
    <!-- <template>
      //開頭要斜線 /children/childrenA
      <RouterLink to="/children/childrenA">childrenA</RouterLink>
      <RouterLink to="/children/childrenB">childrenB</RouterLink>
      <RouterView/>
    </template> -->
  </pre>
  <hr>
  <h3>push replace query</h3>
  <pre>
    import { useRoute,useRouter } from 'vue-router'
    //取得網址
    const route = useRoute()
    console.log(route.path) 
    

    //push replace query
    const router = useRouter()
    router.push('/') //會記錄並換頁
    router.push({path:"/"}) //同上
    router.push({ path:"/",query:{username:'qq'} }) //帶參數(/?username=qq) 
    router.replace({path:"/"}) //不會記錄上一頁


    //錯誤跳頁
    setTimeout(()=>{
      router.push('/') 
    },3000)
  </pre>
  <hr>
  <h4>參考</h4>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=5YzSuKfwWv4"> Vue-Router 基礎入門，SPA網頁輕鬆上手 !</a>
    </li>
  </ul>
  <hr>
</template>
<script setup>
  import {ref} from 'vue'
</script>
<style scoped>
</style>
