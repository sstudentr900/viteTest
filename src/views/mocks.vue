<template>
  <h2>mock</h2>
  <br>
  <h3>安裝</h3>
  <pre>
    npm i -D vite-plugin-mock@2.9.6
    npm i -D mock.js
  </pre>
  <hr>
  <h3>vite.config.ts 配置</h3>
  <pre>
    import { defineConfig } from 'vite'
    import { viteMockServe } from 'vite-plugin-mock'
    import vue from '@vitejs/plugin-vue'
    export default defineConfig(({ command })=>{
      return {
        plugins: [
          vue(),
          viteMockServe({
            mockPath: 'mock', //
            enable: true,
          }),
        ]
      }
    })
  </pre>
  <h3>新增檔案</h3>
  <p>在跟目錄新增資料 mock/db.js</p>
  <pre>
    //db.js
    function userDate(){
      return [
        {
          "name": "mary",
          "email": "mary@gmail.com",
          "password": "a123",
          "id": 1
        },
        {
          "name": "4156",
          "email": "4564@df.fdh",
          "password": "Aa123",
          "id": 4
        },
        {
          "name": "jhkg",
          "email": "1231@fghsfh.fd",
          "password": "4564qA",
          "id": 5
        }
      ]
    }
    export default [
      {
        url: '/api/get',
        method: 'get',
        response: ({ query }) => {
          return {
            code: 0,
            data: {
              name: 'vben',
            },
          }
        },
      },
      {
        url: '/api/user/post',
        method: 'post',
        response: ({body})=>{
          const {user,password} = body
          const checkuser = userDate().find(
            (item)=>item.name==user && item.password==password
          )
          if(!checkuser){
            return { code:201,data:{message:'帳密錯誤'}};
          }else{
            const token = '132456'
            return { code:200,data:{ checkuser }};
          }
        },
      },
    ]
  </pre>
  <h3>使用方式</h3>
  <pre>
    網址 http://127.0.0.1:5173/api/get
    json {"code":0,"data":{"name":"vben"}}
  </pre>
  <hr>
  <h4>參考</h4>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=Bfo-vPCdgrk&list=PLmOn9nNkQxJECrx-JlaaJaC2gthMP7B7r&index=28" target="_blank">mock接口</a>
    </li>
    <li>
      <a href="https://github.com/vbenjs/vite-plugin-mock/blob/main/README.zh_CN.md">vite-plugin-mock</a>
    </li>
    <li>
      <a href="https://github.com/vbenjs/vite-plugin-mock/blob/main/packages/playground/js-example/src/App.vue">github</a>
    </li>
  </ul>
  <hr>
</template>
<script setup></script>
<style></style>
