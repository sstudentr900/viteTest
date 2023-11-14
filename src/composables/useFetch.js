import axios from 'axios'
import {ref} from 'vue'
export function useFetch(){
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
  return {data,errorMessage,fetchInit}
}