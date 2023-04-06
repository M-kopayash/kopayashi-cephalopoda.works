<template>
    <div>
        <h2>頭足類研究所について</h2>
        <p>書くこと</p>
        <ul>
            <li>Staff</li>
            <li>成り立ち</li>
            <li>コンタクト</li>
            <li>所在地</li>
            <li>地図</li>
            <li>更新履歴（やがてHomeから移動）</li>
        </ul>
        <img src="../assets/images/3068.jpg" alt="squid-3068">
    </div>
</template>

<script>
import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'AboutComponent',
        props: {
            msg: String
        }
    })
</script>

<style scoped>
</style>