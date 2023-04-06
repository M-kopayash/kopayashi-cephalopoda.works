<template>
    <div>
        <h2>イカタコのこと</h2>
        <p>イカタコ一般について書いてもらう</p>
        <ul>
            <li>イカタコの分類</li>
            <li>イカタコの研究史</li>
            <li>人とイカタコ</li>
            <li>鏡タッチとか</li>
            <li>色素包（漢字が違うかも）のこととか</li>
            <li>など</li>
        </ul>
        <img src="../assets/images/1372.jpg" alt="squid-1372">
    </div>
</template>

<script>
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'CephalopodaComponent',
        props: {
            msg: String
        }
    })
</script>

<style scoped>
</style>