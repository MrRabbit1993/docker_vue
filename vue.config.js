module.exports = {
  css: {
    requireModuleExtension: true,
    loaderOptions: {
      css: {
        // modules: {
        //   localIdentName: 'hello-[name]-[hash]'
        // },
        // localsConvention: 'asIs'
      }
    }
  },
  devServer: {
    https: false,
    proxy: {
      '/api': {
        target: `https://api.github.com`,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}
