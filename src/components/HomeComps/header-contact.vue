<template>
  <div class="header-contact container mx-auto">
    <div class="contact">
      <div class="title"><span class="icon-email"></span> EMAIL</div>
      <div class="value">menaelvisjones@gmail.com</div>
    </div>

    <div class="contact phone">
      <div class="title"><span class="icon-phone"></span> PHONE</div>
      <div class="value">+234-813-11777-03</div>
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
  @include flex-row-nowrap("flex-start", "center");
  font-family: "Eaves-Semibold";
  position: absolute;
  @include center-x;
  bottom: toRem(20);

  @include breakpoint-down(xs) {
    @include flex-row-nowrap("space-between", "center");
  }

  .contact {
    border-left: toRem(3) solid $brand-yellow;
    padding: toRem(3) 0 toRem(5) toRem(18);
    width: 20%;

    @include breakpoint-down(xl) {
      width: 23%;
    }

    @include breakpoint-down(lg) {
      width: 30%;
    }

    @include breakpoint-custom-down(860) {
      width: 35%;
    }

    @include breakpoint-down(md) {
      width: 46%;
    }

    @include breakpoint-down(sm) {
      border-left: toRem(1.5) solid $brand-yellow;
      padding: toRem(3) 0 toRem(5) toRem(12);
      width: 50%;
    }

    @include breakpoint-custom-down(390) {
      padding: toRem(3) 0 toRem(5) toRem(8);
    }

    &:last-of-type {
      margin-right: 0;
    }

    .title {
      font-family: "Eaves-Bold";
      @include font-height(14.5, 18);
      margin-bottom: toRem(3.5);
      color: $brand-light-grey;

      @include breakpoint-custom-down(860) {
        @include font-height(14, 18);
      }

      @include breakpoint-custom-down(390) {
        @include font-height(13.5, 18);
      }

      span {
        position: relative;
        margin-right: toRem(4);
        font-size: toRem(14.5);
        top: toRem(2);

        @include breakpoint-custom-down(860) {
          font-size: toRem(14);
        }

        @include breakpoint-custom-down(390) {
          font-size: toRem(13.5);
        }
      }
    }

    .value {
      @include font-height(16.5, 18);
      color: rgba($brand-off-grey, 0.9);
      letter-spacing: 0.04em;

      @include breakpoint-custom-down(860) {
        @include font-height(15.75, 18);
      }

      @include breakpoint-custom-down(390) {
        @include font-height(15.25, 18);
      }
    }
  }

  .phone {
    @include breakpoint-down(xs) {
      border-left: unset;
      border-right: toRem(1.5) solid $brand-yellow;
      padding-right:toRem(12);

      .title, .value {
        text-align: right;
      }
    }

    @include breakpoint-custom-down(390) {
      padding-right:toRem(8);
    }
  }
}
</style>
