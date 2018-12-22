//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const IgnorePlugin = require('webpack').IgnorePlugin;

module.exports = {
  baseUrl: './',
  configureWebpack: {
    plugins: [
      //new BundleAnalyzerPlugin(),
      new IgnorePlugin(/^\.\/locale$/, /moment$/)
    ]
  }
};