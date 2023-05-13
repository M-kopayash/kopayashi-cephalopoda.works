<template>
    <div class="px-4 text-left max-w-[650px] mx-auto ">
        <h3 class="mt-4 font-bold" :class="titleClass">{{ title }}</h3>
        <p class="mt-4" :class="contentClass">{{ content }}</p>
        <hr class="mt-2">
    </div>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'InfoCard',
    props: {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        titleClass: {
            type: String,
        },
        contentClass: {
            type: String,
        },
    },
});
</script>
<style scoped></style>
