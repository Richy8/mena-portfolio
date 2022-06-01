<template>
  <div class="header-bg-text position-absolute w-100 h-auto container">
    <!-- LINE ONE -->
    <div class="line line-one select-none">DEVE</div>

    <!-- LINE TWO -->
    <div class="line line-two select-none">LOPER</div>
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
  padding-left: 18.5%;
  color: rgba($brand-light-black, 0.195);

  .line {
    position: relative;
    font-size: toRem(260);
    width: max-content;
    font-weight: 900;
  }

  .line-one {
    top: toRem(45);
  }

  .line-two {
    top: toRem(-45);
  }
}
</style>