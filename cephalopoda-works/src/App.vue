<template>
  <HeaderView/>
  <div class="w-[1280] mx-auto mb-8 px-4 flex-1">
    <router-view/>
  </div>
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
  color: white;
}

body {
  background-color: black;
}
img {
    display: block;
    margin: 0 auto;
    width: 600px;
    height: auto;
    border: 1px solid black;
}
.link {
    @apply text-blue-500 hover:text-blue-700 font-bold;
}
</style>
