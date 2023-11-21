<template>
  <h2>axios</h2>
  <br>
  <h3>安裝 axios VueAxios</h3>
  <p>VueAxios是必須</p>
  <pre>
    #安裝
    npm install --save axios VueAxios
  </pre>
  <hr>
  <h3>組件引入使用</h3>
  <pre>
    import axios from "axios"
  </pre>
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
  <h3>範例</h3>
  <axioss2/>
  <hr>
  <h3>全局引入使用 provide/inject 方式</h3>
  <pre>
    //src / main.js
    import axios from 'axios'
    app.provide('$axios', axios)

    
    //script 使用
    const $axios = inject("$axios");
    const getData = async () => {
      const data = await $axios({ url: "https://60bd9841ace4d50017aab3ec.mockapi.io/api/post_card" });
      console.log("data", data);
    };
    onMounted(() => {
      getData()
    })
  </pre>
  <hr>
  <h3>composables包裝</h3>
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
  <h3>範例</h3>
  <axioss3/>
  <hr>
  <h3>pinia fetch</h3>
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
    按鈕 button @click="store.fetchInit"
  </pre>
  <hr>
  <h3>axios 二次封装</h3>
  <p>新增文件 src/utils/request.js</p>
  <pre>
    import axios from "axios";
    let request = axios.create({
      //基礎路徑
      baseURL: import.meta.env.VITW_APP_BASE_API, 
      // 超时
      timeout: 5000
    })
    //攔截請求
    request.interceptors.request.use(config => {
      // const token = localStorage.getItem('token')
      // config.headers.Authorization = `Bearer ${token}`
      return config
    }, error => {
      return Promise.reject(error)
    });
    //攔截回應
    request.interceptors.response.use((res)=>{
      //簡化數組
      // return res.data;

      switch (res.status) {
        case 200:
          return Promise.resolve(res)
        default:
          console.log(res.status)
      }
    },(error)=>{
      //失敗錯誤
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
      console.log(message)
      return Promise.reject(error)
    });

    export default request;
  </pre>
  <h3>axios 二次封装 使用</h3>
  <pre>
    import request from '../utils/request'
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
  <h3>範例</h3>
  <axioss4/>
  <hr>
  <h4>參考</h4>
  <ul>
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
  </ul>
  <hr>
</template>
<script setup>
  import axioss2 from '../components/axioss2.vue'
  import axioss3 from '../components/axioss3.vue'
  import axioss4 from '../components/axioss4.vue'
</script>
<style></style>
