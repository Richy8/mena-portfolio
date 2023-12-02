<template>
  <div class="project-page">
    <div class="project-hero">
      <div class="container">
        <!-- META TEXT -->
        <div class="page-meta-text brand-faded-grey">RECENT PROJECTS</div>

        <!-- TITLE TEXT -->
        <div class="page-title-text text-center brand-light-grey">
          From Vision to Reality:
          <span class="brand-yellow">Showcasing My Projects</span>
        </div>

        <!-- HELPER TEXT -->
        <div class="helper-text text-center mgb-0">
          Embark on a journey where visions become reality. Explore a showcase
          of my recent crafted projects, reflecting dedication and creativity
          fused into tangible masterpieces.
        </div>
      </div>
    </div>

    <div class="container projects-wrapper">
      <div class="row w-100 mx-auto">
        <div class="col-12" v-for="(project, index) in projects" :key="index">
          <portfolio-card
            :image="project.images[0]"
            :title="project.title"
            :slug="project.slug"
            :stacks="project.technologies"
            :description="project.description"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
import projects from "@/assets/projects";

const portfolioCard = defineAsyncComponent(() =>
  import("@/components/HomeComps/portfolio-card")
);
</script>

<style lang="scss" scoped>
.project-page {
  .project-hero {
    @include flex-column("center", "center");
    padding: toRem(230) 0 toRem(150);
    font-family: "Eaves-SemiBold";

    @include breakpoint-down(md) {
      padding: toRem(200) 0 toRem(140);
    }

    @include breakpoint-down(xs) {
      padding: toRem(180) 0 toRem(100);
    }

    .container {
      @include flex-column("flex-start", "center");
      margin: auto;

      .page-title-text {
        @include font-height(60, 70);
        margin-bottom: toRem(30);
        width: 60%;

        @include breakpoint-down(lg) {
          @include font-height(54, 64);
          width: 85%;
        }

        @include breakpoint-down(md) {
          @include font-height(44, 54);
          width: 100%;
        }

        @include breakpoint-down(sm) {
          @include font-height(38, 50);
        }

        @include breakpoint-down(xs) {
          @include font-height(36, 44);
        }

        @include breakpoint-custom-down(410) {
          @include font-height(32, 44);
        }
      }

      .helper-text {
        @include font-height(22, 30);
        width: 48.75%;

        @include breakpoint-down(xl) {
          width: 56%;
        }

        @include breakpoint-down(lg) {
          @include font-height(20, 29);
          width: 65%;
        }

        @include breakpoint-down(md) {
          @include font-height(19, 28);
          width: 90%;
        }

        @include breakpoint-down(sm) {
          @include font-height(18.25, 27);
          width: 100%;
        }

        @include breakpoint-down(xs) {
          @include font-height(17.45, 27);
        }
      }
    }
  }

  .projects-wrapper {
    @include breakpoint-down(sm) {
      margin-bottom: toRem(-100);
    }
  }
}
</style>
