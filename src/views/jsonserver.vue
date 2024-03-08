<template>
  <h2>快速建立虛擬 REST API 伺服器</h2>
  <br>
  <h3>安裝 json-server</h3>
  <pre class="prettyprint">
    <!-- <xmp> -->
    npm install -g json-server
    <!-- </xmp> -->
  </pre>
  <h3>查安裝是否完成</h3>
  <pre class="prettyprint">
    <!-- <xmp> -->
    //終端機
      json-server
    <!-- </xmp> -->
  </pre>
  <h3>新增 db.json 檔案建立資料</h3>
  <p>專案根目錄下新增名為 db 的資料夾,新增 db.json 的 json 格式檔案於該資料夾。</p>
  <pre class="prettyprint">
    <!-- <xmp> -->
    // db.json
      {
        "user": [
          {
            "name": "mary",
            "email": "mary@gmail.com",
            "password": "a123",
            "id": 1
          }
        ]
      }
    <!-- </xmp> -->
  </pre>
  <h3>終端機啟動 JSON API 伺服器</h3>
  <pre class="prettyprint">
    <!-- <xmp> -->
    //到db路徑
      cd db

      //啟動 JSON API 伺服器並監聽 db.json 檔案
      json-server --watch db.json  

      //想變更預設port ?
      json-server --watch db.json --port 3004
    <!-- </xmp> -->
  </pre>
  <h3>GET：取得資料</h3>
  <pre>
    取得全部users資料
    http://localhost:3000/users

    取得users id=2的資料
    http://localhost:3000/users/2

    取得users name=Happy的資料
    http://localhost:3000/users?name=Happy

    模糊查詢
    http://localhost:3000/users?name_like=a
    會出現所有name含有a的資料
  </pre>
  <h3>參考</h3>
  <ul>
    <li>
      <a href="https://www.npmjs.com/package/json-server#getting-started" target="_blank">JSON Server</a>
    </li>
    <li>
      <a href="https://ithelp.ithome.com.tw/articles/10322620" target="_blank">快速建立虛擬 REST API 伺服器</a>
    </li>
    <li>
      <a href="https://hackmd.io/@xin9150/By8NazQlj" target="_blank">JSON-SERVER從0開始</a>
    </li>
  </ul>
  <hr>
</template>
<script setup>
  import {ref} from 'vue'
</script>
<style scoped></style>
