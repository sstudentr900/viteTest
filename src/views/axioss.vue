<template>
  <h2>axios</h2>
  <h3>安裝</h3>
  <pre>
    #安裝 VueAxios是必須
    npm install --save axios VueAxios
  </pre>
  <hr>
  <h3>註冊</h3>
  <pre>
    #main.js
    import { createApp } from "vue";
    import axios from "axios";
    import VueAxios from "vue-axios";
    import App from "./App.vue";
    import router from "./router";
    const app = createApp(App);
    app.use(router);
    app.use(VueAxios, axios);
    app.mount("#app");

    #script 使用
    import { onMounted } from 'vue'
    import axios from 'axios'
    const fetchApiData = async () => {
      try {
        const res = await axios.get(
          'https://raw.githubusercontent.com/hexschool/js-training/main/travelAPI-lv1.json'
        )
        console.log("res::", res);
      } catch (err) {
        console.log(err)
      }
    }
    onMounted(() => {
      fetchApiData()
    })
  </pre>
  <h3>參考</h3>
  <ul>
    <li>
      <a href="https://ithelp.ithome.com.tw/articles/10314729?sc=rss.iron" target="_blank">axios</a>
    </li>
  </ul>
  <hr>
  <h3>全局引入使用 globalProperties</h3>
  <pre>
    //src / main.js
    import axios from 'axios'
    app.config.globalProperties.$http = axios
    // 全局配置axios请求根路径(axios.默认配置.请求根路径)
    axios.defaults.baseURL = 'http://yufei.shop:3000'


    //script 使用
    import {onMounted,reactive,ref,getCurrentInstance,watchEffect} from 'vue'
    const { proxy } = getCurrentInstance()
    const { nowdata } = reactive({
      nowdata:''
    })
    onMounted(async() => {
      try{
        const res = await proxy.$http.get(
          'https://60bd9841ace4d50017aab3ec.mockapi.io/api/post_card'
        );
        // console.log(res.data)
        nowdata = res.data
      }catch(error){
        console.log(error)
      }
    })
  </pre>
  <h3>全局引入使用 provide/inject 方式</h3>
  <pre>
    #main.js
    import axios from 'axios'
    app.provide('$axios', axios)

    
    #script 使用
    const $axios = inject("$axios");
    const getData = async () => {
      const data = await $axios({ url: "https://60bd9841ace4d50017aab3ec.mockapi.io/api/post_card" });
      console.log("data", data);
    };
    onMounted(() => {
      getData()
    })
  </pre>
  <h3>composables包裝引入使用</h3>
  <pre>
    import {onMounted,reactive,ref,getCurrentInstance,watchEffect} from 'vue'
    //引入自訂asios封裝
    import { useAsios } from '../composables/useAsios.js'
    //使用方法
    const {data,errorMessage,useAsiosInit} = useAsios({
      url:'https://60bd9841ace4d50017aab3ec.mockapi.io/api/post_card'
    })
    onMounted(()=>{
      useAsiosInit()
    })
  </pre>
  <h3>pinia包裝引入使用</h3>
  <pre>
    //stores/fetch.js
    import { defineStore } from "pinia";
    import axios from 'axios'
    export const useCounterStore = defineStore('counter',()=>{
      const data = ref([]);
      const errorMessage = ref('');
      const fetchInit = async()=>{
        try{
          const res = await axios.get(
            'https://60bd9841ace4d50017aab3ec.mockapi.io/api/post_card'
          );
          data.value = res.data
        }catch(error){
          errorMessage.value = 'api 錯誤'
        }
      }
    
      return {
        fetchInit,
        data,
        errorMessage
      }
    })

    //script
    import {useCounterStore} from '../stores/fetch.js';
    const store = useCounterStore()
    console.log(store)

    //template
    button @click="store.fetchInit"
  </pre>
  <hr>
  <h3>axios封装</h3>
  <pre>
    #新增文件 request.js
    import axios from "axios";
    let request = axios.create({
      //基礎路徑
      baseURL: import.meta.env.VITW_APP_BASE_API, 
      // 請求超過5s時間停止
      timeout: 5000,
      //headers: {
      //  "Content-Type": "application/json",
      //  accept: "application/json",
      //},
    })

    //攔截請求
    request.interceptors.request.use(config => {
      // 1.token 存 localStorage
      // const token = localStorage.getItem('token')

      // 2.token 存 store長久
      //const user = userstore()
      //const token = user.userInfo.token

      // config.headers.Authorization = `Bearer ${token}` //Bearer固定 加入token
      return config
    }, error => Promise.reject(error));

    //攔截回應
    request.interceptors.response.use(res=>res.data,error=>{
      //失敗錯誤

      //錯誤提示
      //message()

      //錯誤訊息
      let message = '';
      switch (error.response.status) {
        case 401:
          message='tokene過期'
          break
        case 403:
          message='無權訪問'
          break
        case 404:
          message='地址錯誤'
          break
        case 500:
          message='服務器出問題'
          break
        default:
          message='請求錯誤'
      }

      //console.log(message)
      return Promise.reject(error)
    });
    
    export default request;
  </pre>
  <h3>template 引用</h3>
  <pre>
    import request from '../request'
    import {onMounted} from 'vue'
    onMounted(()=>{
      console.log('onMounted')
      request({
        url:'/get',
        methods: 'get',
      }).then(res=>{
        console.log(res.data,import.meta.env.VITE_APP_API)
      })
    })
  </pre>
  <h3>參考</h3>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=lztwTFjq_Ig&list=PLFbd8KZNbe---KNiUInMOOSEtmfudpONG&index=72" target="_blank">请求拦截器携带Token</a>
    </li>
    <li>
      <a href="https://www.tiven.cn/p/7f7ba3b2/" target="_blank">Vue3学习与实战 · 全局挂载使用Axios</a>
    </li>
    <li>
      <a href="https://developer.aliyun.com/article/1126987" target="_blank">Vue3中全局配置 axios 的两种方式</a>
    </li>
    <li>
      <a href="https://medium.com/web-design-zone/%E5%9C%A8vue-js%E4%B8%AD%E4%BD%BF%E7%94%A8axios%E5%8F%96%E5%BE%97%E8%B3%87%E6%96%99-8db6aec9157d" target="_blank">在Vue.js中使用Axios取得資料</a>
    </li>
    <li>
      <a href="https://www.youtube.com/watch?v=bl8yqDyc99k&list=PLmOn9nNkQxJECrx-JlaaJaC2gthMP7B7r&index=28" target="_blank">axios二次封装</a>
    </li>
    <li>
      <a href="https://developer.aliyun.com/article/1126987" target="_blank">axios二次封装</a>
    </li>
    <li>
      <a href="https://muki.tw/tech/vue/vue3-vuex-axios-interceptor/" target="_blank">axios二次封装</a>
    </li>
    <li>
      <a href="https://www.youtube.com/watch?v=Uwrz2XP3J44&list=PLmOn9nNkQxJEFpabd412vGw_k7-lHlJOP&index=16"> 封裝axios</a>
    </li>
  </ul>
  <hr>
  <h3>api封裝</h3>
  <pre>
    #新增api.js api.js
    import requests from './request'; //引入axios封装
    export const reqCategoryList = () => requests({ url: '/api', method: 'get' });
    //沒有值要給空對象
    export const reqHomeAdPost = (params) => requests({ url: '/api', method: 'post',data:params});
  </pre>
  <h3>在store 引入 api</h3>
  <pre>
    import { reqCategoryList } from '@/api';
    const state = {
      slide: [],
      slidePost: [],
    }
    const mutations = {
      slideMu(state, list) {
        state.slide = list
      },
      slideMuPost(state, list) {
        state.slidePost = list
      },
    }
    const actions = {
      async slide({ commit }) {
        let result = await reqCategoryList();
        if (result.data.code == 200) {
          commit('slideMu', result.data.data)
        }
      },
      async slidePost({ commit },params={}) {
        let result = await reqHomeAdPost(params);
        if (result.data.code == 200) {
          commit('slideMuPost', result.data.data)
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
    import { reqCategoryList } from '@/api';
    import {onMounted} from 'vue'
    onMounted(()=>{
      reqCategoryList().then(function(response){
        console.log(response)
      })
    })
  </pre>
  <hr>
  <h3>跨域</h3>
  <p>跨域解決 jsonp,cros,代理</p>
  <p>瀏欄器有跨域問題服務端代理沒有</p>
  <pre>
    #vue.config.js
    //代理跨域
    devServer: {
      proxy: {
        //網址有/api 執行target
        '/api': {
          target: 'https://bookshelf.goodideas-studio.com',
          //路徑從寫
          //pathRewrite: { '^/api': '' }, 
        }
      }
    }

    #api.js
    import requests from './request';
    export const reqCategoryList = () => requests({ url: '/api', method: 'get' });


    #template 調用
    import { reqCategoryList } from '@/api';
    reqCategoryList()
  </pre>
  <hr>
  <h3>進度條(nprogress)</h3>
  <pre>
    #npm 安裝進度條
    npm install nprogress

    /#api/request.js
    // 引入進度條
    import nprogress from "nprogress";
    // 引入進度條樣式
    import "nprogress/nprogress.css";

    requests.interceptors.request.use(
      function(config) {
        //進度條開始動
        nprogress.start();

        //config 配置對象有headers請求頭
        return config;
      },
      function(error) {
        return Promise.reject(error);
      }
    );

    requests.interceptors.response.use(
      function(response) {
        //進度條結束
        nprogress.done();

        // 任何 HTTP status code 為 2xx 開頭時觸發此函式
        return response;
      },
      function(error) {
        // 任何 HTTP status code 非 2xx 開頭時觸發此函式
        return Promise.reject(error.response);
      }
    );

    #script 調用
    import { reqCategoryList } from '@/api';
    reqCategoryList()
  </pre>
  <h3>參考</h3>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=B_weIItFtTI&list=PLmOn9nNkQxJEFpabd412vGw_k7-lHlJOP&index=17">nprogress进度条的使用</a>
    </li>
  </ul>
  <hr>
  <h3>options api axios</h3>
  <pre>
    import axios from "axios";
    import { GET } from '@/api/api';
    import { reqCategoryList } from '@/api';
    export default {
      data() {
          return {
              bookList: '',
          };
      },
      //實例已創建
      created() {
          //axios
          // var obj = this
          // axios
          // .get("https://bookshelf.goodideas-studio.com/api")
          // .then(function(response){
          //     console.log(response.data.list)
          //     obj.bookList = response.data.list
          // });
      },
      //此時可找到 DOM 節點
      mounted(){
          //使用封裝GET
          // GET().then(function(response){
          //     console.log(response.list)
          // });
  
          //使用封裝reqCategoryList
          reqCategoryList().then(function(response){
              console.log(response)
          })
      }
      // methods:{
          // async axiosFn(){
          //     const books = await GET();
      // 	console.log(books.list); // 所有書單資料
          // }
      // }
    }
  </pre>
  <h3>參考</h3>
  <ul>
    <li>
      <a href="https://ithelp.ithome.com.tw/articles/10275141"> API</a>
    </li>
  </ul>
</template>
<script setup>
  import axioss2 from '../components/axioss2.vue'
  import axioss3 from '../components/axioss3.vue'
  import axioss4 from '../components/axioss4.vue'
</script>
<style></style>
