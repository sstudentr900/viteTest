<script setup></script>
<template>
  <h2>vuex 安裝</h2>
  <pre>
    npm install vuex@next
  </pre>
  <h3>新增store</h3>
  <pre>
    #src/store/index.js
    
    import {createStore} from 'vuex'
    const store = createStore({
      state:{
        test:'1234'
      },
      getters:{},
      actions:{},
      mutations:{},
    })

    export default store;
  </pre>
  <h3>main註冊</h3>
  <pre>
    #main.js
    import store from './store'  
    app.use(store);
  </pre>
  <h3>引用</h3>
  <pre>
    #script
      import { ref,computed } from 'vue'
      import store from '../store'
      const test = computed(()=>store.state.test)

      #template
      test: {{ test }}
  </pre>
  <!-- <h3>參考</h3>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=WONpWvoKzME&list=PLFbd8KZNbe---KNiUInMOOSEtmfudpONG&index=18" target="_blank">Pinia-counter基础使用</a>
    </li>
  </ul> -->
</template>
<style></style>
