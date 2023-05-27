<template>
  <div class="home">
    <p class="mb-8">これから書き足していきます。ボチボチやっていきますー。</p>
  <img src="../assets/images/1373.jpg" alt="squid-1373">
  </div>
  <div>
    <ul>
      <li v-for="item in items" :key="item.title">
        <ToggleCard :title="item.title" :content="item.content" :titleClass="'text-red-500'"/>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import HomeComponent from "@/components/HomeComponent.vue";
import ToggleCard from '@/components/ToggleCard.vue';
import jsonData from "../contents/test.json";

interface Item {
  title: string;
  content: string;
}
export default defineComponent({
  name: 'HomeView',
  components: {
    // HomeComponent,
    ToggleCard,
  },
  data() {
    return {
      items: [] as Item[],
    };
  },
  mounted() {
    this.loadJson();
  },
  methods: {
    async loadJson() {
      this.items = jsonData as unknown as Item[];
    },
  }
});
</script>

