<template>
  <h2>tailwindcss</h2>
  <h3>terminal安裝</h3>
  <p></p>
  <pre>
    npm install -D tailwindcss postcss autoprefixer //安裝
    npx tailwindcss init -p //建立tailwind.config.js,postcss.config.js
  </pre>
  <h3>tailwind.config.js配置</h3>
  <p></p>
  <pre>
    /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        "./index.html",
        './src/**/*.{vue,js,ts,jsx,tsx}'
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
  </pre>
  <h3>vite.config.ts配置</h3>
  <p></p>
  <pre>
    import tailwindcss from  tailwindcss
    import autoprefixer from 'autoprefixer
    
    css: {
      postcss: {
        plugins: [
          tailwindcss, 
          autoprefixer,
        ]
      }
    }
  </pre>
  <h3>引入Tailwind的基本指令</h3>
  <p>新增 tailwind.css</p>
  <pre>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
  </pre>
  <h3>main.js</h3>
  <pre>
    import './tailwind.css'
  </pre>
  <h3>引用</h3>
  <pre>
    &lt;h1 class="text-3xl font-bold underline">
      Hello world!
    &lt;/h1>
  </pre>
  <h3>範例</h3>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  <h3>參考</h3>
  <ul>
    <li>
      <a href="https://www.tailwindcss.cn/docs/installation/using-postcss" target="_blank">官網</a>
    </li>
    <li>
      <a href="https://juejin.cn/post/7222096611635658811" target="_blank">TailwindCSS在vite项目中使用</a>
    </li>
    <li>
      <a href="https://ithelp.ithome.com.tw/users/20162607/ironman/6658" target="_blank">tailwindcss - 從零開始學</a>
    </li>
    <li>
      <a href="https://ithelp.ithome.com.tw/articles/10334039" target="_blank">tailwindcss - 設定檔</a>
    </li>
  </ul>
</template>
<script setup>
  import {reactive,ref} from 'vue'
  import '@/assets/style.css'; //引入tailwind.css
</script>
<style scoped>

</style>