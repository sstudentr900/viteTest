<template>
  <input type="text" :value="props.modelValue" @input="emit('update:modelValue',$event.target.value)">
</template>
<script setup>
  // import {ref} from 'vue'
  //model 傳進來的值 modelValue
  const props = defineProps(['modelValue'])
  //更新update:modelValue 傳去上層
  const emit = defineEmits(['update:modelValue'])
</script>
<style scoped></style>
