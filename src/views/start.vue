<template>
  <h2>start</h2>
  <br>
  <h3>Options API</h3>
  <pre>
    #script
    export default{
      data(){
        return {
          count: 0
        }
      },
      methods:{
        addcount(){
          this.count++
        }
      }
    }
  </pre>
  <hr>
  <h3>Composition API(組合式api)</h3>
  <pre>
    #script setup
    import {ref} form 'vue'
    const count = ref(0)
    const addcount=()=>count.value++
  </pre>
  <hr>
  <h3>安裝 create-vue</h3>
  <p>需node.js 16.0 以上</p>
  <pre>
    npm init vue@latest
  </pre>
  <hr>
  <h4>參考</h4>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=Nz1U6rqtEJs&list=PLFbd8KZNbe---KNiUInMOOSEtmfudpONG&index=2" target="_blank">前端Vue3小兔鲜实战项目-Day1-02-认识Vue3</a>
    </li>
    <li>
      <a href="https://www.letswrite.tw/vue3-composition-api/" target="_blank">Vue.js 3 Composition API</a>
    </li>
    <li>
      <a href="https://ithelp.ithome.com.tw/articles/10272253" target="_blank">Composition API</a>
    </li>
  </ul>
  <hr>
</template>
<script setup></script>
<style></style>
