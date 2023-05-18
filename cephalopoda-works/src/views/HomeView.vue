<template>
  <div class="home">
    <HomeComponent/>
  </div>
  <!-- <InfoCard title="イカのビックリジャンプ死にabcdef" content="水槽の蓋を開けるとビックリして飛び出して死ぬ。
  うまくいけば救出できる。その点タコは安心。abcdef" :titleClass="'text-red-500'"/> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HomeComponent from "@/components/HomeComponent.vue";
import InfoCard from "@/components/InfoCard.vue";

export default defineComponent({
  name: 'HomeView',
  components: {
    HomeComponent,
    // InfoCard,
  },
});
</script>

