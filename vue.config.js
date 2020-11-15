module.exports = {
    devServer: {
      open: true
    },
    css: {
      loaderOptions: {
        sass: {
          prependData: `@import "@/assets/scss/_variable.scss";`
        }
      }
    }
  };
  