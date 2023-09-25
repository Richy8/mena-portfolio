<template>
  <Tilt>
    <div class="testimonial-card rounded-10 navigation-shadow-effect">
      <!-- TOP AREA -->
      <div class="top-area mgb-18">
        <div class="client-image rounded-circle">
          <img :src="image" alt="" />
        </div>

        <div>
          <div class="client-name brand-light-grey">{{ name }}</div>
          <div class="client-company brand-faded-grey">
            {{ description }}
          </div>
        </div>
      </div>

      <!-- BOTTOM AREA -->
      <div class="bottom-area brand-light-grey">
        {{ comment }}
      </div>
    </div>
  </Tilt>
</template>

<script setup>
import Tilt from "vanilla-tilt-vue";

defineProps({
  image: {
    type: String,
    default: "cli-terminal.gif",
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  comment: {
    type: String,
  },
});
</script>

<style lang="scss" scoped>
.testimonial-card {
  background: darken($brand-light-black, 3.75%);
  padding: toRem(16);

  .top-area {
    @include flex-row-nowrap("flex-start", "center");

    .client-image {
      @include square-shape(45);
      margin-right: toRem(8);
      position: relative;
      overflow: hidden;

      img {
        @include background-cover;
      }
    }

    .client-name {
      font-family: "Eaves-Bold";
      @include font-height(18, 24);
    }

    .client-company {
      font-family: "Eaves-SemiBold";
      @include font-height(15, 19);

      @include breakpoint-down(sm) {
        @include font-height(15.25, 22);
      }
    }
  }

  .bottom-area {
    @include font-height(17.25, 26);
    font-family: "Eaves-SemiBold";
  }
}
</style>
