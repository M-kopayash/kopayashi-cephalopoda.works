<template>
  <div class="home">
    <HomeComponent/>
    <HistoryComponent/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HomeComponent from "@/components/HomeComponent.vue";
import HistoryComponent from '@/components/HistoryComponent.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    HomeComponent,
    HistoryComponent,
  },
});
</script>

