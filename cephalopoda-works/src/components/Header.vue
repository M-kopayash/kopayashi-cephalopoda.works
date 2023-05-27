<template>
  <p class="text-sm pt-8 font-normal">【非公式】【黙認】【杉本公認】</p>
  <h1 class="pt-2">イカタコ研究所設立準備室</h1>
  <nav class="flex flex-wrap  mt-4 ml-4">
    <div class="block sm:hidden">
      <div class="flex flex-col items-start">
        <div class="flex flex-row">
          <!-- ハンバーガーボタン -->
          <button class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-500 hover:text-white hover:border-white" @click="isMenuOpen = !isMenuOpen">
            <svg class="h-3 w-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
            </svg>
          </button>
          <!-- ボタンタイトル -->
          <div class="flex items-center mr-4">
            <span class="font-bold text-base ml-2">イカタコメニュー</span>
          </div>
        </div>
        <!-- イカ -->
        <div :class="{'hidden': !isMenuOpen, 'block': isMenuOpen}">
          <img class="w-[200px] mt-4" src="../assets/images/1372.jpg" alt="squid-1372">
        </div>
      </div>
    </div>
    <!-- navのリスト -->
    <div :class="{'hidden': !isMenuOpen, 'block pl-14': isMenuOpen}" class="sm:flex flex-grow ">
      <ul class="sm:flex flex-grow justify-center mt-4 sm:mt-0 sm:mr-4">
        <li class="li-setting">
          <router-link to="/">Home</router-link>
        </li>
        <li class="li-setting">
          <router-link to="/ikeda">Ikeda</router-link>
        </li>
        <li class="li-setting">
          <router-link to="/sugimoto">Sugimoto</router-link>
        </li>
        <li class="li-setting">
          <router-link to="/cephalopoda">Cephalopoda</router-link>
        </li>
        <li class="li-setting">
          <router-link to="/gallery">Gallery</router-link>
        </li>
        <li class="li-setting">
          <router-link to="/about">About</router-link>
        </li>
        <li class="li-setting">
          <router-link to="/history">History</router-link>
        </li>
        <li class="li-setting">
          <router-link to="/kopa">発酵野郎</router-link>
        </li>
      </ul>
    </div>
  </nav>
  <!-- 仕切り線 -->
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

.li-setting {
  @apply text-left;
}
</style>
