<template>
  <h2>VeeValidate v4.x</h2>
  <br>
  <h3>安裝</h3>
  <pre>
    npm install --save vee-validate
    npm install @vee-validate/rules # Vee Validate 全部驗證規則
    npm install @vee-validate/i18n  # Vee Validate 多國語系功能
  </pre>
  <hr>
  <h3>全域引入</h3>
  <p>推薦使用全域引入的方式，可以減少元件的大小，且也不用每個元件都要引入 VeeValidate。</p>
  <p>src/main.js 引入 Vee Validate 套件與定義驗證規則</p>
  <pre>
    //main.js 

    // 引入 Vee Validate 元件跟功能
    import {Form, Field, ErrorMessage, defineRule, configure} from 'vee-validate'
    // 引入 Vee Validate 全部驗證規則
    import { required, email, min, max, between, numeric, regex, confirmed } from '@vee-validate/rules';
    // import AllRules from '@vee-validate/rules'
    // 引入 Vee Validate 多國語系功能
    import { localize, setLocale } from '@vee-validate/i18n'
    // 引入 Vee Validate 繁體中文語系檔
    import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
    // 注册内置验证规则
    defineRule('required', required);
    defineRule('email', email);
    defineRule('min', min);
    defineRule('max', max);
    defineRule('between', between); //最小最大
    defineRule('numeric', numeric); //數字
    defineRule('regex', regex); //正則
    defineRule('confirmed', confirmed); //在確認
    //將當前 Vee Validate 語系設定為繁體中文
    configure({
      generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
      validateOnInput: true, // 指欄位輸入內容時，會立即進行驗證（即邊寫邊判斷）
      //修改name變中文
      generateMessage: localize('zh_TW', {
        names: {
          name: '姓名',
          email: '信箱',
          age: '年齡',
          ageConfirm: '年齡確認',
        },
      }),
    })
    //設定預設語系
    setLocale('zh_TW')
    // 註冊全域的表單驗證元件（VForm, VField, ErrorMessage）
    app.component('VForm', Form)
    app.component('VField', Field)
    app.component('ErrorMessage', ErrorMessage)
  </pre>
  <h3>表單範例</h3>
  <p>VForm 取代 from</p>
  <p>:class="{ 'error': errors.email }" 用 errors.email 判斷是否要加上error</p>
  <p>rules=>驗證規則</p>
  <p>ErrorMessage=>是錯誤訊息，編譯完是sapn </p>
  <VForm @submit="onSubmit">
    <label for="name">姓名</label>
    <VField name="name" type="text" rules="required" />
    <ErrorMessage name="name" />
    <br>
    <label for="email">信箱</label>
    <VField name="email" type="email" rules="required|email"/>
    <ErrorMessage name="email"/>
    <br>
    <label for="age">年齡</label>
    <VField name="age" type="number" rules="required|between:18,96" />
    <ErrorMessage name="age" />
    <br>
    <label for="ageConfirm">年齡確認</label>
    <VField name="ageConfirm" type="number" rules="required|confirmed:@age" />
    <ErrorMessage name="ageConfirm" />
    <br>
    <button>送出</button>
  </VForm>
  <hr>
  <h3>局部引入</h3>
  <p>Form 元件預設已經有 prevent 這個屬性</p>
  <!-- <Form @submit="onSubmit">
    <label for="name">姓名</label>
    <Field name="name" type="text" rules="required" />
    <ErrorMessage name="name" />
    <br>
    <label for="name">年齡</label>
    <Field name="age" type="number" rules="required|between:18,96" />
    <ErrorMessage name="age" />
    <br>
    <label for="name">年齡確認</label>
    <Field name="ageConfirm" type="number" rules="required|confirmed:@age" />
    <ErrorMessage name="ageConfirm" />
    <br>
    <button>送出</button>
  </Form> -->
  <hr>
  <h3>參考</h3>
  <ul>
    <li>
      <a href="https://ithelp.ithome.com.tw/articles/10323688" target="_blank">Vee Validate驗證</a>
    </li>
    <li>
      <a href="https://israynotarray.com/vue/20230208/3309208839/">VeeValidate v4.x</a>
    </li>
    <li>
      <a href="https://vee-validate.logaretm.com/v4/guide/i18n/">本地化欄位名稱</a>
    </li>
  </ul>
  <hr>
</template>
<script setup>
  //局部引入
  // import { defineRule, Form, Field, ErrorMessage, configure } from 'vee-validate';
  // import { required, between, confirmed } from '@vee-validate/rules';
  // import { localize } from '@vee-validate/i18n';
  // import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

  // // define global rules
  // defineRule('required', required);
  // defineRule('between', between);
  // defineRule('confirmed', confirmed);
  // localize({ zhTW });

  // // Activate the locale
  // configure({
  //   generateMessage: localize('zhTW', {
  //     names: {
  //       name: '姓名',
  //       age: '年齡',
  //       ageConfirm: '年齡確認',
  //     },
  //   }),
  // });

  //表單送出
  function onSubmit(values) {
    alert(JSON.stringify(values, null, 2));
  }
</script>
<style>
</style>
