<template>
  <h2>生命周期函数</h2>
  <ol>
    <li>beforeCreate:Vue實體建立，狀態事件還沒初始化</li>
    <li>created:資料建立完成已配置選項 data 、computed、methods、watch,若直接操作 DOM 節點會找不到元素</li>
    <li>beforeMount:HTML結構準備與DOM節點綁定，尚未掛載</li>
    <li>mounted:實例已掛載，完成編譯 template 內容,已經將DOM元素掛載到畫面上</li>
  </ol>
  <h3>實體更新階段</h3>
  <ol>
    <li>beforeUpdate:當資料有更動，畫面更新前</li>
    <li>Update:當資料有更動，畫面更新完成</li>
  </ol>
  <h3>銷毀階段</h3>
  <ol>
    <li>beforeUnmount:Vue實體被銷毀前</li>
    <li>unmounted:Vue實體被銷毀完成</li>
  </ol>
  <pre class="prettyprint">
    選項式api                 組合式api
    beforeCreate/created      setup
    beforeMount               onBeforeMount
    mounted                   onMounted
    beforeUpdate              onBeforeUpdate
    updated                   onUpdated
    beforeUnmount             onBeforeUnmount
    unmounted                 onUnmounted 
  </pre>
  <pre>
    import {
      onBeforeMount,
      onMounted ,
      onBeforeUpdate,
      onUpdated,
      onBeforeUnmount,
      onUnmounted,
      ref
    } from 'vue'
    const count = ref(0)
    const count = ref(0)
    //掛載之前
    onBeforeMount(()=>{
      console.log('life1_onBeforeMount 掛載前 放異步')
    })
    onMounted(() => {
      console.log('life1_onMounted 掛載')
    })
    onBeforeUpdate(()=>{
      console.log('life1_onBeforeUpdate 更新前')
    })
    onUpdated(()=>{
      console.log('life1_onUpdated 更新')
    })
    onBeforeUnmount(()=>{
      console.log('life1_onBeforeUnmount 移除前')
    })
    onUnmounted(()=>{
      console.log('life1_onUnmounted 移除')
    })
  </pre>
  <hr> 
  <h4>參考</h4>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=SyARKyBfWEc&list=PLFbd8KZNbe---KNiUInMOOSEtmfudpONG&index=10" target="_blank">生命周期函数</a>
    </li>
    <li>
      <a href="https://ithelp.ithome.com.tw/articles/10280361" target="_blank">Vue.js 從零開始</a>
    </li>
  </ul>
  <hr>  
  <h2>組件生命週期</h2>
  <br>
  <h3>onUpdated 畫面更新</h3>
  <button @click="count++"> add num</button>
  {{ count }}
  <h3>onUnmounted 組件刪除</h3>
  <button @click='showLife2 = !showLife2 '>showLife2 toggle</button>
  <life2 v-if='showLife2' />
  <hr>
  <h4>參考</h4>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=UWcXzh9DhRY&list=PLSCgthA1AnifSzKdpV4FWq1pLVF4FbZ4K&index=12">組件生命週期</a>
    </li>
  </ul>
  <hr> 
</template>
<script setup>
  import life2 from '../components/life2.vue'
  import {
    onBeforeMount,
    onMounted ,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted,
    ref
  } from 'vue'
  const count = ref(0)
  const showLife2 = ref(true)
  //掛載之前
  onBeforeMount(()=>{
    console.log('life1_onBeforeMount 掛載前 放異步')
  })
  onMounted(() => {
    console.log('life1_onMounted 掛載')
  })
  onBeforeUpdate(()=>{
    console.log('life1_onBeforeUpdate 更新前')
  })
  onUpdated(()=>{
    console.log('life1_onUpdated 更新')
  })
  onBeforeUnmount(()=>{
    console.log('life1_onBeforeUnmount 移除前')
  })
  onUnmounted(()=>{
    console.log('life1_onUnmounted 移除')
  })
</script>
<style></style>
