<template>
  <div class="container">
    <div class="row pt-3">
      <div class="col"></div>
      <div class="col-4">
        <img
          src="https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
          class="img-fluid"
          alt="首頁畫面圖"
        />
      </div>
      <div class="col-3 my-auto">
        <v-form id="form" ref="form" v-slot="{ errors }" @submit="submitOrder">
          <h1>華特義式餐廳</h1>
          <p class="mb-4 fs-4">歡迎華特會員</p>
          <div class="mb-3">
            <v-field
              type="text"
              name="信箱"
              placeholder="請輸入電子郵件"
              class="px-3 pe-4 py-2 form-control"
              rules="required|email"
              v-model="email"
              :class="{ 'is-invalid': errors['信箱'] }"
            ></v-field>
            <error-message name="信箱" class="invalid-feedback"></error-message>
          </div>
          <div class="mb-4">
            <v-field
              type="password"
              name="密碼"
              placeholder="請輸入密碼"
              class="px-3 pe-4 py-2 form-control"
              :rules="isPassword"
              v-model="password"
              :class="{ 'is-invalid': errors['密碼'] }"
            ></v-field>
            <error-message name="密碼" class="invalid-feedback"></error-message>
          </div>
          <button class="btn btn-lg btn-primary w-100 mb-4" type="submit">
            登入
          </button>
        </v-form>
        <div class="text-end login-buttom">
          <RouterLink to="/register">返回註冊會員</RouterLink>
        </div>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import { useLoginStore } from "../components/LoginStore.js";
  export default {
    data() {
      return {
        name: "",
        email: "",
        password: "",
      };
    },
    methods: {
      // 自訂驗證規則-密碼需含大小寫英文字母
      isPassword(value) {
        const passwordNumber = /^(?=.*[a-z])(?=.*[A-Z])/;
        return passwordNumber.test(value) ? true : "密碼 需含大小寫英文字母";
      },
      // 表單送出按鈕
      submitOrder() {
        // 使用 Vee Validate 的 validate 函式來驗證表單
        this.$refs.form.validate().then((valid) => {
          if (valid) {
            // 驗證通過，可以提交表單
            axios
              .get(`http://localhost:3000/user?email=${this.email}&password=${this.password}`)
              .then((res) => {
                // console.log(res);
                // alert("登入成功");
              
                // 假設網路請求成功取得資料集
                // 變數 newName 指資料集裡的第一個物件值
                const newName = res.data[0]; 
                // console.log(newName)
                // 令 data() 裡的 name 為資料集的 name
                this.name = newName.name; 
                this.email = newName.email;
                this.id = newName.id;
                // 使用 Pinia 中的 updateUser action 更新 store 裡的 state 資料
                // (1)訪問 store 中的狀態和執行。這寫法是直接在方法中取得 store 實例(userStore)
                const userStore = useLoginStore(); 
                // (2)操作這實例(userStore)去調用 updateName ，將 axios.get 取得的 newName.name 更新到 store 的 name 狀態中
                userStore.updateName(newName.name); 
                userStore.updateEmail(newName.email); 
                userStore.updateId(newName.id); 
                // 印出來看 newName.name 值
                // console.log("User data updated:", newName.name);
                // 網路請求成功後清空表單欄位(初始化)
                // this.$refs.form.resetForm();
                this.$router.push("/login/main");
              })
              .catch((error) => {
                console.log(error);
                alert("您尚未成為會員，請先註冊");
              });
          } else {
            // 驗證不通過不予提交並顯示錯誤訊息
            alert("請確實填寫資料後提交");
          }
        });
      },
    }
  }
</script>

<style scoped>
</style>