<template>
  <slot name="btn">預設值:{{name}}</slot>
</template>
<script setup>
  const props = defineProps(['name'])
</script>
<style scoped></style>
