<template>
  <h2>路由缓存问题-換路由時ajax沒有更新</h2>
  <h3>解法1.組件重建,缺點是全部更新</h3>
  <p>:key="$route.fullpath</p>
  <pre>
    #template 
    &lt;router-view :key="$route.fullpath"&gt;&lt;/router-view&gt;
  </pre>
  <h3>解法2.導航守衛監聽</h3>
  <p>beforeRouteUpdate</p>
  <pre>
    #script setup 
    import { onBeforeRouteUpdate } from 'vue-router'
    onBeforeRouteUpdate((to)=>{
      console.log('監聽路由變化')
      console.log('to是最新路由訊息',to)
      apiFn(to)
    })
  </pre>
  <h3>解法3.监听路由变化</h3>
  <pre>
    #script setup
    import { useRoute } from 'vue-router'
    const route = useRoute()
    watch(
      () => route.path,
      (newPath, oldPath) => { console.log(newPath) },
      { immediate: true }
    );
  </pre>
  <h3>參考</h3>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=m5FfC79ooCc&list=PLFbd8KZNbe---KNiUInMOOSEtmfudpONG&index=46"> 路由缓存问题</a>
    </li>
    <li>
      <a href="https://juejin.cn/post/7171489778230100004">vue3监听路由变化</a>
    </li>
  </ul>
</template>
<script setup></script>
<style scoped></style>
