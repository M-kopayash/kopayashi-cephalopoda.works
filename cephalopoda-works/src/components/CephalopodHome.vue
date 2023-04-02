<template>
    <div>
        <h1>message: {{ message }}</h1>
        <p>hello Cephalopod Home</p>
        <img src="../assets/img/1367.jpg" alt="squid1367">
        <p>@CephalopodHome</p>
        <p>日本語</p>
        <hr>
    </div>
</template>

<script>
export default {
    name: 'CephalopodHome',
    props: {
        message: String,
    },
}
</script>

<style scoped>
    img {
        width: 300px;
        height: auto;
        border: 1px solid black;
        margin-top: 5px;
    }
</style>