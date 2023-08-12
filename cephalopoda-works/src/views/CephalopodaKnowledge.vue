<template>
  <h2>イカタコのこと</h2>
  <div>
    <ul>
      <li v-for="item in items" :key="item.title">
        <ToggleCard
          :title="item.title"
          :content="item.content"
        />
      </li>
    </ul>
  </div>
  <img src="../assets/images/1372.jpg" alt="squid-1372" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ToggleCard from "@/components/ToggleCard.vue";
import jsonData from "../contents/CephalopodaKnowledge.json";
import { JsonStringItem } from "../types/interfaces";

export default defineComponent({
  name: "CephalopodaKnowledge",
  components: {
    ToggleCard,
  },
  data() {
    return {
      items: [] as JsonStringItem[],
    };
  },
  mounted() {
    this.loadJson();
  },
  methods: {
    async loadJson() {
      this.items = (jsonData as unknown) as JsonStringItem[];
    },
  },
});
</script>

<style scoped>
hr {
  @apply mb-4 mt-2;
}
</style>
