<script setup>
  import {computed,reactive,ref,watch,watchEffect} from 'vue'
  import { NButton,NSpace,NCollapse,NCollapseItem } from 'naive-ui'
</script>
<template>
  <h2>Naive UI</h2>
  <br>
  <h3>安裝</h3>
  <pre>
    //插件
    npm i -D naive-ui

    //字體
    npm i -D vfonts

    //圖標
    xicons
  </pre>
  <hr>
  <h3>按鈕</h3>
  <p>標籤要大寫</p>
  <NSpace>
    <NButton>Default</NButton>
    <NButton type="tertiary" :disabled="true">Tertiary</NButton>
    <NButton type="primary">Primary</NButton>
    <NButton type="info">Info</NButton>
    <NButton type="success">Success</NButton>
    <NButton type="warning">Warning</NButton>
    <NButton type="error">Error</NButton>
  </NSpace>
  <hr>
  <h3>折叠面板 </h3>
  <p>標籤(n-collapse-item)自訂css</p>
  <NCollapse>
    <n-collapse-item title="青铜" name="1"><div>可以</div></n-collapse-item>
    <n-collapse-item title="白银" name="2"><div>很好</div></n-collapse-item>
    <n-collapse-item title="黄金" name="3"><div>真棒</div></n-collapse-item>
  </NCollapse>
  <hr>
  <h4>參考</h4>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=_lrzJkEc7s4">Vue3 中最好的 UI 框架之一 ~ Naive UI</a>
    </li>
    <li>
      <a href="https://www.naiveui.com/zh-CN/os-theme/docs/installation">Naive UI</a>
    </li>
  </ul>
  <hr>
</template>

<style scoped>
  .n-collapse-item{
    background: #ddd;
  }
</style>
