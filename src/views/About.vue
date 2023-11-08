<template>
  <div>
    <h1>About</h1>
    <button @click="navigateToAbout">Go to About</button>
    <button @click="navigateToContact">Go to Contact</button>
    <router-view></router-view>
  </div>
</template>
<script>
  import Navbar from './Navbar.vue';
  export default {
    components: {
    },
    methods: {
      navigateToAbout() {
        this.$router.push('/about');
      },
      navigateToContact() {
        this.$router.push('/contact');
      },
    },
  };
</script>
<style scoped></style>
