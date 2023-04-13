<template>
    <p class="text-sm pt-8 font-normal">【非公式】【黙認】</p>
    <h1 class="pt-2">イカタコ研究所設立準備室</h1>
    <!-- <div class="mt-6 mx-auto">
        <nav class="">
            <router-link to="/">Home</router-link>
            <router-link to="/ikeda">Ikeda</router-link>
            <router-link to="/sugimoto">Sugimoto</router-link>
            <router-link to="/kopa">kopa</router-link>
            <router-link to="/cephalopoda">Cephalopoda</router-link>
            <router-link to="/gallery">Gallery</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/history">History</router-link>
        </nav>
    </div> -->


  <nav class="flex flex-wrap  mt-4 ml-4">
    <div class="block sm:hidden">
      <div class="flex flex-row">
        <button class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-500 hover:text-white hover:border-white" @click="isMenuOpen = !isMenuOpen">
          <svg class="h-3 w-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
          </svg>
        </button>
        <div class="flex items-center mr-4">
          <span class="font-bold text-base ml-2">イカタコメニュー</span>
        </div>
      </div>
    </div>
    <div :class="{'hidden': !isMenuOpen, 'block': isMenuOpen}" class="sm:flex flex-grow items-center">
      <ul class="sm:flex flex-grow justify-center mt-4 sm:mt-0 sm:mr-4">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/ikeda">Ikeda</router-link>
        </li>
        <li>
          <router-link to="/sugimoto">Sugimoto</router-link>
        </li>
        <li>
          <router-link to="/cephalopoda">Cephalopoda</router-link>
        </li>
        <li>
          <router-link to="/gallery">Gallery</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/history">History</router-link>
        </li>
        <li>
          <router-link to="/kopa">kopa</router-link>
        </li>
      </ul>
    </div>
  </nav>







    <div class="mt-4 mb-4 border-t bg-slate-500">
        <hr>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({ 
  name: 'HeaderComponent',
  props: { msg: String },
  data() {
    return {
      isMenuOpen: false
    }
  }
})
</script>

<style scoped lang="scss">
nav {
  a {
    &.router-link-exact-active {
      color: #42b983;
    }
    margin: 20px;
  }
}
</style>
