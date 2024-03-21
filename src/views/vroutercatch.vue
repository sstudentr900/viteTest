<template>
  <h2>路由缓存问题</h2>
  <p>相同路徑 home/1,home/2 生命週期onMounted不被調用ajax沒有更新</p>
  <h3>解法1.組件重建,缺點是全部更新</h3>
  <p>:key="$route.fullpath</p>
  <pre>
    #template 
    &lt;router-view :key="$route.fullpath"&gt;&lt;/router-view&gt;
  </pre>
  <h3>解法2.监听路由变化</h3>
  <p>beforeRouteUpdate</p>
  <pre>
    #script setup 
    import { onBeforeRouteUpdate } from 'vue-router'
    const serchFn = async((id=roter.params.id)=>{
      ...
    })
    onMounted(()=>serchFn())
    onBeforeRouteUpdate((to)=>{
      console.log('監聽路由變化')
      console.log('to是最新路由訊息',to)
      serchFn(to.params.id)
    })
  </pre>
  <h3>解法3.watch监听路由变化</h3>
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
