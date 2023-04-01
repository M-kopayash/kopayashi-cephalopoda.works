<template>
  <p>it is written on app.vue</p>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <CephalopodHome message="passing string"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import CephalopodHome from './components/CephalopodHome.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    CephalopodHome,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
