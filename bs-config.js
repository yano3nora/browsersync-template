// bs-config.js
module.exports = {
  // watch 設定 ↓ server 配下を見る
  watch: true,

  // web サーバ設定
  server: {
    baseDir: '.',
    index: 'index.html',
  },

  // 監視ファイルを指定
  files: [
    '**/*.html',
    'src/**/*.css',
    'src/**/*.js',
  ],
};
