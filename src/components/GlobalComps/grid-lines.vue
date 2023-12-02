<template>
  <div class="grid-container position-absolute top-0 container">
    <div
      class="grid-line"
      :class="[0, 5].includes(index) && 'grid-line-light'"
      v-for="(_, index) in 6"
      :key="index"
    ></div>
  </div>
</template>

<script>
export default {
  name: "gridLines",
};
</script>

<style lang="scss" scoped>
.grid-container {
  margin-left: toRem(-10);
  @include flex-row-nowrap("space-between", "center");

  .grid-line {
    height: 100vh;
    border: toRem(1) solid rgba($brand-sharp-dark, 0.45);

    &-light {
      border: toRem(1) solid rgba($brand-sharp-dark, 0.25);
    }
  }
}
</style>
