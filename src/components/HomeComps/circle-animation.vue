<template>
  <div class="circle-animation w-100 h-100 position-absolute container">
    <div class="inner-area w-100 position-relative" id="outer-container">
      <!-- CIRCLE -->
      <div class="circle circle-one" id="circle-one"></div>
      <div class="circle circle-two" id="circle-two"></div>
    </div>
  </div>
</template>

<script>
import { MixinAnimation } from "@/mixins/mixin-animation";

export default {
  name: "circleAnimation",

  mixins: [MixinAnimation],

  data() {
    return {};
  },
};
</script>

<style lang="scss">
.circle-animation {
  @include flex-column("center", "center");
  top: 0;

  .inner-area {
    position: relative;
    height: 100%;

    .circle {
      position: absolute;
      box-shadow: 0 0 15px rgba(255, 255, 255, 0.4),
        0 0 30px rgba(255, 255, 255, 0.3), 0 0 15px rgba(255, 255, 255, 0.3);

      &-one {
        border: toRem(10) solid rgba($brand-blue, 0.7);
        @include square-shape(40);
        border-radius: toRem(15);
      }

      &-two {
        border: toRem(10) solid rgba($brand-yellow, 0.7);
        @include square-shape(40);
        border-radius: toRem(15);
      }
    }
  }
}
</style>
