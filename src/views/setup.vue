<script setup>
</script>
<template>
  <h2>setup語法糖</h2>
  <h3></h3>
  <p></p>
  <pre>
    #script 
    &lt;script>
      export default{
        setup(){
          //數據
          const message = 'message'

          //函數
          const logMessage=()=>{
            console.log(message)
          }

          return {
            message,
            logMessage
          }
        }
      }
    &lt;/script>

    #setup 語法糖
    &lt;script setup>
      //數據
      const message = 'message'

      //函數
      const logMessage=()=>{
        console.log(message)
      }
    &lt;/script>
  </pre>
  <h3>參考</h3>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=Wc9LJ0j1x3Y&list=PLFbd8KZNbe---KNiUInMOOSEtmfudpONG&index=5" target="_blank">前端Vue3小兔鲜实战项目-Day1-05-组合式API入口-setup</a>
    </li>
  </ul>
</template>

<style scoped>
</style>
