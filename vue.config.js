module.exports = {
    devServer: {
        open: true,
        host: 'localhost',
        port: 8000,
        https: false,
        proxy: {
            '/': {
                target: 'http://localhost:8001',
                changOrigin: true, //允许跨域
                pathRewrite: {
                    '^/': ''
                }
            }
        }
    },
    css: {
      loaderOptions: {
        sass: {
          prependData: `@import "@/assets/scss/_variable.scss";`
        }
      }
    }
}
  