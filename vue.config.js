const { defineConfig } = require('@vue/cli-service')

const SitemapPlugin = require('sitemap-webpack-plugin').default
const paths = [
  {
    path: '/',
    lastmod: '2023-11-07',
    priority: 1.0,
    changefreq: 'yearly'
  },
  {
    path: '/home',
    lastmod: '2023-11-07',
    priority: 1.0,
    changefreq: 'yearly'
  },
  {
    path: '/projects',
    lastmod: '2023-11-07',
    priority: 0.9,
    changefreq: 'yearly'
  },
  {
    path: '/blog',
    lastmod: '2023-11-07',
    priority: 0.8,
    changefreq: 'yearly'
  },
  {
    path: '/blog/view',
    lastmod: '2023-11-07',
    priority: 1.0,
    changefreq: 'yearly'
  },
  {
    path: '/contact',
    lastmod: '2023-11-07',
    priority: 0.5,
    changefreq: 'yearly'
  },
]
module.exports = defineConfig({
  publicPath: "/",
  transpileDependencies: true,
  runtimeCompiler: true,
  configureWebpack: {
    plugins: [
      new SitemapPlugin({base: 'https://yukselyonsel.com', paths})
    ]
  }
})
