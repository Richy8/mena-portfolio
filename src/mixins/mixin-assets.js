const MixinAssets = {
  methods: {
    mxStaticImg(src) {
      return require(`@/assets/static/${src}`);
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
