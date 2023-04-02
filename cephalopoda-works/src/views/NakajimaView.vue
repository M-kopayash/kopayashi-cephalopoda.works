<template>
    <div>
        <Nakajima msg="from nakajimaPhDView"/>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import Nakajima from '@/components/NakajimaPhD.vue';
    
    export default defineComponent({
        name: 'NakajimaPhDView',
        components: {
            Nakajima,
        },
    });
</script>