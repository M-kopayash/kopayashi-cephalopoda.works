<template>
  <div class="home">
    <HomeMain/>
    <UpdateHistory/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HomeMain from "@/components/HomeMain.vue";
import UpdateHistory from '@/components/UpdateHistory.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    HomeMain,
    UpdateHistory,
  },
});
</script>

