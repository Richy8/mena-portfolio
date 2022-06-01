<template>
  <div class="header-contact container mgl-3 w-100 px-0">
    <div class="contact">
      <div class="title">EMAIL</div>
      <div class="value">menaelvisjones@gmail.com</div>
    </div>

    <div class="contact">
      <div class="title">PHONE</div>
      <div class="value">+234-81-311-777-03</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "headerContact",
};
</script>

<style lang="scss" scoped>
.header-contact {
  position: absolute;
  bottom: toRem(30);
  @include flex-row-start-nowrap;

  .contact {
    border-left: toRem(3) solid $brand-yellow;
    padding: toRem(3) 0 toRem(5) toRem(18);
    width: 19.75%;

    &:last-of-type {
      margin-right: 0;
    }

    .title {
      @include font-height(11.5, 18);
      margin-bottom: toRem(3.5);
      color: $brand-light-grey;
      font-weight: 700;
    }

    .value {
      @include font-height(13.5, 18);
      color: rgba($brand-off-grey, 0.8);
    }
  }
}
</style>