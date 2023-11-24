<template>
  <h2>圖片無法載入</h2>
  <pre>
      #script public.js
      export function getUrl(url){
        return new URL(`/src/assets/img/${url}`, import.meta.url).href;
        // 使用方式
        // 圖片返回絕對路徑
        // 絕對路徑 http://localhost:5173/@fs/src/assets/img/${url}
        // img :src="$getUrl('imgsrc.png')"
      }
      export function defaultImage(event,defaultImage){
        //import.meta.env.VITE_IMAGE_DEFAULT vite預設圖片位置
        defaultImage = defaultImage?defaultImage: import.meta.env.VITE_IMAGE_DEFAULT
        event.target.src = getUrl(defaultImage);
        event.target.onerror = null; // 添加这个防止默认图片也不存在而陷入死循环
        // 使用方式
        // 圖片錯誤,defaultImage圖片預設
        // img  @error.once="$defaultImage($event,'defaultImage.png')"
      }

      #註冊全域 main.js
      import { getUrl, defaultImage } from './assets/js/public'; //自訂函數
      app.config.globalProperties.$getUrl = getUrl;
      app.config.globalProperties.$defaultImage = defaultImage;

      #引用 template
      //error 預設找不到圖
      img :src="$getUrl(img)" @error.once="$defaultImage($event)"
  </pre>
  <hr>
  <h4>參考</h4>
  <ul>
    <li>
      <a href="https://champyin.com/2018/11/26/js%E5%A6%82%E4%BD%95%E8%AF%86%E5%88%AB%E5%9B%BE%E7%89%87%E5%8A%A0%E8%BD%BD%E5%A4%B1%E8%B4%A5/">Vue3 如何挂js如何识别图片加载失败</a>
    </li>
    <li>
      <a href="https://www.cnblogs.com/zhiyiYo/p/15973175.html">如何在 Vue3 中处理 img 标签图片无法加载的问题</a>
    </li>
  </ul>
  <hr>
  <h2>圖片載入</h2>
  <pre class="prettyprint">
    1.Vite - 相對路徑引入
    img alt="Vue logo" class="logo" src="../assets/logo.svg" 

    2.Vite - 別名引入
    img alt="Vue logo" class="logo" src="@/assets/logo.svg" 


    3.組件
    #script
    const imageUrl = (name)=>{
      // console.log(name)
      return new URL(`/src/assets/img/${name}`, import.meta.url).href
    }

    #template
    img :src="imageUrl('name.jpg')"
  </pre>
  <hr>
  <h4>參考</h4>
  <ul>
    <li>
      <a href="https://stackoverflow.com/questions/66419471/vue-3-vite-dynamic-image-src" target="_blank">Vue 3 Vite - dynamic image src</a>
    </li>
    <li>
      <a href="https://israynotarray.com/vue/20230330/238425903/" target="_blank">Vue 的圖片引入方式</a>
    </li>
  </ul>
  <hr>
  <h2>圖片載入完成</h2>
  <pre class="prettyprint">
    #js
    export function loadImageEnd (list,callback){
      let i = 0;
      list.forEach((src)=>{
        const newImg = new Image()
        newImg.src = getUrl(src)
        newImg.onerror = () => { 
          // console.log('onerror','src',src)
          //錯誤預設圖片
          // newImg.src = 'http://www.86y.org/images/loading.gif'
          newImg.src = getUrl(import.meta.env.VITE_IMAGE_DEFAULT)
        }
        newImg.onload = () => { 
          i += 1
          // console.log('onload','list.length',list.length,'i',i,'src',src)
          if(list.length === i) { 
            callback()
          }
        }
      })

      // 使用方式
      // imgArr => 需是array
      // const imgArr=['home_header1.png','home_header25.png','home_header3.png']
      // loadImageEnd(imgArr,()=>{
      //   console.log('圖片全部載入完成');
      // })
    }

    #template
    imgArr => 需是array
    const imgArr=['home_header1.png','home_header25.png','home_header3.png']
    loadImageEnd(imgArr,()=>{
      console.log('圖片全部載入完成');
    })
  </pre>
  <hr>
  <h4>參考</h4>
  <ul>
    <li>
      <a href="https://israynotarray.com/javascript/20201222/2162934013/" target="_blank">圖片載入完成</a>
    </li>
    <li>
      <a href="https://segmentfault.com/q/1010000021255009" target="_blank">图片是否开始渲染</a>
    </li>
    <li>
      <a href="https://www.php.cn/faq/392354.html" target="_blank">图片加载完成</a>
    </li>
    <li>
      <a href="https://ithelp.ithome.com.tw/articles/10333685" target="_blank">元件懶加載</a>
    </li>
  </ul>
  <hr>
</template>
<script setup>
  import {computed,reactive,ref,watch,watchEffect} from 'vue'
</script>
<style></style>
