<template>
    <h2>イカタコのこと</h2>
    <p>もしかして野郎が書くことになるのかも。。。</p>
    <div class="px-4 text-left max-w-[650px] mx-auto">
        <hr>
        <h3>イカタコの分類</h3>
        <p>イカタコの分類</p>
        <hr>
        <h3>イカタコの研究史</h3>
        <p>イカタコの研究史</p>
        <hr>
        <h3>人とイカタコ</h3>
        <p>人とイカタコ</p>
        <hr>
        <h3>鏡タッチとか</h3>
        <p>鏡タッチとか</p>
        <hr>
        <h3>ボディパターンとか</h3>
        <p>ボディパターンとか</p>
        <hr>
        <h3>色素包（漢字が違うかも）のこととか</h3>
        <p>色素包（漢字が違うかも）のこととか</p>
        <hr>
    </div>
    <img src="../assets/images/1372.jpg" alt="squid-1372">
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
hr {
    @apply mb-4 mt-2;
}

</style>