<template>
  <Tilt>
    <div class="service-card w-100 rounded-10">
      <div class="img-wrapper rounded-7">
        <div class="position-relative w-100 h-100">
          <img :src="mxStaticImg(icon)" alt="Image" />
        </div>
      </div>

      <div class="title-text brand-light-grey">{{ title }}</div>

      <div class="description-text brand-off-grey">
        {{ description }}
      </div>
    </div>
  </Tilt>
</template>

<script setup>
import Tilt from "vanilla-tilt-vue";

defineProps({
  icon: {
    type: String,
    default: "cli-terminal.gif",
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
});
</script>

<style lang="scss" scoped>
.service-card {
  @include flex-column("flex-start", "flex-start");
  border: toRem(1.25) solid rgba(255, 255, 255, 0.145);
  background: rgba(darken($brand-light-black, 2%), 0.35);
  box-shadow: 0 toRem(4) toRem(30) rgba(0, 0, 0, 0.1);
  padding: toRem(24) toRem(20);
  backdrop-filter: blur(5px);
  color: $brand-white;
  position: relative;
  height: auto;

  @include breakpoint-down(md) {
    margin-bottom: toRem(50);
  }

  .img-wrapper {
    position: absolute;
    left: toRem(20);
    top: toRem(22);
    padding: toRem(10);
    @include square-shape(100);
    background: rgba($brand-yellow, 0.075);

    @include breakpoint-down(lg) {
      @include square-shape(90);
    }

    img {
      @include center-placement;
      @include square-shape(80);

      @include breakpoint-down(lg) {
        @include square-shape(70);
      }
    }
  }

  .title-text {
    font-family: "Eaves-Heavy";
    @include font-height(26, 28);
    margin: toRem(130) 0 toRem(8);

    @include breakpoint-down(lg) {
      margin: toRem(120) 0 toRem(8);
      @include font-height(24, 26);
    }

    @include breakpoint-down(md) {
      @include font-height(24.75, 26);
    }

    @include breakpoint-down(sm) {
      @include font-height(24, 26);
    }

    @include breakpoint-down(xs) {
      @include font-height(22, 26);
    }
  }

  .description-text {
    font-family: "Eaves-semibold";
    @include font-height(19, 27);

    @include breakpoint-down(lg) {
      @include font-height(18.75, 24);
    }

    @include breakpoint-down(md) {
      @include font-height(20, 28);
    }

    @include breakpoint-down(sm) {
      @include font-height(19.25, 29);
    }

    @include breakpoint-down(sm) {
      @include font-height(18.45, 28);
    }

    @include breakpoint-down(xs) {
      @include font-height(17.45, 27);
    }
  }
}
</style>
