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
  <h2> mockjs模拟AJAX数据</h2>
  <pre>
    # 安装
  npm install mockjs
  </pre>
  <p>再項目中src夾創建mock文件夾</p>
  <p>新增banner.json文件,要格式化</p>
  <pre>
    //banner.json
      //圖片要放在public 打包在dist文件
      [
          {
              "id": "1",
              "imgUrl": "banner1.jpg"
          },
          {
              "id": "2",
              "imgUrl": "banner2.jpg"
          },
          {
              "id": "3",
              "imgUrl": "banner3.jpg"
          },
          {
              "id": "4",
              "imgUrl": "banner4.jpg"
          }
      ]
  </pre>
  <hr>
  <h2>創建mockServe.js</h2>
  <pre>
    //引入mockjs
  import Mock from 'mockjs';

  //把JSON數據引入
  //webpack 默認圖片 json數據所以不用對外爆露
  import banner from './banner.json';
  
  //使用mockjs模拟数据 第一個請求網址 第二個請求數據
  Mock.mock('/mock/banner',{code:200,data:banner});
  </pre>
  <hr>
  <h2>在main.js 引入mockServe.js</h2>
  <pre>
    import '@/mock/mockServe';
  </pre>
  <hr>
  <h2>api/index.js</h2>
  <pre>
    import requests from './request'; //引入封裝
      import mockrequests from './mockAjax';  //引入mockAjax

      export const reqCategoryList = () => requests({ url: '/api', method: 'get' });
      //沒有值要給空對象
      export const reqHomeAdPost = (params) => requests({ url: '/api', method: 'post',data:params});
      //mock get
      export const reqCateBanner = () => mockrequests.get('/banner');
  </pre>
  <hr>
  <h2>在store 引入 api</h2>
  <pre>
    import { reqCateBanner } from '@/api';
  const state = {
      slide: [],
  }
  const mutations = {
      slideMu(state, list) {
          state.slide = list
      },
  }
  const actions = {
      async slide({ commit }) {
          let result = await reqCateBanner();
          if (result.data.code == 200) {
              commit('slideMu', result.data.data)
          }
      },
  }
  const getters = {}
  export default {
      namespaced: true,
      state,
      mutations,
      actions,
      getters,
  }
  </pre>
  <hr>
  <h2>在script 引入 api</h2>
  <pre>
    import { reqCateBanner } from '@/api';
    export default {
        data(){
                return{
            }
        },
        mounted(){
            reqCateBanner().then(function(response){
                console.log(response)
            })
        },
    }
  </pre>
  <pre>
    <!-- <xmp> -->
    <!-- <script> -->
    //引用API
        import {
            reqCateBanner
        } from '@/api';
        export default {
            data() {
                return {}
            },
            mounted() {
                reqCateBanner().then(function(response) {
                    console.log(response)
                })
            },
            computed: {},
        }
    <!-- </script> -->
    <!-- </xmp> -->
  </pre>
  <hr>
  <a href="https://www.youtube.com/watch?v=Nrdn7nGzNSA&list=PLmOn9nNkQxJEFpabd412vGw_k7-lHlJOP&index=32">mockjs模拟数据</a>
  <hr>
</template>
<script setup></script>
<style></style>
