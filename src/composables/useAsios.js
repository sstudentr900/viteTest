import axios from 'axios'
import {ref} from 'vue'
export function useAsios(obj){
  const data = ref([]);
  const errorMessage = ref('');
  const useAsiosInit = async()=>{
    try{
      const res = await axios.get(obj.url);
      data.value = res.data
    }catch(error){
      errorMessage.value = 'api 錯誤'
    }
  }
  return {data,errorMessage,useAsiosInit}
}