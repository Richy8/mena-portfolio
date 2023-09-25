<template>
  <router-link
    to="/"
    class="brand-logo-section"
    :class="[{ miniature: minimize }, { 'index-9': has_index }]"
  >
    <div class="icon icon-mena brand-yellow"></div>
    <div class="brand-name font-weight-700 brand-light-grey">MENA</div>

    <!-- SPLIT LINE -->
    <div class="split-line brand-faded-grey-bg"></div>

    <div class="type-text brand-faded-grey f-size-16">Portfolio</div>
  </router-link>
</template>

<script>
export default {
  name: "BrandLogo",

  props: {
    minimize: {
      type: Boolean,
      default: false,
    },

    has_index: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.brand-logo-section {
  @include flex-row-nowrap("flex-start", "center");
  position: relative;

  .icon {
    margin-right: toRem(12);
    font-size: toRem(46);

    @include breakpoint-down(lg) {
      font-size: toRem(44);
    }

    @include breakpoint-down(xs) {
      margin-right: toRem(8);
      font-size: toRem(40);
    }

    @include breakpoint-custom-down(360) {
      font-size: toRem(45);
    }
  }

  .brand-name {
    font-size: toRem(27.5);

    @include breakpoint-down(lg) {
      font-size: toRem(27);
    }

    @include breakpoint-down(xs) {
      font-size: toRem(25);
    }

    @include breakpoint-custom-down(390) {
      font-size: toRem(23.5);
    }

    @include breakpoint-custom-down(360) {
      display: none;
    }
  }

  .split-line {
    margin: auto toRem(8);
    width: toRem(0.5);
    height: toRem(24);

    @include breakpoint-down(sm) {
      display: none;
    }
  }

  .type-text {
    @include breakpoint-down(sm) {
      display: none;
    }
  }
}

.miniature {
  @include breakpoint-custom-down(400) {
    .icon {
      font-size: toRem(32);
    }

    .brand-name {
      font-size: toRem(25);
    }

    .split-line,
    .type-text {
      display: none;
    }
  }
}
</style>
