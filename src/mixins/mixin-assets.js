const MixinAssets = {
  methods: {
    mxStaticImg(src, folder = "static") {
      return require(`@/assets/${folder}/${src}`);
    },

    mxProjectImg(src) {
      return require(`@/assets/static/projects/${src}`);
    },
  },
};

export { MixinAssets };
