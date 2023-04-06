<template>
    <h2>履歴（Homeが作れて来たら移動する）：</h2>
    <p>20230325：</p>
    <ul>
        <li>Nodeのバージョンを上げてDockerFileを再作成（18-alpine3.17）</li>
        <li>Gitにリポジトリ作って（非公開→そのうち公開）、SSH接続設定をした</li>
        <li>権限周りがヤヤコシイのでWSLを隔離し、WSLのubuntuをroot起動するようにした</li>
        <li>vue.js3でひな形のアプリを作ってHelloWorldした</li>
        <li>ボチボチ乗せ換えていきますー</li>
        <li>乗せ換えたら、とりあえずheaderとfooter作ろうかなー</li>
    </ul>
    <p>20230318：</p>
    <ul>
        <li>とりあえずページを作って、リンクをつないだ</li>
        <li>写真も載せたよー</li>
        <li>面白く作業してしまった。</li>
        <li>TODO：写真をリサイズしてメタデータ落としてから再アップしよう…。</li>
        <li>TODO：インターネット黎明期のサイトのようなので、少しカッコよくしたいな…。</li>
        <li>TODO：ギャラリーイカタコ写真の配置を…。</li>
    </ul>
    <p>20230312：ここにHelloWorldしたー</p>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'HistoryComponent',
})
</script>