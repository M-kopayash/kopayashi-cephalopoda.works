<template>
    <GalleryComponent msg=""/>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import GalleryComponent from '@/components/GalleryComponent.vue';
    export default defineComponent ({  
        name: 'GalleryView',
        components: {
            GalleryComponent,
        },
    });
</script>
