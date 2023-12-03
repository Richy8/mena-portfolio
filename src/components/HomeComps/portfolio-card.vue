<template>
  <div class="portfolio-card row">
    <!-- PROJECT IMAGE -->
    <div class="col-12">
      <div class="project-image">
        <img
          :src="mxProjectImg(image)"
          alt="Image"
          class="w-100 h-100"
          loading="lazy"
        />

        <!-- IMAGE OVERLAY -->
        <div class="img-overlay w-100 h-100"></div>

        <!-- VIEW BUTTON -->
        <a :href="link" target="_blank" class="view-btn btn btn-grey"
          >View Project</a
        >
      </div>
    </div>

    <!-- PROJECT DESCRIPTION -->
    <div class="col-12">
      <div class="project-description">
        <router-link
          :to="{ name: 'ProjectDetail', params: { slug } }"
          class="title-text brand-light-grey"
        >
          {{ title }}
        </router-link>

        <!-- <div class="stack-row" v-if="stacks.length">
          <div class="item-pill" v-for="(stack, index) in stacks" :key="index">
            {{ stack }}
          </div>
        </div> -->

        <div class="description-text brand-faded-grey">
          {{ description.slice(0, 92) }}...
        </div>

        <router-link
          :to="{ name: 'ProjectDetail', params: { slug } }"
          class="expand btn-grey"
          >View Project Overview</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: {
    type: String,
  },
  title: {
    type: String,
  },
  link: {
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
  @include transition(0.4s);
  position: relative;

  &:last-of-type {
    margin-bottom: toRem(80);
  }

  .project-image {
    margin-bottom: toRem(20);
    border-radius: toRem(4);
    position: relative;
    overflow: hidden;

    .img-overlay {
      @include center-placement;
      transition: all 0.3s ease-in-out;
    }

    .view-btn {
      padding: toRem(12) toRem(26) !important;
      background: $brand-dark-grey;
      font-family: "Eaves-Heavy";
      @include center-placement;
      font-size: toRem(14);
      color: $brand-white;
      display: none;
      z-index: 1;
      transition: all 0.4s ease-in-out;
    }

    &:hover {
      .img-overlay {
        background: rgba(#000, 0.5);
      }

      .view-btn {
        display: unset;
      }
    }
  }

  .project-description {
    .title-text {
      display: inline-block;
      @include font-height(21.75, 27);
      font-family: "Eaves-Bold";
      margin-bottom: toRem(10);
      @include transition(0.3s);

      @include breakpoint-down(xs) {
        @include font-height(19.45, 26);
      }

      &:hover {
        text-decoration: underline;
      }
    }

    .description-text {
      @include font-height(17.75, 25);
      margin-bottom: toRem(22);

      @include breakpoint-down(xs) {
        @include font-height(17, 23);
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
