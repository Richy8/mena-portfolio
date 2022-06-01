const MixinAssets = {
  methods: {
    mxStaticImg(src, folder = "static") {
      return require(`@/assets/${folder}/${src}`);
    },
  },
};

export { MixinAssets };
