<template>
    <SugimotoComponent msg="from sugimotoView"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SugimotoComponent from '@/components/SugimotoComponent.vue';

export default defineComponent({
  name: 'SugimotoView',
  components: {
    SugimotoComponent
},
});
</script>

