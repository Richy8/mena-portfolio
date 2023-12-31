const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    headers: {
      "Cache-Control": "max-age=31536000, public",
    },
  },

  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/_colors.scss"; @import "@/assets/scss/_breakpoints.scss"; @import "@/assets/scss/_mixins.scss";`,
      },
    },
  },
});
