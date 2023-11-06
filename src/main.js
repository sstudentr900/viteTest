import { createApp } from 'vue'
import App from './App.vue'
import './assets/all.scss';
// 引入路由
import router from './router'  
import axios from 'axios';
import VueAxios from 'vue-axios';
// 引入 Vee Validate 元件跟功能
import {Form, Field, ErrorMessage, defineRule, configure} from 'vee-validate'
// 引入 Vee Validate 全部驗證規則
import { required, email, min, max, alpha, numeric, regex, confirmed, integer, url } from '@vee-validate/rules';
// import AllRules from '@vee-validate/rules'
// 引入 Vee Validate 多國語系功能
import { localize, setLocale } from '@vee-validate/i18n'
// 引入 Vee Validate 繁體中文語系檔
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'


// Vee Validate 表單驗證語法開始
// 注册内置验证规则
defineRule('required', required);
defineRule('email', email);
defineRule('min', min);
defineRule('max', max);
defineRule('alpha', alpha);
defineRule('numeric', numeric);
defineRule('regex', regex);
defineRule('confirmed', confirmed);
defineRule('integer', integer);
defineRule('url', url);
// 加入 Vee Validate 繁體中文語系檔
// *將當前 Vee Validate 語系設定為繁體中文
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true // 指欄位輸入內容時，會立即進行驗證（即邊寫邊判斷）
})

// *設定預設語系
setLocale('zh_TW')
// Vee Validate 表單驗證語法結束





// const app = createApp(App).use(router)

// 建立 Vue 實體元件
const app = createApp(App);
//使 app 的所有子元件
app.use(router,axios,VueAxios);
// 註冊全域的表單驗證元件（VForm, VField, ErrorMessage）
app.component('VForm', Form)
app.component('VField', Field)
app.component('ErrorMessage', ErrorMessage)
//掛載 Vue.js 實體至 DOM
app.mount('#app')