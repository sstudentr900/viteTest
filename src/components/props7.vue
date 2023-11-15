<template>
  <p :class="color">文字{{ color }}</p>
</template>
<script setup>
  import {computed,reactive,ref,watch,watchEffect} from 'vue'
  defineProps(['color'])
  // const props = defineProps({
  //   className:{
  //     // type: String,
  //     default: '',
  //     requires: true,
  //   }
  // })
</script>
<style scoped>
  p{
    font-size: 16px;
  }
  p.red{
    color: red;
  }
  p.blue{
    color: blue;
  }
</style>
