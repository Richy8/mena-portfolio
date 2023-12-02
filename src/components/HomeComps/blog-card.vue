<template>
  <Tilt>
    <div
      class="blog-card rounded-10 brand-light-grey navigation-shadow-effect w-100"
    >
      <div class="post-image rounded-7 mgb-18 w-100">
        <img :src="image" alt="" />
      </div>

      <div class="post-content w-100">
        <div class="post-title brand-light-grey eaves-bold mgb-8">
          {{ title }}
        </div>

        <div class="post-extract brand-faded-grey mgb-6">
          {{ extract }}
        </div>

        <div class="post-meta brand-off-grey">
          by <span class="brand-yellow">{{ author }}</span> - {{ date }}
        </div>
      </div>
    </div>
  </Tilt>
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
  extract: {
    type: String,
  },
  author: {
    type: String,
    default: "Efemena Elvis",
  },
  date: {
    type: String,
    default: "April 8, 2021",
  },
});
</script>

<style lang="scss" scoped>
.blog-card {
  @include flex-column("flex-start", "flex-start");
  background: darken($brand-light-black, 6%);
  margin-bottom: toRem(40);
  padding: toRem(18);

  .post-image {
    background: darken($brand-light-black, 11%);
    position: relative;
    height: toRem(260);
    overflow: hidden;

    img {
      @include background-cover;
    }
  }

  .post-title {
    @include font-height(22, 26);
  }

  .post-extract {
    @include font-height(15.25, 24);
  }

  .post-meta {
    @include font-height(14.25, 19);
  }
}
</style>
