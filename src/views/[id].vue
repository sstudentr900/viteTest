<template>
  <h2>[id]</h2>
  <p>網址:{{ route.path }}</p>
</template>
<script setup>
  import { useRoute,useRouter } from 'vue-router'
  const route = useRoute()
  const router = useRouter()

  //跳頁需式useRouter
  setTimeout(()=>{
    // router.push('/') //會記錄並換頁
    router.push({path:"/"}) //同上
    router.push({ path:"/",query:{username:'qq'} }) //帶參數(/?username=qq) 
    router.replace({path:"/"}) //不會記錄上一頁
  },3000)
  console.log(router)
</script>
<style scoped></style>
