<template>
  <h2>vite 安裝mock</h2>
  <h3>安裝</h3>
  <pre>
    npm i -D vite-plugin-mock@2.9.6
    npm i -D mock.js
  </pre>
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
            mockPath: 'mock', // 设置模拟数据的存储文件夹
            enable: true,
            logger:true,//控制台顯示日誌
            supportTs:true ,//是否读取ts文件模块
            logger:true, //是否在控制台显示请求日志
            localEnabled:true, //设置是否启用本地mock文件
            prodEnabled:true //设置打包是否启用mock功能
            watchFiles: true, // 监视⽂件更改，并重新加载 mock 数据
          }),
        ]
      }
    })
  </pre>
  <h3>新增檔案</h3>
  <p>在根目錄新增資料 mock/index.js</p>
  <pre>
    #index.js
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
  <h3>參考</h3>
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
  <h2>打包时需要打包MOCK文件</h2>
  <h3>在mock文件夹下创建mock/mockProdServer.js</h3>
  <pre>
    import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'
    import mock from '../mock/'

    export const setUpProdMockServer=()=>{
      createProdMockServer(mock)
    }
  </pre>
  <h3>vite.config.的mock配置项内</h3>
  <p>如果生产环境开启了 mock 功能,即prodEnabled=true.则该代码会被注入到injectFile对应的文件的底部。默认为main.ts这样做的好处是,可以动态控制生产环境是否开启 mock 且在没有开启的时候 mock.ts不会被打包。如果代码直接写在main.ts内，则不管有没有开启,最终的打包都会包含mock.ts</p>
  <pre>
    prodEnabled: true,
    injectCode: `
    import { setUpProdMockServer } from '../mock/mockProdServer';
    setupProdMockServer();
    `
  </pre>
  <h3>參考</h3>
  <ul>
    <li>
      <a href="https://juejin.cn/post/7252254121469247545" target="_blank">vite+vue3中使用mock模拟数据</a>
    </li>
    <li>
      <a href="https://www.jianshu.com/p/ca4f0dd4de13" target="_blank">vite+vue3中vite-plugin-mock使用方式</a>
    </li>
  </ul>
  <hr>
  <h2>mockjs模拟AJAX数据(舊)</h2>
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
  <h3>創建mockServe.js</h3>
  <pre>
    //引入mockjs
    import Mock from 'mockjs';

    //把JSON數據引入
    //webpack 默認圖片 json數據所以不用對外爆露
    import banner from './banner.json';
    
    //使用mockjs模拟数据 第一個請求網址 第二個請求數據
    Mock.mock('/mock/banner',{code:200,data:banner});
  </pre>
  <h3>在main.js 引入mockServe.js</h3>
  <pre>
    import '@/mock/mockServe';
  </pre>
  <h3>api/index.js</h3>
  <pre>
    import requests from './request'; //引入封裝
      import mockrequests from './mockAjax';  //引入mockAjax

      export const reqCategoryList = () => requests({ url: '/api', method: 'get' });
      //沒有值要給空對象
      export const reqHomeAdPost = (params) => requests({ url: '/api', method: 'post',data:params});
      //mock get
      export const reqCateBanner = () => mockrequests.get('/banner');
  </pre>
  <h3>在store 引入 api</h3>
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
  <h3>在script 引入 api</h3>
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
  <h3>參考</h3>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=Nrdn7nGzNSA&list=PLmOn9nNkQxJEFpabd412vGw_k7-lHlJOP&index=32">mockjs模拟数据</a>
    </li>
  </ul>
  <!-- <hr> -->
</template>
<script setup></script>
<style></style>
