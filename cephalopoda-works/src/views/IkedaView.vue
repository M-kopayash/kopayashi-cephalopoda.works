<template>
    <div>
        <IkedaComponent msg="from sugimotoPhDView"/>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import IkedaComponent from '@/components/IkedaComponent.vue';

    export default defineComponent({
        name: 'IkedaView',
        components: {
            IkedaComponent,
        },
    });
</script>

