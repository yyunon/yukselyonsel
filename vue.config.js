const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: "/",
  transpileDependencies: true,
  runtimeCompiler: true,
  devServer: {
    proxy: 'http://35.208.253.242:80/api',
    https: true,
  }
})
