<template>
  <h2>v-model</h2>
  <h3>單向綁定(靜態資料)</h3>
  <pre>
    #script
    import {computed,reactive,ref,watch,watchEffect} from 'vue'
    //單向綁定(靜態資料)
    const data ='hellow vue'

    #template
    &lt;p>&lbrace;&lbrace;data&rbrace;&rbrace;&lt;/p>
  </pre>
  <h3>雙向綁定(v-model 綁定資料)</h3>
  <p>對表單和components都可綁定</p>
  <p>v-model.lazy="text" 不會即時會變成change</p>
  <p>v-model.number="text" 字串會變數字須注意開頭不能O</p>
  <p>v-model.trim="text" 拿掉空格</p>
  <pre>
    #script
    import {computed,reactive,ref,watch,watchEffect} from 'vue'
    //雙向綁定
    const text = ref('125')

    #template
    &lt;input type="text" v-model="text">
    &lt;p>&lbrace;&lbrace;text&rbrace;&rbrace;&lt;/p>
  </pre>
  <h3>參考</h3>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=vfxWeC1PwOc&list=PLSCgthA1AnifSzKdpV4FWq1pLVF4FbZ4K&index=5">建立組件與基本資料綁定 v-model、ref【Proladon】</a>
    </li>
    <li>
      <a href="https://www.youtube.com/watch?v=firPRbhoX7o">v-model 資料的雙向綁定 / 自訂義組件的資料綁定 / One-Way Data Flow 單向資料流</a>
    </li>
  </ul>
  <hr>
  <h3>拆解v-model 等於 :model-vlue and @change</h3>
  <pre>
    #script
    import {computed,reactive,ref,watch,watchEffect} from 'vue'
    const text = true
    const changeFn = (i,value)=>{
      console.log(value)
    }

    #template
    &lt;input type="text" :model-vlue="text" @change='(value)=>changeFn(i,value)'>
  </pre>
  <h3>參考</h3>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=Ggu_9ZAwD10&list=PLFbd8KZNbe---KNiUInMOOSEtmfudpONG&index=80">拆解v-model</a>
    </li>
  </ul>
</template>
<script setup>
  // import {computed,reactive,ref,watch,watchEffect} from 'vue'
  // //單向綁定(靜態資料)
  // const data ='hellow vue'

  // //雙向綁定
  // const text = ref('125')
</script>
<style></style>
