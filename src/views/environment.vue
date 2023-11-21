<template>
  <h2>Vite 與環境變數</h2>
  <br>
  <h3>新增檔案</h3>
  <p>新增 .env.development 測試</p>
  <p>新增 .env.production 正試</p>
  <p>變數前方有 VITE_ 的前綴 Vite 才會載入</p>
  <p>執行 vite dev 時，會載入 .evn.development</p>
  <p>執行 vite build 或 vite preview 時，則會載入 .env.production</p>
  <pre>
    # .env.development
    VITE_BACKEND_HOST = http://localhost:5000

    # .env.production
    VITE_BACKEND_HOST = https://c.herokuapp.com

    #使用範例
    console.log(import.meta.env.VITE_BACKEND_HOST);

    #template
    { import.meta.env.VITE_BACKEND_HOST }
  </pre>
  <hr>
  <h3>git 忽略不會 push</h3>
  <pre>
    .env                # 會被 git 忽略
  </pre>
  <hr>
  <h4>參考</h4>
  <ul>
    <li>
      <a href="https://editor.leonh.space/2021/vite/">Vite 與環境變數</a>
    </li>
  </ul>
  <hr>
</template>
<script setup></script>
<style></style>
