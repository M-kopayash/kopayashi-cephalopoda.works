<template>
  <div>
    <AboutComponent msg=""/>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import AboutComponent from '@/components/AboutComponent.vue';
  
  export default  defineComponent({
    name: 'AboutView',
    components: {
      AboutComponent,
    }
  })
</script>