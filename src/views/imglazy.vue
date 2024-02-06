<template>
  <h2>>圖片懶加載</h2>
  <p>圖片進入可視視窗載入</p>
  <pre>
      #註冊全域指令 main.js
      app.directive('img-lazy',{
        mounted(el,binding){
          //el:綁定元素 img
          //binding: 綁定的值 binding.value == 圖片url
          console.log(el,binding.value)
          useIntersectionObserver(
            el,
            ([{isIntersecting}])=>{
              console.log(isIntersecting)
              if(isIntersecting){
                //進入可視區域視窗載入
                el.src = binding.value
              }
            }
          )
        }
      })

      #引用 template
      img v-img-lazy='img url'
  </pre>
  <hr>
  <h4>參考</h4>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=TOTq5QDXXSU&list=PLFbd8KZNbe---KNiUInMOOSEtmfudpONG&index=38">图片懒加载指令实现</a>
    </li>
  </ul>
  <hr>
</template>
<script setup>
</script>
<style></style>
