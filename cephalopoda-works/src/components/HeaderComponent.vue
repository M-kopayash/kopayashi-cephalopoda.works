<template>
    <div class="bg-black text-white">
        <p>@header</p>
        <h1>【非公式】【未公認】<br>頭足類研究所準備室（仮）home</h1>
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

</template>

<script>
    export default { 
        name: 'HeaderComponent',
        props: { msg: String },
    }
</script>

<style scoped lang="scss">
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: white;

    &.router-link-exact-active {
      color: #42b983;
    }
    margin: 5px;
  }
}

</style>