const { defineConfig } = require('@vue/cli-service')
const { VantResolver } = require('unplugin-vue-components/resolvers');
const packageJson = require('./package.json')
const ComponentsPlugin = require('unplugin-vue-components/webpack');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
    output: { // 输出重构 打包编译后的 文件名称 【模块名称.版本号.时间戳】
      // process.env.packageJson.version
      filename: `static/js/[name].${packageJson.version}.js`,
      chunkFilename: `static/js/[name].${packageJson.version}.js`
    }
  },
  pages: {
    index: {
      // entry for the pages
      entry: 'src/main.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'index.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Smart Cooker',
      // chunks to include on this pages, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
      meta: {revised: `版本号, ${packageJson.version}`}
    },
  }
})
