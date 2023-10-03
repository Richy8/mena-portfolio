const MixinAssets = {
  methods: {
    mxStaticImg(src, folder = "static") {
      return require(`@/assets/${folder}/${src}`);
    },

    mxProjectImg(src) {
      return require(`@/assets/static/projects/${src}`);
    },

    mxStackImg(src) {
      return require(`@/assets/static/stacks/${src}`);
    },
  },
};

export { MixinAssets };
