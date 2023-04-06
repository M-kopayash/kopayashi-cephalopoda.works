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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//     margin: 5px;
//   }
// }
img {
    width: 300px;
    height: auto;
    border: 1px solid black;
    margin: 5px;
}

</style>
