import {computed,reactive,ref,watch,watchEffect} from 'vue'
import { defineStore } from "pinia";
import axios from 'axios'
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
    return counter.value*2
  })
  const addCount = ()=>{
    counter.value++
  }

  //fetch
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
    counter,
    addCount,
    doubleCount,
    fetchInit,
    data,
    errorMessage
  }
})