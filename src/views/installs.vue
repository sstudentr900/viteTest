<template>
  <h2>安裝vue</h2>
  <p>裡面有router,pinia,vitest可選</p>
  <pre class="prettyprint">
    <!-- <xmp> -->
    npm init vue@latest
    <!-- </xmp> -->
  </pre>
  <h3>執行</h3>
  <pre class="prettyprint">
    <!-- <xmp> -->
    npm run dev
    <!-- </xmp> -->
  </pre>
  <h3>參考</h3>
  <ul>
    <li>
      <a href="https://vuejs.org/tutorial/#step-2" target="_blank">vue 官網</a>
    </li>
    <li>
      <a href="https://cn.vitejs.dev/guide/#scaffolding-your-first-vite-project" target="_blank">vite 官網</a>
    </li>
    <li>
      <a href="https://stackoverflow.com/questions/61452458/ref-vs-reactive-in-vue-3" target="_blank">ref vs reactive</a>
    </li>
    <li>
      <a href="https://www.youtube.com/watch?v=rNQIA0Fe9KQ&ab_channel=MikeCheng" target="_blank">Vue3 + Vite 快速上手</a>
    </li>
  </ul>
  <hr>
  <h2>全域安裝</h2>
  <pre class="prettyprint">
    <!-- <xmp> -->
    npm install -g @vue/cli
    <!-- </xmp> -->
  </pre>
  <hr>
  <h2>vue 版本</h2>
  <pre class="prettyprint">
    <!-- <xmp> -->
    vue --version
    <!-- </xmp> -->
  </pre>
  <hr>
  <h2>建立專案</h2>
  <pre class="prettyprint">
    <!-- <xmp> -->
    vue create project-name
    <!-- </xmp> -->
  </pre>
  <h3>Manually select features 手動選擇</h3>
  <img src="https://ithelp.ithome.com.tw/upload/images/20210917/20141271YGDaVQosSX.png" alt="">
  <h3>CSS Pre-processors（for Sass）</h3>
  <h3>Linter / Formatter （統一大家程式碼）</h3>
  <img src="https://ithelp.ithome.com.tw/upload/images/20210917/20141271JdeyRwLhCs.png" alt="">
  <h3>History mode，大寫字母通常也是建議選項</h3>
  <ol>
    <li>n－hash mode：使用 # 模擬 url，例如 www.example.com/#/home，井字號後面的路由變化不會向 server 發出請求，因此頁面不會重新載入</li>
    <li>Y－History mode：顯示一般的 url，例如 www.example.com/home，路由變化利用 history.pushState API 就能完成 URL 跳轉，一樣不會重新載入頁面</li>
  </ol>
  <h3>In dedicated config files，讓配置檔各自獨立，有需要再建立配置檔即可</h3>
  <img src="https://ithelp.ithome.com.tw/upload/images/20210917/20141271X4DVkbU0d8.png" alt="">
  <h3>日後是否以本次選擇作為通用預設選項</h3>
  <img src="https://ithelp.ithome.com.tw/upload/images/20210917/20141271istQKg2sVC.png" alt="">
  <hr>
  <h2>指令</h2>
  <p>打開 package.json 查查 Vue-CLI 幫我們建立的 script</p>
  <pre class="prettyprint">
    <!-- <xmp> -->
    npm run serve //啟動伺服器
      npm run build //產生打包檔 (JS/CSS/HTML的壓縮檔)
    <!-- </xmp> -->
  </pre>
  <hr>
  <h2>目錄</h2>
  <pre class="prettyprint">
    <!-- <xmp> -->
    public / 任何靜態檔都可以放在這，不會經過 webpack 打包
      src / 原始檔案，大部分開發都在這異動
      assets / 存放靜態資源，例如 images、css、logo 等
      components / 存放自定義的元件
      router / 存放所設置的路由元件
      store / 存放 Vuex 管理的狀態庫
      views / 裡的路由元件使用，例如在 Home.vue 中就使用了 HelloWorld.vue 元件
      App.vue / 整個專案裡的核心主件，在此進行切換路由元件並渲染出相應頁面
      main.js / 程式進入點，完成初始化 Vue instance 並掛載到 App.vue 上,同時會將專案中所需的 plugins 引入至此
    <!-- </xmp> -->
  </pre>
  <hr>
  <h2>v-html</h2>
  <p>
    v-html 來顯示放在 src/assets 裏的 logo.png，並在 DOM 裏塞入這樣的內容來引入 logo.png，最後是無法顯示圖片，因為輸出時會直接當成字串輸出
  ../assets/logo.png，沒有經過編譯，因此並非正確路徑。解決方法是我們需要在 public 引入 logo.png
  </p>
  <h2>vue.config.js</h2>
  <h3>eslint 關閉</h3>
  <pre class="prettyprint">
    <!-- <xmp> -->
    <!-- //vue.config.js
      module.exports = {
        //關閉eslint
        lintOnSave: false
      } -->
    <!-- </xmp> --></pre>
  <h3>domain 設定 publicPath</h3>
  <p>因為 Vue Cli 預設你所部署的 domain 是在根路徑'/'，例如 https://my-vue-app.com/。如果是在子路徑，例如https://github.com/alysachan830/my-vue-app/#/，就要設定 publicPath 為 /my-vue-app/。</p>
  <pre class="prettyprint">
    <!-- <xmp> -->
    //vue.config.js 設定檔
      module.exports = {
        publicPath: 
          99process.env.NODE_ENV === 'production'? 
          '/my-vue-app/name': '/'
      }
    <!-- </xmp> -->
  </pre>
  <h2>Vue UI</h2>
  <pre class="prettyprint">
    <!-- <xmp> -->
    vue ui
    <!-- </xmp> -->
  </pre>
  <hr>
  <h2>相對路徑 @==src</h2>
  <pre class="prettyprint">
    <!-- <xmp> -->
    import HelloWorld from "/src/components/HelloWorld.vue";
      import HelloWorld from "@/components/HelloWorld.vue";
    <!-- </xmp> -->
  </pre>
  <hr>
  <h3>參考</h3>
  <ul>
    <li>
      <a href="https://ithelp.ithome.com.tw/articles/10265925" target="_blank">Vue 個專案先</a>
    </li>
    <li>
      <a href="https://ithelp.ithome.com.tw/articles/10277962" target="_blank">專案小幫手</a>
    </li>
    <li>
      <a href="https://ithelp.ithome.com.tw/articles/10280361" target="_blank">Vue.js 從零開始：Vue CLI 介紹與安裝</a>
    </li>
    <li>
      <a href="https://ithelp.ithome.com.tw/articles/10263296" target="_blank">Vue CLI 的目錄架構</a>
    </li>
  </ul>
  <hr>
</template>
