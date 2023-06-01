<template>
    <h2 class="mt-4">更新履歴：</h2>
    <div>
        <ul>
            <li v-for="item in items" :key="item.title">
                <ToggleListCard
                :title="item.title"
                :content="item.content"
                />
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ToggleListCard from "@/components/ToggleListCard.vue";
import jsonData from "../contents/updateHistory.json";
import { JsonStringItem } from "../types/interfaces";


export default defineComponent({
    name: 'UpdateHistory',
    components: {
    ToggleListCard,
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
    loadJson() {
      this.items = jsonData as JsonStringItem[];
    },
  },
});
</script>

<style scoped>
.history-ul {
    @apply list-disc list-inside mb-4;
}
hr {
    @apply mt-4 mb-2;
}
.router-link {
    @apply text-blue-500 hover:text-blue-700 font-bold;
}

</style>