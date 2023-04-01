<template>
  <h1>message: {{ message }}</h1>
  <p>helloCephalopodHome</p>
  <img src="../assets/copy.jpg" alt="squid">
  <p>it is written in CephalopodHome page</p>
  <p>日本語も書けるのかしら</p>
  <hr>
</template>

<script>
export default {
  name: 'CephalopodHome',
  props: {
    message: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img {
      width: 300px;
      height: auto;
      border: 1px solid black;
      margin-top: 5px;
  }

</style>
