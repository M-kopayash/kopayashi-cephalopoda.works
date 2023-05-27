<template>
  <div class="px-4 max-w-[650px] mx-auto">
      <h2>杉本先生のこと</h2>
      <img src="../assets/images/9230.jpg">
      <p class="mt-6">僕はイカタコを心底おもしろいと思っています。</p>
  </div>
  <div>
    <ul>
      <li v-for="item in items" :key="item.title">
        <ToggleCard :title="item.title" :content="item.content"/>

      </li>
    </ul>
  </div>

  <div class="px-4 max-w-[650px] mx-auto">      
    <img src="../assets/images/9493.jpg">
    <hr class="mt-4 mb-2">
    <h3>杉本先生に関係するリンク</h3>
    <p class="mb-4">検索してパッと引っかかるものにリンクを張りました。</p>
    <ul class="text-left px-2">
      <li class="list-disc list-inside mb-2"><a class="link" href="https://k-ris.keio.ac.jp/html/100015817_ja.html">慶應義塾研究者情報データベース「杉本親要」</a></li>
      <li class="list-disc list-inside mb-2"><a class="link" href="https://nrid.nii.ac.jp/ja/nrid/1000000813718/">科学研究費助成事業データベース「杉本親要」</a></li>
      <li class="list-disc list-inside mb-2"><a class="link" href="https://research-er.jp/researchers/view/855617">日本の研究.com「杉本親要」</a></li>
      <li class="list-disc list-inside mb-2"><a class="link" href="https://www.jstage.jst.go.jp/article/suisan/88/4/88_WA2963/_pdf/-char/ja">日本水産学会誌 88(4), 319-320 (2022)</a></li>
      <li class="list-disc list-inside mb-2"><a class="link" href="https://note.com/tomokokoko_/n/nbcf03bee2373">『Eぐみに会いに行く。』#1 杉本親要さんインタビュー【前編】「頭足類(とうそくるい)」に魅せられて〜“貝殻を脱いだ軟体動物“イカの賢さの理由を探る〜</a></li>
      <li class="list-disc list-inside mb-2"><a class="link" href="https://note.com/tomokokoko_/n/n50664fbe47db">『Eぐみに会いに行く。』#1 杉本親要さんインタビュー【後編】 心の底から「面白い！」と思える瞬間を増やしたい〜イカ研究から沖縄の地域貢献まで〜</a></li>
      <li class="list-disc list-inside mb-2"><a class="link" href="https://www.rbc.co.jp/radio/radio_blog/%e5%8f%aa%e4%bb%8a%e3%81%84%e3%81%8d%e3%82%82%e3%81%ae%e3%82%93%e3%81%a1%e3%82%85%ef%bc%88%e3%82%bf%e3%82%b3%e3%81%a8%e3%82%a4%e3%82%ab%e3%81%ae%e9%ad%85%e5%8a%9b%e3%81%8c%e6%ba%80%e8%bc%89%e3%81%ae/">只今いきものんちゅ（タコとイカの魅力が満載の絵本）</a></li>
    </ul>
  </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import ToggleCard from '@/components/ToggleCard.vue';
import jsonData from "../contents/sugimotoIntroduction.json";
import { JsonStringItem } from "../types/interfaces"

export default defineComponent({
    name: 'SugimotoContents',
    components: {
      ToggleCard,
    },
    data() {
      return {
        items: [] as JsonStringItem[],
      }
    },
    mounted() {
      this.loadJson();
    },
    methods: {
      async loadJson(){
        this.items = jsonData as unknown as JsonStringItem[];
      }
    }
  })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  @apply mt-4 font-bold text-left;
}
p {
  @apply mt-4 text-left;
}
</style>
  