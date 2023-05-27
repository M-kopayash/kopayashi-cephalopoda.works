<template>
  <div class="px-4 text-left max-w-[650px] mx-auto">
    <h3
      class="mt-4 font-bold"
      :class="[titleClass, { clickable: !isPhone }]"
      @click="toggleContent()">
      {{ title }}
    </h3>
    <div v-if="isContentOpen || !isPhone">
      <p class="mt-4" :class="contentClass" v-html="formattedContent"></p>
      <hr class="mt-2 mb-4" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ToggleCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    titleClass: {
      type: String,
    },
    contentClass: {
      type: String,
    },
  },
  computed: {
    // 改行コードを改行タグに変更
    formattedContent() {
      return this.content.replace(/\r?\n|\r/g, '</p><p class="mt-4">');
    },
  },
  data() {
    return {
      isContentOpen: false,
      isPhone: false,
    };
  },
  mounted() {
    this.isPhone = window.innerWidth <= 768; // 768px以下の場合はスマフォとする
  },
  methods: {
    toggleContent() {
      this.isContentOpen = !this.isContentOpen;
    },
  },
});

</script>
<style scoped></style>
