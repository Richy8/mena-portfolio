<template>
  <div class="portfolio-section">
    <div class="container">
      <!-- META TEXT -->
      <div class="page-meta-text">RECENT PROJECTS</div>

      <div class="title-top-row">
        <!-- TITLE TEXT -->
        <div class="page-title-text brand-light-grey mgb-0">
          From Vision to Reality:
          <span class="brand-yellow">Showcasing My Projects</span>
        </div>

        <!-- QUOTE TEXT -->
        <div class="quote-text brand-white">
          Embark on a journey where visions become reality. Explore a showcase
          of my recent crafted projects, reflecting dedication and creativity
          fused into tangible masterpieces.
        </div>
      </div>

      <div class="row w-100 mx-auto">
        <div
          class="col-12 project-wrapper"
          v-for="(project, index) in project_list"
          :key="index"
        >
          <portfolio-card
            :image="project.images[0]"
            :title="project.title"
            :slug="project.slug"
            :stacks="project.technologies"
            :description="project.description"
          />
        </div>

        <div class="col-12">
          <router-link to="/projects" class="btn btn-secondary ml-0 mx-md-auto"
            >View Projects</router-link
          >
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

const project_list = [...projects.slice(0, 2)];
</script>

<style lang="scss" scoped>
.portfolio-section {
  padding: toRem(100) 0 toRem(120);

  @include breakpoint-down(lg) {
    padding: toRem(60) 0 toRem(100);
  }

  @include breakpoint-down(sm) {
    padding: toRem(50) 0 toRem(80);
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
        width: 42%;

        @include breakpoint-down(xl) {
          @include font-height(19, 28);
        }

        @include breakpoint-down(md) {
          border-left: toRem(2) solid $brand-yellow;
          @include font-height(18, 30);
          padding-left: toRem(15);
          margin-top: toRem(40);
          border-right: unset;
          text-align: left;
          padding-right: 0;
          width: 100%;
        }

        @include breakpoint-down(xs) {
          border-left: toRem(1) solid $brand-yellow;
          @include font-height(16, 28.5);
          padding-left: toRem(10);
          margin-top: toRem(30);
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
