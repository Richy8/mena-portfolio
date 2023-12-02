<template>
  <div class="about-section" id="about">
    <div class="container">
      <section
        class="section section-left"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1800"
      >
        <!-- META TEXT -->
        <div class="page-meta-text">ABOUT ME</div>

        <!-- TITLE TEXT -->
        <div class="page-title-text brand-light-grey">
          About <span class="brand-yellow">Efemena Elvis</span>
        </div>

        <!-- DESCRIPTION BIO -->
        <div class="about-description brand-light-grey">
          <p>
            Meet Efemena Elvis, a highly skilled and passionate software
            engineer with a knack for turning complex problems into elegant
            solutions. Having a wealth of experience and a relentless drive for
            innovation, he possesses a deep understanding of cutting-edge
            technologies and industry best practices. From designing robust
            architectures to writing efficient code, he delivers expected
            high-quality solutions.
          </p>

          <p>
            A versatile software engineer experienced in both web and mobile
            applications. He collaborates effectively with cross-functional
            teams to deliver scalable, user-centric products. In addition to his
            technical abilities, Efemena possesses exceptional communication
            skills, enabling him thrive in any work environments.
          </p>
        </div>

        <button class="btn btn-secondary">Preview Resume</button>
      </section>

      <section
        class="section section-right"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1800"
      >
        <!-- TOOLS SECTION -->
        <tools-section />
      </section>
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";

const toolsSection = defineAsyncComponent(() =>
  import("@/components/HomeComps/tools-section")
);
</script>

<style lang="scss" scoped>
.about-section {
  padding: toRem(80) 0 toRem(90);

  @include breakpoint-down(lg) {
    padding: toRem(60) 0 toRem(50);
  }

  @include breakpoint-down(md) {
    padding: toRem(40) 0 toRem(50);
  }

  .container {
    @include flex-row-wrap("space-between", "flex-start");

    .section {
      width: 46%;

      @include breakpoint-down(xl) {
        width: 48%;
      }

      &-left {
        @include breakpoint-down(lg) {
          width: 52%;
        }

        @include breakpoint-down(md) {
          margin-bottom: toRem(100);
          width: 100%;
        }

        .about-description {
          @include font-height(20, 31);
          margin-bottom: toRem(42);
          font-family: "Eaves-SemiBold";

          @include breakpoint-down(xl) {
            @include font-height(20, 29);
          }

          @include breakpoint-down(lg) {
            @include font-height(19.5, 30);
          }

          @include breakpoint-down(sm) {
            @include font-height(19, 30);
          }

          @include breakpoint-down(xs) {
            @include font-height(17.5, 28);
          }
        }
      }

      &-right {
        margin-top: toRem(60);

        @include breakpoint-down(lg) {
          width: 42%;
        }

        @include breakpoint-down(md) {
          margin-top: toRem(20);
          margin-bottom: toRem(50);
          width: 100%;
        }
      }
    }
  }
}
</style>
