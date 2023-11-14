import {onMounted,readonly,ref} from 'vue'
export function useAddCount(val){
  const count = ref(val)

  const addCount = (date)=>{
    count.value = date
  }

  return{
    //readonly 只能讀取不能改
    count:readonly(count),
    // count:coun,
    addCount,
  }
}