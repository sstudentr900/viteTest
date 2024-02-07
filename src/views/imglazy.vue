<template>
  <h2>>圖片懶加載</h2>
  <h3>註冊全域指令</h3>
  <p>圖片進入可視視窗載入</p>
  <pre>
    #main.js
    import { useIntersectionObserver } from '@vueuse/core'
    app.directive('img-lazy',{
      mounted(el,binding){
        //el:綁定元素 img
        //binding: 綁定的值 binding.value == 圖片url
        console.log(el,binding.value)

        //監聽可視區
        const {stop} = useIntersectionObserver(
          el, //物件
          ([{isIntersecting}])=>{
            console.log(isIntersecting) //boolean 監聽是否在可視區
            if(isIntersecting){
              //進入可視區載入圖片
              el.src = binding.value
              stop() //停止監聽
            }
          }
        )
      }
    })
  </pre>
  <h3>template使用</h3>
  <pre>
    img v-img-lazy='img url'
  </pre>
  <hr>
  <h4>參考</h4>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=TOTq5QDXXSU&list=PLFbd8KZNbe---KNiUInMOOSEtmfudpONG&index=38">图片懒加载指令实现</a>
    </li>
    <li>
      <a href="https://vueuse.org/core/useIntersectionObserver/">官網</a>
    </li>
  </ul>
  <hr>
  <h2>>圖片懶加載優化</h2>
  <p>新增 lazyPlugin.js</p>
  <pre>
    #新增 lazyPlugin.js
    import { useIntersectionObserver } from '@vueuse/core'
    export const lazyPlugin = {
      install(app){
        //懶加載指令
        app.directive('img-lazy',{
          mounted(el,binding){
            //el:綁定元素 img
            //binding: 綁定的值 binding.value == 圖片url
            console.log(el,binding.value)

            //監聽是否在可視區
            const {stop} = useIntersectionObserver(
              el, //物件
              ([{isIntersecting}])=>{
                console.log(isIntersecting) //boolean 監聽是否在可視區
                if(isIntersecting){
                  //進入可視區載入圖片
                  el.src = binding.value
                  stop() //停止監聽
                }
              }
            )
          }
        })
      }
    }
  </pre>
  <h3>main.js 引用註冊</h3>
  <pre>
    import { lazyPlugin } from './lazyPlugin.js'
    const app = createApp(App)
    app.use(lazyPlugin)
    app.mount('#app')
  </pre>
  <h3>template使用</h3>
  <pre>
    img v-img-lazy='img url'
  </pre>
  <hr>
  <h4>參考</h4>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=Cy657vSomos&list=PLFbd8KZNbe---KNiUInMOOSEtmfudpONG&index=39">懒加载指令优化</a>
    </li>
  </ul>
  <hr>
</template>
<script setup>
</script>
<style></style>
