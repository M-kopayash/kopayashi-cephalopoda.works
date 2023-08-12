<template>
  <h2 class="mt-2">発酵野郎とイカタコ</h2>
  <div class="px-4 text-left max-w-[650px] mx-auto">
    <p>
      杉本先生から発酵野郎から見たイカタコも書くようにとのご指示をいただきました。野郎は専門家ではないので、イカ研で経験した卒論の記憶を中心に書きます。専門的なイカタコのことは専門家にお任せします。
    </p>
    <p>
      自己紹介まではいかないけれども →
      <a class="link" href="http://hakkouyarou.com">発酵野郎様のブログ</a>
    </p>
    <p>書くつもりの内容を備忘録的に書き出します。時間あるときに書き足すー。</p>
    <hr />
  </div>
  <div>
    <ul>
      <li v-for="item in items" :key="item.title">
        <ToggleCard
          :title="item.title"
          :content="item.content"
          :titleClass="'text-red-500'"
        />
      </li>
    </ul>
  </div>

  <img src="../assets/images/1371.jpg" alt="squid-1371" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ToggleCard from "@/components/ToggleCard.vue";
import jsonData from "../contents/kopaContents.json";
import { JsonStringItem } from "../types/interfaces";

export default defineComponent({
  name: "KopaContents",
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
p {
  @apply mt-4;
}
h3 {
  @apply mt-4 font-bold text-red-500;
}
hr {
  @apply mt-2;
}
</style>
