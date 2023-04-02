<template>
    <div>
        <Ikeda msg="from sugimotoPhDView"/>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import Ikeda from '@/components/IkedaPhD.vue';

    export default defineComponent({
        name: 'IkedaPhDView',
        components: {
            Ikeda,
        },
    });
</script>

