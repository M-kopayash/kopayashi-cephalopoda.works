<script src="https://unpkg.com/vue@3"></script>
<script src="https://unpkg.com/vue-router@4"></script>

<template>
  <div id="app">
    <HelloWorld msg="passing to helloWorld"/>
    <CephalopodHome message="passing to cephalopodHome"/>

    <p>
      <router-link to="/">go to home</router-link>
      <router-link to="/helloWorld">go to helloWorld</router-link>
    </p>
    
    <router-view></router-view>
  </div>
  テスト
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CephalopodHome from './components/CephalopodHome.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,
    CephalopodHome,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
