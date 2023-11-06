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
          <h1 class="mb-4">華特義式餐廳</h1>
          <div class="mb-3">
            <v-field
              type="text"
              name="會員名稱"
              placeholder="請輸入會員名稱"
              class="px-3 pe-4 py-2 form-control"
              rules="required"
              v-model="name"
              :class="{ 'is-invalid': errors['會員名稱'] }"
            ></v-field>
            <error-message name="會員名稱" class="invalid-feedback"></error-message>
          </div>
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
            註冊
          </button>
        </v-form>
        <div class="text-end login-buttom">
          <RouterLink to="/login">已是會員，請按此登入</RouterLink>
        </div>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
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
              .post("http://localhost:3000/user", {
                name: this.name,
                email: this.email,
                password: this.password,
              })
              .then((res) => {
                console.log(res);
                alert("註冊成功");
                // 網路請求成功後清空表單欄位(初始化)
                this.$refs.form.resetForm();
              })
              .catch((error) => {
                console.log(error);
                alert("註冊失敗");
              });
          } else {
            // 驗證不通過不予提交並顯示錯誤訊息
            alert("請確實填寫資料後提交");
          }
        });
      },
      login(event) {
        // @click.prevent=""  // 停止事件的默認行為
        // @click == v-on:click
        
        // 取消按鈕預設提交與刷新行為 
        event.preventDefault(); 
        // axios.post 提交/新增資料的網路請求
        axios.post("http://localhost:3000/user", {
          // 紀錄要傳送給伺服器的資料內容
          name: this.name,
          email: this.email,
          password: this.password,
        })
        .then((res) => {      // 請求成功會觸發/執行這個 function 函式
          console.log(res);
          alert("註冊成功");
        })
        .catch((error) => {      // 請求失敗則觸發/執行這個 function 函式
          console.log(error);
          alert("註冊失敗");
        });
      }
    }
  }
</script>

<style scoped>
</style>