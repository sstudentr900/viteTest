<template>
  <h2>Vue3 如何挂载全局方法</h2>
  <br>
  <h3>globalProperties</h3>
  <pre>
    //public.js
    export function getUrl(url){
      return new URL(`/src/assets/img/${url}`, import.meta.url).href
    }

    //main.js
    import { getUrl } from './assets/js/public'; 
    app.config.globalProperties.$getUrl = getUrl;

    //template
    :src="$getUrl(img)"
  </pre>
  <hr>
  <h3>getCurrentInstance</h3>
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
  <h4>參考</h4>
  <ul>
    <li>
      <a href="https://blog.csdn.net/versionli/article/details/116658613">Vue3 如何挂载全局方法 和用getCurrentInstance代替this</a>
    </li>
    <li>
      <a href="https://blog.csdn.net/Dandrose/article/details/129302786">Vue3使用全局函数或变量的两种常用方式</a>
    </li>
  </ul>
  <hr>
</template>
<script setup>
  import {computed,reactive,ref,watch,watchEffect} from 'vue'
</script>
<style></style>
