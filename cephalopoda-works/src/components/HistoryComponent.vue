<template>
    <h2 class="text-2xl mb-2">履歴：</h2>
    <div class="border border-gray-400 p-4 text-left"> 
        <p>20230408：</p>
        <ul class="history-ul">
            <li>履歴リストの見た目を少しマシにした</li>
            <li>メモしてあった履歴をコードに乗せた</li>
        </ul>
        <div class="mt-4 mb-4">
            <hr>
        </div>
        <p>20230407：</p>
        <ul class="history-ul">
            <li>コンポーネントに背景色と文字色を設定</li>
            <li>ヘッダーのCSSを調整</li>
        </ul>
        <div class="mt-4 mb-4">
            <hr>
        </div>
        <p>20230405：</p>
        <ul class="history-ul">
            <li>ヘッダー（タイトルとナビ）をコンポーネント化</li>
            <li>ヘッダーの背景色・文字色を変更</li>
        </ul>
        <div class="mt-4 mb-4">
            <hr>
        </div>
        <p>20230404：</p>
        <ul class="history-ul">
            <li>tailWindCSSをインストールしてHelloWorldした</li>
        </ul>
        <div class="mt-4 mb-4">
            <hr>
        </div>
        <p>20230403：</p>
        <ul class="history-ul">
            <li>GalleryやAboutなども作成して、ルーティングを設定</li>
        </ul>
        <div class="mt-4 mb-4">
            <hr>
        </div>
        <p>20230402：</p>
        <ul class="history-ul">
            <li>書いてもらう予定の先生たちのページなどを作って、ルーティングを設定した</li>
        </ul>
        <div class="mt-4 mb-4">
            <hr>
        </div>
        <p>20230401：</p>
        <ul class="history-ul">
            <li>dockerFileをいじってリビルドしたら自動リロードしなくなった。。。</li>
            <li>nodeのバージョンとか色々変えて試したけど、何やっても駄目だった</li>
            <li>既知の未解決問題？ホントか？</li>
            <li>リンク：<a href="https://zenn.dev/felmy/articles/6555e644134519" class="link">Vue.jsのホットリロードが効かない場合の対処法（「WSL2(Windoes10)」+「Docker」環境）</a></li>
            <li>リンク：<a href="https://vue-loader-v14.vuejs.org/ja/features/hot-reload.html" class="link">devServer.public no longer exists in Vue CLI v5. Update documentation on that #6841</a></li>
            <li>ホットリロード問題はいったんあきらめた・・・・・・・</li>
            <li>ホットリロード問題を調べてるうちに、プロジェクト作成時にいろいろ設定できたことに気がついた</li>
            <li>TypeScriptとかSCSS、ルーティングを設定したプロジェクトを再作成した</li>
        </ul>
        <div class="mt-4 mb-4">
            <hr>
        </div>
        <p>20230325：</p>
        <ul class="history-ul">
            <li>Nodeのバージョンを上げてDockerFileを再作成（18-alpine3.17）</li>
            <li>Gitにリポジトリ作って（非公開→そのうち公開）、SSH接続設定をした</li>
            <li>権限周りがヤヤコシイのでWSLを隔離し、WSLのubuntuをroot起動するようにした</li>
            <li>vue.js3でひな形のアプリを作ってHelloWorldした</li>
            <li>ボチボチ乗せ換えていきますー</li>
            <li>乗せ換えたら、とりあえずheaderとfooter作ろうかなー</li>
        </ul>
        <div class="mt-4 mb-4">
            <hr>
        </div>
        <p>20230318：</p>
        <ul class="history-ul">
            <li>とりあえずページを作って、リンクをつないだ</li>
            <li>写真も載せたよー</li>
            <li>面白く作業してしまった。</li>
            <li>TODO：写真をリサイズしてメタデータ落としてから再アップしよう…。</li>
            <li>TODO：インターネット黎明期のサイトのようなので、少しカッコよくしたいな…。</li>
            <li>TODO：ギャラリーイカタコ写真の配置を…。</li>
        </ul>
        <div class="mt-4 mb-4 ">
            <hr>
        </div>
        <p>20230312：</p>
        <ul class="history-ul">
            <li>ここ（XSERVER）にHelloWorldしたー</li>
        </ul>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'HistoryComponent',
})
</script>

<style scoped>
.history-ul {
    @apply list-disc list-inside mb-4;
}
</style>