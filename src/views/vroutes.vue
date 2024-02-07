<template>
  <h2>嵌套路由 children</h2>
  <pre>
    #src/router/index.js
    const router = createRouter({
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


    #children.vue
    //script
    import {RouterLink,RouterView} from 'vue-router'

    //template
    //連結 開頭要斜線 /children/childrenA
    &lt;RouterLink to="/children/childrenA"&gt;childrenA&lt;/RouterLink&gt;
    &lt;RouterLink to="/children/childrenB"&gt;childrenB&lt;/RouterLink&gt;

    //顯示頁面
    &lt;RouterView/&gt;
  </pre>
  <hr>
  <p>nav</p>
  <div class="nav">
    <ul>
      <li><router-link to='/vroutes'>vroutes1</router-link></li>
      <li><router-link to='/vroutes/vroutes2'>vroutes2</router-link></li>
    </ul>
  </div>
  <router-view></router-view>
  <div class="footer">footer</div>
  <hr>
  <h4>參考</h4>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=6Xzcgr1bB84&list=PLFbd8KZNbe---KNiUInMOOSEtmfudpONG&index=26">整体路由设计</a>
    </li>
    <li>
      <a href="https://www.youtube.com/watch?v=5KP4RiFyUJ0&list=PLFbd8KZNbe---KNiUInMOOSEtmfudpONG&index=42">一级分类</a>
    </li>
    <li>
      <a href="https://www.youtube.com/watch?v=nVYzfO8HXOE&list=PLFbd8KZNbe---KNiUInMOOSEtmfudpONG&index=48">路由配置</a>
    </li>
  </ul>
</template>
<script setup></script>
<style scoped>
  a.router-link-exact-active{
    color:#fff;
  }
</style>
