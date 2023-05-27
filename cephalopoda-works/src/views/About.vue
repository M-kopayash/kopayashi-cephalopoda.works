<template>
  <h2>頭足類研究所について</h2>
  <div class="px-4 text-left max-w-[650px] mx-auto">
    <!-- v-ifで実装 -->
    <hr />
    <h3 v-if="!isPC" @click="openStatuses.chronology = !openStatuses.chronology">
      {{ title }}
    </h3>
    <h3 v-else>{{ title }}</h3>
    <div v-if="openStatuses.chronology || isPC">
      <p>
        イカ研界隈を中心に、頭足類研究所を沖縄に作ろう的な話があったらしい。野郎は部外者なのであまり存じ上げておらない。
      </p>
      <p>そのうち杉本が書いてくれるでしょう。</p>
    </div>
    <!-- クラス追加で実装 -->
    <hr />
    <h3 :class="{ clickable: !isPC }" @click="openStatuses.about = !openStatuses.about">
      このサイトについて
    </h3>
    <div v-if="openStatuses.about || isPC">
      <p>このサイトは「イカタコ研究所『<strong>設立準備室</strong>』」です。</p>
      <p>公式がないし、研究室も（まだ）ないので「<strong>非公式</strong>」です。</p>
      <p>
        最初は「非公認」だったけど、杉本先生に話したので<strong>「黙認」に進化</strong>しました。
      </p>
      <p>勝手に応援系の存在なので、ふなっしーの仲間だと思っています。</p>
      <p>
        顛末詳細はこちら →
        <a class="link" href="http://hakkouyarou.com/post-1526424/">発酵野郎様のブログ</a>
      </p>
    </div>
    <hr />
    <h3 :class="{ clickable: !isPC }" @click="openStatuses.contact = !openStatuses.contact">
        コンタクト
    </h3>
    <div v-if="openStatuses.contact || isPC">
        <p>コンタクト情報を書く</p>
    </div>
    <hr />
    <h3 :class="{ clickable: !isPC }" @click="openStatuses.place = !openStatuses.place">
        所在地
    </h3>
    <div v-if="openStatuses.place || isPC">
        <p>住所？沖縄県のどこか・・・。</p>
    </div>
    <hr />
    <h3 :class="{ clickable: !isPC }" @click="openStatuses.map = !openStatuses.map">
        地図
    </h3>
    <div v-if="openStatuses.map || isPC">
        <p>住所？沖縄県のどこか・・・。</p>
    </div>
    <hr />
    <h3 :class="{ clickable: !isPC }" @click="openStatuses.staff = !openStatuses.staff">
        Staff
    </h3>
    <div v-if="openStatuses.staff || isPC">
        <h5 :class="{ clickable: !isPC }" @click="openStatuses.kopa = !openStatuses.kopa">
            発酵野郎 略歴
        </h5>
        <div v-if="openStatuses.kopa || isPC">
            <hr class="border border-t border-dashed" />
            <ul class="history-ul">
            <li>このサイトを一人で細々と作っている人</li>
            <li>イカ研出身者</li>
            <li>もともとは空手の先生を探しに沖縄に来た</li>
            <li>30歳の時、1年実家にお願いして引きこもり、琉球大学に入った。</li>
            <li>大学入学前は中卒で、トラック運転手やパチンコ店店員などを主にしていた。</li>
            <li>学部、修士、博士と全部別の研究室に行った。なぜかPhDを取るところまでやってしまった</li>
            <li>国内外に出張に明け暮れる製薬関連の仕事を3年</li>
            <li>2018年夏から社内SE的な、コールセンターに常駐プログラマー。業務の管理・運用に関する効率化・自動化のツール類を作成していた。C#、Python、VBA、GAS、バッチ、Salesforce、RPA（ロボパット）など</li>
            <li>2022年に転職して、それ以降はフロントエンド開発をしています。Web屋さんではないはずなので、このタスクの後何をするのかは不明。Angular、TailWindCSS、WSL、Docker、Git、たまにMac、など。完全在宅勤務・裁量労働制で稽古もできて幸せ。</li>
            <li>
                とはいえ、、、<span class="text-2xl font-bold text-red-600">よいお仕事ありましたらご紹介くださいー。</span
                >よろしくお願いしますー。
            </li>
            </ul>
        </div>
    </div>
    <hr />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutComponent",
  props: {
    msg: String,
  },
  data() {
    return {
      isContentOpen: false,
      title: "成り立ち",
      isPC: false,
      openStatuses: {
        chronology: false,
        about: false,
        contact: false,
        place: false,
        map: false,
        staff: false,
        kopa: false,
      },
    };
  },
  mounted() {
    this.isPC = window.innerWidth > 768; // 768px以下の場合はスマフォとする
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
</style>
