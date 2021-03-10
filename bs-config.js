// bs-config.js
module.exports = {
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
