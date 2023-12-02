<template>
  <div class="about-page">
    <div class="about-hero">
      <div class="container">
        <!-- META TEXT -->
        <div class="page-meta-text brand-faded-grey">ABOUT ME</div>

        <!-- TITLE TEXT -->
        <div class="page-title-text brand-light-grey text-center">
          Welcome to my world. <br />
          <span class="brand-yellow">I'm Efemena Elvis</span>
        </div>

        <!-- HELPER TEXT -->
        <div class="helper-text text-center mgb-0">
          Crafting Transformative Experiences in Software Engineering, one line
          of code at a time.
        </div>
      </div>
    </div>

    <!-- PROFILE SECTION ONE -->
    <profile-section-one />

    <!-- PROFILE SECTION TWO -->
    <profile-section-two />

    <!-- EXPERIENCE SECTION -->
    <experience-section />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
import profileSectionOne from "@/components/AboutComps/profile-section-one";
import profileSectionTwo from "@/components/AboutComps/profile-section-two";

const experienceSection = defineAsyncComponent(() =>
  import("@/components/AboutComps/exerience-section")
);
</script>

<style lang="scss" scoped>
.about-page {
  .about-hero {
    @include flex-column("center", "center");
    padding: toRem(210) 0 toRem(140);
    font-family: "Eaves-SemiBold";

    @include breakpoint-down(md) {
      padding: toRem(200) 0 toRem(140);
    }

    @include breakpoint-down(xs) {
      padding: toRem(200) 0 toRem(100);
    }

    .container {
      @include flex-column("flex-start", "center");
      margin: auto;

      .page-title-text {
        @include font-height(62, 70);
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
        width: 42%;

        @include breakpoint-down(lg) {
          @include font-height(20, 29);
          width: 50%;
        }

        @include breakpoint-down(md) {
          @include font-height(19, 28);
          width: 55%;
        }

        @include breakpoint-down(sm) {
          @include font-height(18.25, 27);
          width: 90%;
        }

        @include breakpoint-down(xs) {
          @include font-height(17.45, 27);
          width: 95%;
        }
      }
    }
  }
}
</style>
