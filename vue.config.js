module.exports = {
  lintOnSave: false,
  productionSourceMap: false,

  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "./public/scss/_colors.scss"; @import "./public/scss/_breakpoints.scss"; @import "./public/scss/_mixins.scss";`,
      },
    },
  },
};
