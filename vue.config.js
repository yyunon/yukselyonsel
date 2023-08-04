const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: "/",
  transpileDependencies: true,
  runtimeCompiler: true,
  devServer: {
    proxy: 'http://localhost:9090/api',
    https: true,
  }
})
