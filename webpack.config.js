const webpack = require('webpack');
const path = require('path');
const version = require("./package.json").version;
const banner =
  "/**\n" +
  " * vue-markdown-v3 v" + version + "\n" +
  " * https://github.com/princeahugah/vue-markdown-v3\n" +
  " * MIT License\n" +
  " */\n";

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production': 'development',
  entry: './src/build.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'vue-markdown-v3.js',
    library: 'VueMarkdownV3',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.BannerPlugin(banner, { raw: true })
  ],
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }, {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }]
  },
}
