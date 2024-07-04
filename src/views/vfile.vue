<template>
  <h2>Vue-file</h2>
  <h3>Vue實做圖片預覽</h3>
  <pre>
    //html
    <form ref="formRef">
      &lt;input type="file" name="file" @change="fileSelectedFn">
      &lt;img v-if="imageSrc" :src="imageSrc">
    </form>

    //js
    //預覽圖片
    const imageSrc = ref(null);
    const fileSelectedFn = (event)=>{
      const file = event.target.files.item(0); //取得File物件
      const reader = new FileReader(); //建立FileReader 監聽 Load 事件
      reader.addEventListener('load',imageLoader);
      reader.readAsDataURL(file);
    }
    const imageLoader = (event)=>{
      imageSrc.value = event.target.result;
    }

    //驗證file大小
    const formRef = ref(null);
    const bytes = formRef.value.file.files[0].size
    const kb = formRef.value.file.files[0].size/1024
    const mb = (formRef.value.file.files[0].size/1024)/1024
    if(mb>5){
      formRef.value.file.setCustomValidity('檔案超過5Mb')
      //重製 file
      formRef.value.file.outerHTML = formRef.value.file.outerHTML
    }
  </pre>
  <h3>參考</h3>
  <ul>
    <li>
      <a href="https://runkids.github.io/vue/2017123101/">使用Vue實做圖片預覽</a>
    </li>
    <li>
      <a href="https://shunnien.github.io/2017/06/02/file-upload-size-validation-in-js/">JS 驗證檔案大小</a>
    </li>
  </ul>
  <h3>js清空input file的值</h3>
  <pre>
    const file = document.getElementById('file')
    file.outerHTML = file.outerHTML;//重製file 
  </pre>
  <h3>參考</h3>
  <ul>
    <li>
      <a href="https://blog.csdn.net/lihefei_coder/article/details/76850498">js清空input file的值</a>
    </li>
  </ul>
</template>
<script setup></script>
<style scoped></style>
