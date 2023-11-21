import axios from "axios";
let request = axios.create({
  //基礎路徑
  //import.meta.env.VITE_APP_API 會到.env抓VITE_APP_API值
  baseURL: import.meta.env.VITE_APP_API,
  // 超时
  timeout: 5000
})
//攔截請求
request.interceptors.request.use(config => {
  // const token = localStorage.getItem('token')
  // config.headers.Authorization = `Bearer ${token}`
  // console.log(config)
  //headers 增加 token
  config.headers.token = 134
  return config
}, error => {
  return Promise.reject(error)
});
//攔截回應
request.interceptors.response.use((res)=>{
  //簡化數組
  return res.data;
},(error)=>{
  //失敗錯誤
  let message = '';
  switch (error.response.status) {
    case 401:
      message='tokene過期'
      break
    case 403:
      message='無權訪問'
      break
    case 404:
      message='地址錯誤'
      break
    case 500:
      message='服務器出問題'
      break
    default:
      message='請求錯誤'
  }
  console.log(message)
  return Promise.reject(error)
});

export default request;