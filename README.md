# BrowserSync Template
> https://browsersync.io/

- Node.js 製の開発用 Web サーバツール
- watch 機能でファイル変更検知 → リロードとかできる
- External URL 機能で、同一 network から Web サーバアクセス可能
    - スマートフォンで動作確認とかローカルでできる

予め [Node.js](https://nodejs.org/ja/download/) をインストールしておくこと。

```sh
# 開発サーバ起動
#
# Local: http://localhost:3000 で local マシンからアクセス可能
# External: http://xxxxxx:3000 で同一ネットワークからアクセス可能
#
$ npm run server
```
