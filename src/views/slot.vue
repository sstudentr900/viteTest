<script setup>
  import Slot2 from '../components/Slot2.vue'
  import Slot3 from '../components/Slot3.vue'
  import Slot4 from '../components/Slot4.vue'
  import Slot5 from '../components/Slot5.vue'
  import {ref} from 'vue'
  const name = ref('kk')
</script>
<template>
  <h2>Slot 插槽</h2>
  <br>
  <h3>slot_組件之間放傳遞內容(單個)</h3>
  <slot2>
    <p>slot2傳遞內容</p>
  </slot2>
  <hr>
  <h3>slot_組件之間放傳遞內容(多個)</h3>
  <p>改完要重整資料有時跑不出來</p>
  <p>外#name 去區分傳遞內部name=name位置</p>
  <slot3>
    <template #icon>
      <p>icon</p>
    </template>
    <template #btn>
      <p>btn</p>
    </template>
  </slot3>
  <hr>
  <h3>slot_內傳外</h3>
  <p>改完要重整資料有時跑不出來</p>
  <p>#btn="{ text }" 內部(text)資料往外傳</p>
  <slot4>
    <template #btn="{ text,msg }">
      <p>{{ text }}</p>
      <p>{{ msg }}</p>
    </template>
  </slot4>
  <hr>
  <h3>slot_外傳內</h3>
  <p>改完要重整資料有時跑不出來</p>
  <p>裡面一定要設定defineProps 不然會抱錯(not be automatically inherited)</p>
  <Slot5 :name="name">
    <p>123</p>
  </Slot5>
  <hr>
  <h4>參考</h4>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=ISBoRHyHm_w&list=PLSCgthA1AnifSzKdpV4FWq1pLVF4FbZ4K&index=13">Slot 插槽</a>
    </li>
    <li>
      <a href="https://ithelp.ithome.com.tw/articles/10274325">Slots 與 Render Functions 的進階心法</a>
    </li>
    <li>
      <a href="https://stackoverflow.com/questions/68803137/vue-3-passing-array-warning-extraneous-non-props-attributes-were-passed-to-comp">not be automatically inherited</a>
    </li>
  </ul>
  <hr>
</template>

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
