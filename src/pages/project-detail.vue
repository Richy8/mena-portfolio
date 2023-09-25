<template>
  <div class="project-detail">
    <div class="container top-section">
      <!-- TITLE TEXT -->
      <div class="page-title-text text-center brand-light-grey">
        {{ project_data.title }}
      </div>

      <!-- STACK ROW -->
      <div class="stack-row" v-if="project_data.technologies?.length">
        <div class="item-pill rounded-20" v-for="(stack, index) in project_data.technologies" :key="index">
          {{ stack }}
        </div>
      </div>
    </div>

    <!-- PROJECT IMAGE SLIDE -->
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-9 mx-auto">
          <image-slider :images="project_data.images" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent, ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import projects from "@/assets/projects";

const imageSlider = defineAsyncComponent(() =>
  import("@/components/GlobalComps/image-slider")
);

const project_data = ref({});
const route = useRoute();

onMounted(() => {
  const { slug } = route.params;
  project_data.value = projects.find((data) => data.slug === slug);
});
</script>

<style lang="scss" scoped>
.project-detail {
  .top-section {
    @include flex-column("center", "center");
    height: 60vh;

    .page-title-text {
      @include font-height(60, 70);
      font-family: "Eaves-Bold";
      margin-top: toRem(120);
      width: 75%;
    }

    .stack-row {
      gap: toRem(12);

    .item-pill {
      @include font-height(18, 18);
      padding: toRem(6.5) toRem(14);
    }
  }
  }
}
</style>
