<template>
  <div class="work-data">
    <div class="work-duration">{{ duration }}</div>
    <div class="work-title">{{ company }}</div>
    <div class="work-role">{{ role }}</div>
  </div>
</template>

<script setup>
defineProps({
  duration: {
    type: String,
  },
  company: {
    type: String,
  },
  role: {
    type: String,
  },
});
</script>

<style lang="scss" scoped>
.work-data {
  margin-bottom: toRem(50);
  padding-left: toRem(50);
  position: relative;

  @include breakpoint-down(md) {
    padding-left: toRem(35);
  }

  @include breakpoint-down(sm) {
    padding-left: toRem(25);
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  &::before {
    content: "";
    position: absolute;
    @include square-shape(16);
    background: $brand-yellow;
    border-radius: 50%;
    left: toRem(-8);
    top: toRem(33);

    @include breakpoint-down(md) {
      @include square-shape(14);
    }
  }

  &::after {
    content: "";
    position: absolute;
    @include square-shape(24);
    border: toRem(1) solid $brand-yellow;
    border-radius: 50%;
    left: toRem(-12);
    top: toRem(29);

    @include breakpoint-down(md) {
      @include square-shape(22);
    }
  }

  .work-duration {
    @include font-height(14, 24);
    margin-bottom: toRem(2);
    color: $brand-yellow;

    @include breakpoint-down(xl) {
      @include font-height(12, 22);
    }

    @include breakpoint-down(md) {
      @include font-height(11, 22);
    }
  }

  .work-title {
    color: $brand-off-grey;
    font-family: "Eaves-Heavy";
    @include font-height(40, 38);

    @include breakpoint-down(xl) {
      @include font-height(36, 38);
    }

    @include breakpoint-down(lg) {
      @include font-height(32, 34);
    }

    @include breakpoint-down(md) {
      @include font-height(28, 32);
    }

    @include breakpoint-down(sm) {
      @include font-height(25, 30);
    }

    @include breakpoint-down(xs) {
      @include font-height(22, 26);
      margin-bottom: toRem(5);
    }
  }

  .work-role {
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: toRem(0.6);
    @include font-height(40, 38);
    font-family: "Eaves-Heavy";
    color: $brand-faded-grey;
    letter-spacing: 0.018em;

    @include breakpoint-down(xl) {
      @include font-height(36, 38);
    }

    @include breakpoint-down(lg) {
      @include font-height(32, 34);
    }

    @include breakpoint-down(md) {
      @include font-height(28, 32);
    }

    @include breakpoint-down(sm) {
      @include font-height(25, 30);
    }

    @include breakpoint-down(xs) {
      @include font-height(22, 26);
    }
  }
}
</style>
