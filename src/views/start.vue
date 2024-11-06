<template>
  <h2>安裝 create-vue</h2>
  <p>需node.js 16.0 以上</p>
  <pre>
    npm init vue@latest //安裝vue
    npm install //安裝插件
    npm run dev //執行專案
    npm run build //打包
    npm run preview //預覽打包後的dist專案
  </pre>
  <h3>參考</h3>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=Nz1U6rqtEJs&list=PLFbd8KZNbe---KNiUInMOOSEtmfudpONG&index=2" target="_blank">前端Vue3小兔鲜实战项目-Day1-02-认识Vue3</a>
    </li>
    <li>
      <a href="https://www.letswrite.tw/vue3-composition-api/" target="_blank">Vue.js 3 Composition API</a>
    </li>
    <li>
      <a href="https://ithelp.ithome.com.tw/articles/10272253" target="_blank">Composition API</a>
    </li>
  </ul>
  <hr>
  <h2>vite 資料夾</h2>
  <pre>
    vite.config                             //vite設定檔
      README.md                               //說明檔
      package.json                            //專案設定檔
        --dependencies                        //專案依賴
        --devDependencies                     //專案開發
      .gitignore                              //git 忽略
      public                                  //靜態資源(不會被打包 完全複製)
      .vscode                                 //vscode設定檔
      src
        --apis                                //api接口
        --compoenents                         //放元件
        --composables                         //組合函數
        --directives                          //全局指令
        --style                               //全局樣式
        --utils                               //工具函數
        --assets                              //靜態資源圖片css 會被打包
        --views                               //頁面
        --router                              //路由
        --stores                              //pinia
        --main.js                             //程式進入點
  </pre>
  <h3>參考</h3>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=07fMN5nL-FA&list=PLSCgthA1AnifSzKdpV4FWq1pLVF4FbZ4K&index=3" target="_blank">Vue3 基礎教學</a>
    </li>
    <li>
      <a href="https://www.youtube.com/watch?v=vVWjCe_QIYI&list=PLFbd8KZNbe---KNiUInMOOSEtmfudpONG&index=21" target="_blank">【黑马程序员】前端Vue3小兔鲜实战项目-Day2-05-项目起步-项目初始化和git管理</a>
    </li>
  </ul>
</template>
<script setup></script>
<style></style>
