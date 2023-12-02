<template>
  <div class="slider overflow-hidden w-100 h-auto rounded-12">
    <div
      class="slides"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div v-for="(slide, index) in slides" :key="index" class="slide">
        <img :src="mxProjectImg(slide)" alt="Slide" />
      </div>
    </div>

    <button @click="prevSlide" class="prev-btn">
      <div class="icon icon-caret-left"></div>
    </button>

    <button @click="nextSlide" class="next-btn">
      <div class="icon icon-caret-right"></div>
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  images: {
    type: Array,
  },
});

const slides = ref(props.images);
const currentIndex = ref(0);

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length;
};

const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + slides.value.length) % slides.value.length;
};
</script>

<style lang="scss" scoped>
.slider {
  border: toRem(6) solid $brand-light-grey;
  position: relative;

  @include breakpoint-down(sm) {
    border: toRem(3) solid $brand-light-grey;
  }

  .slides {
    display: flex;
    transition: transform 0.5s;
  }

  .slide {
    flex: 0 0 100%;
  }

  img {
    width: 100%;
    height: auto;
  }

  .prev-btn,
  .next-btn {
    @include flex-column("center", "center");
    background-color: $brand-light-black;
    color: $brand-white;
    padding: toRem(10);
    border-radius: 50%;
    @include center-y;
    cursor: pointer;

    @include breakpoint-down(sm) {
      font-size: toRem(12);
    }
  }

  .prev-btn {
    left: toRem(10);

    @include breakpoint-down(sm) {
      left: toRem(4);
    }
  }

  .next-btn {
    right: toRem(10);

    @include breakpoint-down(sm) {
      right: toRem(4);
    }
  }
}
</style>
