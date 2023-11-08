<template>
  <div class="container">
    <ul class="nav main-nav mb-5">
      <li class="nav-item">
        <a class="nav-link active py-3 px-4" aria-current="page" href="#">主頁</a>
      </li>
      <li class="nav-item">
        <a class="nav-link py-3 px-4" href="#">口袋餐廳</a>
      </li>
      <li class="nav-item">
        <a class="nav-link py-3 px-4" href="#">餐廳實評</a>
      </li>
      <li class="nav-item">
        <RouterLink to="/login" class="nav-link py-3 px-4">登出</RouterLink>
      </li>
    </ul>
    <h3>{{ store.name }}</h3>
    <p class="fs-4 fw-bold text-capitalize text-primary">歡迎華特會員 {{ userName }}</p>
    <div>
      <img src="https://media.istockphoto.com/id/1317988317/photo/close-up-of-young-asian-female-small-business-owner-in-apron-starting-her-business-day.jpg?s=2048x2048&w=is&k=20&c=OheXOulCM-Kc36YrO84f-Gm5iF6ElcBsPq3A_GZ4d8k=" alt="主頁預設圖案" class="main-img mx-auto">
    </div>
  </div>
</template>
<script>
  import { mapState } from 'pinia';

  // 在元件中引入並呼叫 useLoginStore() 來訪問 store
  import { useLoginStore } from "../components/LoginStore.js";
  export default {
    data() {
      return {
        store: useLoginStore()
      };
    },
    computed: {
      ...mapState(useLoginStore, {
        // 'name' 是 store 中的狀態名，'userName' 是在組件中的名稱
        userName: (state) => {
          return state.name
          // console.log('34',state.name)
        },
      }),
    }
  };
</script>
<style scoped></style>
