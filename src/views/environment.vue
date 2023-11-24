<template>
  <h2>Vite 與環境變數</h2>
  <br>
  <h3>新增2個檔案</h3>
  <p>新增1 .env.development 測試</p>
  <p>新增2 .env.production 正試</p>
  <p>變數前方有 VITE_ 的前綴 Vite 才會載入</p>
  <p>執行 vite dev 時，會載入 .evn.development</p>
  <p>執行 vite build 或 vite preview 時，則會載入 .env.production</p>
  <pre>
    # .env.development
    VITE_BACKEND_HOST = http://localhost:5000

    # .env.production
    VITE_BACKEND_HOST = https://c.herokuapp.com
  </pre>
  <hr>
  <h3>使用範例</h3>
  <pre>
    #js
    console.log(import.meta.env.VITE_BACKEND_HOST);

    #template
    { import.meta.env.VITE_BACKEND_HOST }
  </pre>
  <hr>
  <h3>git 忽略不會 push</h3>
  <pre>
    .env     # 會被 git 忽略
  </pre>
  <hr>
  <h3>base 設定前綴路徑</h3>
  <p>css url一定要使用圖片路徑不然輸出會找不到</p>
  <pre>
    import { defineConfig, loadEnv } from 'vite'
    import vue from '@vitejs/plugin-vue'
    export default defineConfig(({ command, mode, ssrBuild }) => {
      // 根據當前工作目錄中的 `mode` 加載 .env 文件
      // 設置第三個參數為 '' 來加載所有環境變量，而不管是否有 `VITE_` 前綴。
      const env = loadEnv(mode, process.cwd())
      console.log( env.VITE_BASE); //輸出VITE_BASE的環境變數
      return {
        base: env.VITE_BASE, //不同模式設定不同路徑
        plugins: [vue()],
        resolve:{
          alias: {
            '@img': '/src/assets/img', //圖片路徑
            '@': '/src',
          }
        }
      }
    })
  </pre>
  <hr>
  <h4>參考</h4>
  <ul>
    <li>
      <a href="https://editor.leonh.space/2021/vite/">Vite 與環境變數</a>
    </li>
    <li>
      <a href="https://hackmd.io/@Jui-Cheng/Hk9fJ5bKi">Vite 與環境變數設定</a>
    </li>
  </ul>
  <hr>
</template>
<script setup></script>
<style></style>
