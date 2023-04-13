<template>
  <div>
    <AboutComponent msg=""/>
    <br>
    <img src="../assets/images/3068.jpg" alt="squid-3068">
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