<template>
  <HeaderView/>
  <router-view/>
</template>

<script>
import HeaderView from './views/HeaderView.vue';
export default {
  name: 'App',
  components: {
    HeaderView,
  },
}
</script>

<style lang="scss">
@import "@/index.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
</style>
