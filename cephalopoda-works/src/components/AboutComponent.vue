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
        </ul>
        <div class="mt-6 mb-4 border-t bg-slate-500">
            <hr>
        </div>
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