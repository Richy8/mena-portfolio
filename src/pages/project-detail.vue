<template>
  <div class="project-detail">
    <div class="container top-section">
      <!-- TITLE TEXT -->
      <div class="page-title-text text-center brand-light-grey">
        {{ project_data.title }}
      </div>

      <!-- STACK ROW -->
      <div class="stack-row" v-if="project_data.technologies?.length">
        <div
          class="item-pill rounded-20"
          v-for="(stack, index) in project_data.technologies"
          :key="index"
        >
          {{ stack }}
        </div>
      </div>
    </div>

    <div class="container">
      <!-- PROJECT IMAGE SLIDE -->
      <div class="row">
        <div class="col-12 col-md-9 col-xl-7 mx-auto">
          <image-slider :images="project_data.images" />
        </div>
      </div>

      <!-- PROJECT DETAILS -->
      <div class="row project-details">
        <div class="col-12 col-md-9 col-xl-8 mx-auto">
          <div class="section-wrapper">
            <div class="section-title">Project Description</div>
            <div class="section-data">{{ project_data.description }}</div>
          </div>

          <div
            class="section-wrapper"
            v-for="(summary, index) in project_data.summary"
            :key="index"
          >
            <div class="section-title sub-title">{{ summary.title }}</div>
            <div class="section-data">
              <p v-for="(data, index) in summary.paragraphs" :key="index">
                {{ data }}
              </p>
            </div>

            <ul class="section-data data-list">
              <li v-for="(data, index) in summary.dataset" :key="index">
                {{ data }}
              </li>
            </ul>
          </div>
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
    padding: toRem(260) 0 toRem(80);

    @include breakpoint-down(xl) {
      padding: toRem(240) 0 toRem(80);
    }

    @include breakpoint-down(lg) {
      padding: toRem(220) 0 toRem(60);
    }

    @include breakpoint-down(md) {
      padding: toRem(210) 0 toRem(80);
    }

    @include breakpoint-down(sm) {
      padding: toRem(190) 0 toRem(60);
    }

    @include breakpoint-down(xs) {
      padding: toRem(180) 0 toRem(45);
    }

    .page-title-text {
      @include font-height(50, 62);
      font-family: "Eaves-Bold";
      width: 68%;

      @include breakpoint-down(xl) {
        @include font-height(42, 54);
        width: 74%;
      }

      @include breakpoint-down(lg) {
        @include font-height(38, 48);
        width: 90%;
      }

      @include breakpoint-down(md) {
        @include font-height(32, 44);
      }

      @include breakpoint-down(sm) {
        @include font-height(27, 38);
        margin-bottom: toRem(40);
      }

      @include breakpoint-down(xs) {
        @include font-height(25, 36);
      }
    }

    .stack-row {
      @include flex-row-wrap("center", "center");
      padding: 0 toRem(12);
      gap: toRem(12);

      row-gap: toRem(16);

      .item-pill {
        @include font-height(18, 18);
        padding: toRem(6.5) toRem(14);

        @include breakpoint-down(lg) {
          padding: toRem(7) toRem(14.5);
          @include font-height(16, 16);
        }

        @include breakpoint-down(xs) {
          padding: toRem(7) toRem(14.5);
          @include font-height(15, 15);
        }
      }
    }
  }

  .project-details {
    margin-top: toRem(120);

    @include breakpoint-down(md) {
      margin-top: toRem(80);
    }

    .section-wrapper {
      margin-bottom: toRem(60);

      &:last-of-type {
        margin-bottom: toRem(-30);
      }

      .section-title {
        @include font-height(34, 36);
        font-family: "Eaves-Bold";
        margin-bottom: toRem(16);
        color: $brand-white;

        @include breakpoint-down(xl) {
          @include font-height(28, 34);
        }

        @include breakpoint-down(md) {
          @include font-height(24, 30);
        }

        @include breakpoint-down(xs) {
          @include font-height(20, 28);
        }
      }

      .sub-title {
        @include font-height(28, 34);

        @include breakpoint-down(xl) {
          @include font-height(26, 34);
        }

        @include breakpoint-down(md) {
          @include font-height(24, 30);
        }

        @include breakpoint-down(xs) {
          @include font-height(20, 28);
        }
      }

      .section-data {
        @include font-height(19.5, 30);
        font-family: "Eaves-Regular";
        color: $brand-off-grey;

        @include breakpoint-down(md) {
          @include font-height(18, 28);
        }

        @include breakpoint-down(xs) {
          @include font-height(17.5, 28);
        }
      }

      .data-list {
        @include breakpoint-down(xs) {
          padding-left: toRem(12);
        }

        li {
          margin-bottom: toRem(10);

          &:last-of-type {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
</style>
