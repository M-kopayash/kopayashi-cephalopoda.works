<template>
    <div>
        <KopaComponent msg="from kopaPhDView"/>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import KopaComponent from '@/components/KopaComponent.vue';
    
    export default defineComponent({
        name: 'KopaView',
        components: {
            KopaComponent,
        },
    });
</script>