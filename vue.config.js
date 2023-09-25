module.exports = {
  lintOnSave: false,
  productionSourceMap: false,

  css: {
    loaderOptions: {
      scss: {
        implementation: require("sass"),
        prependData: `@import "@/assets/scss/_colors.scss"; @import "@/assets/scss/_breakpoints.scss"; @import "@/assets/scss/_mixins.scss";`,
      },
    },
  },
};
