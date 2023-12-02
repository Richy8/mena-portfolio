<template>
  <div class="header-bg-text position-absolute w-100 h-auto container">
    <div data-aos="fade-right" data-aos-delay="100" data-aos-duration="1500">
      <!-- LINE ONE -->
      <h1 class="line line-one select-none">DEVE</h1>

      <!-- LINE TWO -->
      <h1 class="line line-two select-none">LOPER</h1>
    </div>
  </div>
</template>


<script>
export default {
  name: "headerBgText",
};
</script>

<style lang="scss" scoped>
.header-bg-text {
  @include center-placement;
  width: max-content;
  padding-left: 14.5%;
  color: rgba($brand-light-black, 0.5);

  @include breakpoint-down(lg) {
    padding-left: 14%;
  }

  @include breakpoint-custom-down(940) {
    padding-left: 8%;
  }

  @include breakpoint-down(md) {
    display: none;
  }

  .line {
    position: relative;
    font-size: toRem(268);
    width: max-content;
    font-weight: 900;
    letter-spacing: 0.04em;

    @include breakpoint-down(lg) {
      font-size: toRem(245);
    }

    @include breakpoint-custom-down(940) {
      font-size: toRem(235);
    }

    @include breakpoint-custom-down(860) {
      font-size: toRem(225);
    }
  }

  .line-one {
    top: toRem(30);
  }

  .line-two {
    top: toRem(-25);
  }
}
</style>
