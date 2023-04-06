<template>
    <div>
        <NakajimaComponent msg="from nakajimaPhDView"/>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import NakajimaComponent from '@/components/NakajimaComponent.vue';
    
    export default defineComponent({
        name: 'NakajimaView',
        components: {
            NakajimaComponent,
        },
    });
</script>