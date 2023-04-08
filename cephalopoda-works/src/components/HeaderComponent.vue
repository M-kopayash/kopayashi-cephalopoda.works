<template>
    <div class="bg-black text-white">
        <div class="text-3xl pt-8">
            <h1>【非公式】【未公認】頭足類研究所準備室（仮）home</h1>
        </div>
        <div class="mt-6">
            <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/ikeda">Ikeda</router-link>
            <router-link to="/nakajima">Nakajima</router-link>
            <router-link to="/sugimoto">Sugimoto</router-link>
            <router-link to="/cephalopoda">Cephalopoda</router-link>
            <router-link to="/gallery">Gallery</router-link>
            <router-link to="/about">About</router-link>
        </nav>
        </div>
        <div class="mt-4 mb-4 border-t bg-slate-500">
            <hr>
        </div>
    </div>

</template>

<script>
    import { defineComponent } from 'vue';

    export default defineComponent({ 
        name: 'HeaderComponent',
        props: { msg: String },
    })
</script>

<style scoped lang="scss">
nav {
//   padding: 10px;
//   margin-top: 15px;

  a {
    // color: white;

    &.router-link-exact-active {
      color: #42b983;
    }
    margin: 20px;
  }
}

</style>

444444
68.68,68

121212
rgb(18,18,18)

rgb(245,245,247)

SF Pro JP