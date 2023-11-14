<template>
  <h2>Slot 插槽</h2>
  <br>
  <div class="app">
    <slot2>
      <h2>slot_單個</h2>
      <p>傳遞內容</p>
    </slot2>
    <br>
    <slot3>
      <template #btn>
        <h2>slot_多個</h2>
        <p>傳遞內容指定給btn</p>
      </template>
    </slot3>
    <slot4 :data='外傳內'>
      <template #btn='{text}'>
        <h2>slot_內外值互傳</h2>
        <p>{{ text }}</p>
      </template>
    </slot4>
  </div>
  <hr>
  <h4>參考</h4>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=ISBoRHyHm_w&list=PLSCgthA1AnifSzKdpV4FWq1pLVF4FbZ4K&index=13">Slot 插槽</a>
    </li>
    <li>
      <a href="https://ithelp.ithome.com.tw/articles/10274325">Slots 與 Render Functions 的進階心法</a>
    </li>
  </ul>
  <hr>
</template>
<script setup>
  import Slot2 from '../components/Slot2.vue'
  import Slot3 from '../components/Slot3.vue'
  import Slot4 from '../components/Slot4.vue'
  import {ref} from 'vue'
</script>
<style scoped>
  /* .app{
    width: 100%;
    max-width: 500px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  } */
</style>
