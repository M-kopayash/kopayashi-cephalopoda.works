<template>
  <h2>頭足類研究所について</h2>
  <div>
    <ul>
      <li v-for="item in aboutItems" :key="item.title">
        <ToggleCard
          :title="item.title"
          :content="item.content"
          />
      </li>
    </ul>
  </div>  
  <div class="px-4 text-left max-w-[650px] mx-auto">
    <h3 class="mt-4 font-bold" :class="{ clickable: isPC }" @click="openStatuses.staff = !openStatuses.staff">
      staffスタッフ
    </h3>  
    <div v-if="openStatuses.staff || isPC">
      <div>
        <ul>
          <li v-for="item in staffItems" :key="item.title">
            <ToggleListCard
              :title="item.title"
              :content="item.content"
              :titleClass="'font-normal'"
              :hrClass="'border border-dashed'"
              />
          </li>
        </ul>
      </div>
    </div>
  </div>  
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ToggleCard from "@/components/ToggleCard.vue";
import ToggleListCard from '@/components/ToggleListCard.vue';
import aboutData from "../contents/aboutUs.json";
import staffData from '../contents/staff.json';
import { JsonStringItem } from "../types/interfaces";

export default defineComponent({
  name: "AboutUs",
  components: {
    ToggleCard,
    ToggleListCard,
  },
  data() {
    return {
        aboutItems: [] as JsonStringItem[],
        staffItems: [] as JsonStringItem[],
        isPC: false,
        openStatuses: {
          staff: false,
        },
    };
  },
  mounted() {
    this.isPC = window.innerWidth > 768;
    this.loadJson();
  },
  methods: {
    loadJson() {
      this.aboutItems = aboutData as JsonStringItem[];
      this.staffItems = staffData as JsonStringItem[];
    },
  },
});
</script>

<style scoped>
</style>
