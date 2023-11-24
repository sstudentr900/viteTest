<template>
  <h2>綁定class及style</h2>
  <br>
  <h3>顯示物件</h3>
  <pre>
    #template
    :class="{ 'active':show==true }"

    #script
    const show = ref(false)
    onMounted(() => {
      show.value = true
    });
  </pre>
  <hr>
  <h4>參考</h4>
  <ul>
    <li>
      <a href="https://ithelp.ithome.com.tw/articles/10203646">v-bind綁定class及style</a>
    </li>
  </ul>
  <hr>
</template>

<script>
</script>
<style scoped>
</style>