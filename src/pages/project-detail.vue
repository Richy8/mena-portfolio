<template>
  <div class="project-detail">
    <div class="container top-section">
      <!-- TITLE TEXT -->
      <div class="page-title-text text-center brand-light-grey">
        {{ projectData.title }}
      </div>

      <!-- STACK ROW -->
      <div class="stack-row" v-if="projectData.technologies?.length">
        <div
          class="item-pill rounded-20"
          v-for="(stack, index) in projectData.technologies"
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
          <image-slider :images="projectData.images" :key="routeSlug" />
        </div>
      </div>

      <!-- PROJECT DETAILS -->
      <div class="row project-details">
        <div class="col-12 col-md-9 col-xl-8 mx-auto">
          <div class="section-wrapper">
            <div class="section-title">Project Description</div>
            <div class="section-data">{{ projectData.description }}</div>
          </div>

          <div
            class="section-wrapper"
            v-for="(summary, index) in projectData.summary"
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

      <!-- PROJECT NAVIGATION -->
      <div class="row">
        <div class="col-12 col-md-9 col-xl-6 mx-auto project-navigation">
          <button
            class="btn btn-secondary"
            @click="goToPreviousProject"
            :disabled="disablePrevBtn"
          >
            <div class="icon-caret-left"></div>
            <div class="text">Prev Project</div>
          </button>

          <button
            class="btn btn-secondary"
            :disabled="disableNextBtn"
            @click="goToNextProject"
          >
            <div class="text">Next Project</div>
            <div class="icon-caret-right"></div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent, ref, onMounted, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import projects from "@/assets/projects";

const imageSlider = defineAsyncComponent(() =>
  import("@/components/GlobalComps/image-slider")
);

const route = useRoute();
const router = useRouter();

const routeSlug = ref("");
const projectData = ref({});
const currentProjectIndex = ref(0);

const disablePrevBtn = computed(() => projects[0].slug === routeSlug.value);
const disableNextBtn = computed(
  () => projects[projects.length - 1].slug === routeSlug.value
);

const loadProjectData = () => {
  routeSlug.value = route.params.slug;

  projectData.value = projects.find((data) => data.slug === routeSlug.value);

  currentProjectIndex.value = projects.findIndex(
    (data) => data.slug === routeSlug.value
  );
};

const goToNextProject = () => {
  const slug = projects[currentProjectIndex.value + 1].slug;
  router.push({ name: "ProjectDetail", params: { slug } });
};

const goToPreviousProject = () => {
  const slug = projects[currentProjectIndex.value - 1].slug;
  router.push({ name: "ProjectDetail", params: { slug } });
};

watch(
  () => route.params.slug,
  () => loadProjectData(),
  { immediate: true }
);

onMounted(() => loadProjectData());
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

  .project-navigation {
    @include flex-row-nowrap("center", "center");
    margin-top: toRem(100);
    gap: toRem(48);

    @include breakpoint-down(md) {
      gap: toRem(28);
    }

    @include breakpoint-down(sm) {
      gap: toRem(24);
    }

    .btn {
      @include flex-row-nowrap("center", "center");
      padding: toRem(15) toRem(30);
      gap: toRem(12);

      .text {
        position: relative;
        top: toRem(1.5);
      }
    }
  }
}
</style>
