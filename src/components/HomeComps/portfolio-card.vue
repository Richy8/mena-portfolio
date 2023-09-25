<template>
  <div class="portfolio-card row">
    <!-- PROJECT IMAGE -->
    <div class="col-12 col-md-6 col-lg-7">
      <Tilt>
        <div class="project-image">
          <img :src="mxProjectImg(image)" alt="Image" class="w-100 h-auto" />
        </div>
      </Tilt>
    </div>

    <!-- PROJECT DESCRIPTION -->
    <div class="col-12 col-md-6 col-lg-5">
      <div class="project-description">
        <router-link
          :to="{ name: 'ProjectDetail', params: { slug } }"
          class="title-text brand-light-grey"
        >
          {{ title }}
        </router-link>

        <div class="stack-row" v-if="stacks.length">
          <div class="item-pill" v-for="(stack, index) in stacks" :key="index">
            {{ stack }}
          </div>
        </div>

        <div class="description-text brand-faded-grey">
          {{ description }}
        </div>

        <router-link to="" class="expand btn-grey">Read More</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import Tilt from "vanilla-tilt-vue";

defineProps({
  image: {
    type: String,
  },
  title: {
    type: String,
  },
  slug: {
    type: String,
  },
  stacks: {
    type: Array,
    default: () => [],
  },
  description: {
    type: String,
  },
});
</script>

<style lang="scss" scoped>
.portfolio-card {
  @include flex-row-wrap("space-between", "center");
  font-family: "Eaves-SemiBold";
  margin-bottom: toRem(100);

  &:last-of-type {
    margin-bottom: toRem(80);
  }

  .project-image {
    border-radius: toRem(18);
    overflow: hidden;
    width: 95%;

    @include breakpoint-down(md) {
      border-radius: toRem(10);
      margin-bottom: toRem(40);
      width: 100%;
    }
  }

  .project-description {
    .title-text {
      display: inline-block;
      @include font-height(38, 44);
      font-family: "Eaves-Bold";
      margin-bottom: toRem(15);
      @include transition(0.3s);

      @include breakpoint-down(xl) {
        @include font-height(38, 42);
      }

      @include breakpoint-down(lg) {
        @include font-height(34, 40);
      }

      @include breakpoint-down(sm) {
        @include font-height(27, 35);
      }

      @include breakpoint-down(xs) {
        @include font-height(22, 30);
      }

      &:hover {
        text-decoration: underline;
      }
    }

    .description-text {
      @include font-height(19, 28);
      margin-bottom: toRem(18);

      @include breakpoint-down(sm) {
        @include font-height(18, 28);
      }

      @include breakpoint-down(xs) {
        @include font-height(17.45, 27);
      }
    }

    .expand {
      padding: toRem(11) toRem(38) !important;
      display: inline-block;
      font-size: toRem(15);
    }
  }
}
</style>
