<template>
    <Sugimoto msg="from sugimotoPhDView"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Sugimoto from '@/components/SugimotoPhD.vue';

export default defineComponent({
  name: 'SugimotoPhDView',
  components: {
    Sugimoto
},
});
</script>

