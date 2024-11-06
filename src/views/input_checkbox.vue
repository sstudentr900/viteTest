<template>
  <div>
    <label>
      <input type="checkbox" value="Option 1" v-model="selectedOptions" /> Option 1
    </label>
    <label>
      <input type="checkbox" value="Option 2" v-model="selectedOptions" /> Option 2
    </label>
    <label>
      <input type="checkbox" value="Option 3" v-model="selectedOptions" /> Option 3
    </label>
    <p>Selected options: {{ selectedOptions }}</p>
  </div>
</template>
<script>
  import {onMounted,reactive,ref} from 'vue'
  export default {
    setup() {
      const selectedOptions = ref([])
      return {
        selectedOptions,
      };
    }
  };
  </script>
<style>
</style>

