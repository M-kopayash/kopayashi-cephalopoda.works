<template>
  <div>
  </div>
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
  <div>
  </div>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
    margin: 5px;
  }
}
img {
    width: 300px;
    height: auto;
    border: 1px solid black;
    margin: 5px;
}

</style>
