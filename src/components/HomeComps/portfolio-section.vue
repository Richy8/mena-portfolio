<template>
  <div class="portfolio-section" id="projects">
    <div class="container">
      <!-- META TEXT -->
      <div class="page-meta-text">RECENT PROJECTS</div>

      <div
        class="title-top-row"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1800"
      >
        <!-- TITLE TEXT -->
        <div class="page-title-text brand-light-grey mgb-0">
          From Vision to Reality:
          <span class="brand-yellow">Showcasing My Projects</span>
        </div>

        <!-- QUOTE TEXT -->
        <div class="quote-text">
          Embark on a journey where vision becomes reality. <br />
          A display of well crafted projects, reflecting dedication and
          creativity fused into a tangible masterpiece.
        </div>
      </div>

      <div class="row w-100 mx-auto">
        <div
          class="col-12 col-md-4 project-wrapper smooth-animation"
          data-aos="fade-up"
          :data-aos-delay="(200 * (index + 1)).toString()"
          data-aos-duration="1600"
          v-for="(project, index) in projectsList"
          :key="index"
        >
          <portfolio-card
            :image="project.images[0]"
            :title="project.title"
            :link="project.link"
            :slug="project.slug"
            :stacks="project.technologies"
            :description="project.description"
          />
        </div>

        <!-- <div class="col-12">
          <button
            class="btn btn-secondary ml-0 mx-md-auto"
            @click="toggleProjects"
          >
            View {{ show_more ? "less" : "all" }} Projects
          </button>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent, ref, computed } from "vue";
import projects from "@/assets/projects";

const portfolioCard = defineAsyncComponent(() =>
  import("@/components/HomeComps/portfolio-card")
);

const show_more = ref(true);

const projectsList = computed(() => {
  return show_more.value ? [...projects] : [...projects.slice(0, 3)];
});

// const toggleProjects = () => {
//   show_more.value = !show_more.value;
// };
</script>

<style lang="scss" scoped>
.portfolio-section {
  background: darken($brand-light-black, 9.5%);
  padding: toRem(100) 0 toRem(50);

  @include breakpoint-down(lg) {
    padding: toRem(60) 0 toRem(40);
  }

  @include breakpoint-down(md) {
    padding: toRem(90) 0 toRem(20);
  }

  @include breakpoint-down(sm) {
    padding: toRem(50) 0 toRem(20);
  }

  @include breakpoint-down(xs) {
    padding: toRem(75) 0 toRem(15);
  }

  .container {
    @include flex-column("flex-start", "flex-start");

    .title-top-row {
      @include flex-row-wrap("space-between", "center");
      margin-bottom: toRem(100);

      @include breakpoint-down(sm) {
        margin-bottom: toRem(80);
      }

      .page-title-text {
        width: 52%;

        @include breakpoint-down(md) {
          width: 100%;
        }
      }

      .quote-text {
        border-right: toRem(3) solid $brand-yellow;
        @include font-height(18, 31);
        padding-right: toRem(15);
        text-align: right;
        color: #d6d6d6;
        width: 40%;

        @include breakpoint-down(xl) {
          @include font-height(19, 28);
        }

        @include breakpoint-down(md) {
          display: none;
        }
      }
    }

    .col-12 {
      @include breakpoint-down(sm) {
        padding: 0;
      }
    }
  }
}
</style>
