<script setup>
  import { storeToRefs } from "pinia";
  import {computed,reactive,ref,watch,watchEffect} from 'vue'
  import {useCounterStore} from '../stores/count.js';
  const store = useCounterStore()
  console.log(store)
  const clickAdd = ()=>{
    store.addCount()
  }

  //pinia 解構資料響應式會出問題需要加storeToRefs
  const { counter,doubleCount } = storeToRefs(store)
  //pinia 解構函數寫法
  const { addCount } = store

  //pinia 監聽
  watch(doubleCount,(newVal,oldVal)=>{
    console.log('newVal=>',newVal)
    console.log('oldVal=>',oldVal)
  })
  
  //pinia subscribing 取的pinia狀態
  store.$subscribe((mutation,state)=>{
    console.log(mutation)
  })

</script>
<template>
  <h2>Pinia 的全域資料管理</h2>
  <p>全域傳遞資料</p>
  <br>
  <h3>main.js 建立 Pinia</h3>
  <pre>
    //main.js
    import { createPinia } from 'pinia'
    app.use(createPinia());     //建立 Pinia 實例
  </pre>
  <hr>
  <h3>新增store檔案</h3>
  <p>src/stores/檔案.js 新增檔案</p>
  <p>id 必須</p>
  <pre>
    //檔案.js

    import {computed,reactive,ref,watch,watchEffect} from 'vue'
    import { defineStore } from "pinia";

    //options api
    // export const useCounterStore = defineStore({
    //   //id 必須
    //   id: 'counter',
    //   state:()=>({
    //     counter: 0
    //   }),
    //   getters:{
    //     doubleCount: (state)=>state.counter*2
    //   },
    //   actions:{
    //     addCount(){
    //       this.counter++
    //     }
    //   }
    // })

    
    //composition api
    export const useCounterStore = defineStore('counter',()=>{
      const counter = ref(0)
      const doubleCount = computed(()=>{
        return counter.valu*2
      })
      const addCount = ()=>{
        counter.valu++
      }
      return {
        counter,
        addCount,
        doubleCount,
      }
    })
  </pre>
  <hr>
  <h3>引用 store</h3>
  <p>取變數 store.$state.counter</p>
  <p>使用函數 store.addCount</p>
  <p>引用options: {{ store.$state.counter }}</p>
  <p>引用composition: {{ store.counter }}</p>
  <button @click="clickAdd">clickAdd</button>
  <hr>
  <h3>fetch</h3>
  <p>{{ store.data }}</p>
  <button @click="store.fetchInit">fetchInit</button>
  <hr>
  <h3>pinia 解構</h3>
  <p>解構資料響應式會出問題需要加storeToRefs</p>
  <p>只能接變數不能接函數</p>
  <p>{{ counter }}</p>
  <p>{{ doubleCount }}</p>
  <button @click="addCount">解構函數</button>
  <hr>
  <h3>pinia 監聽</h3>
  <hr>
  <h3>pinia subscribing 取的pinia狀態</h3>
  <hr>
  <h4>參考</h4>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=_Vvi9EVtuW4">Pinia 的全域資料管理</a>
    </li>
  </ul>
  <hr>
</template>

<style></style>