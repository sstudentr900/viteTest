<template>
  <h2>Vue3 如何挂载全局方法</h2>
  <h3>globalProperties 挂载全局 template 使用</h3>
  <pre>
    //public.js
    export function getUrl(url){
      return new URL(`/src/assets/img/${url}`, import.meta.url).href
    }

    //main.js
    import { getUrl } from './assets/js/public'; 
    app.config.globalProperties.$getUrl = getUrl;

    //template 使用
    :src="$getUrl(img)"
  </pre>
  <h3>globalProperties 挂载全局 script 使用</h3>
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
  <h3>provide/inject 挂载</h3>
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
  <h3>參考</h3>
  <ul>
    <li>
      <a href="https://blog.csdn.net/versionli/article/details/116658613">Vue3 如何挂载全局方法 和用getCurrentInstance代替this</a>
    </li>
    <li>
      <a href="https://blog.csdn.net/Dandrose/article/details/129302786">Vue3使用全局函数或变量的两种常用方式</a>
    </li>
    <li>
    <a href="https://stackoverflow.com/questions/65184107/how-to-use-vue-prototype-or-global-variable-in-vue-3" target="_blank">global variable</a>
    </li>
    <li>
    <a href="https://www.youtube.com/watch?v=3pDNY4fLZGc&list=PLmOn9nNkQxJEFpabd412vGw_k7-lHlJOP&index=13" target="_blank">註冊全局組件</a>
    </li>
  </ul>
</template>
<script setup>
</script>
<style></style>
