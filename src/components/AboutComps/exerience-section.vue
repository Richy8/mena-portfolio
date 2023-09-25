<template>
  <div class="experience-section">
    <div class="container">
      <div class="title-text brand-white">WORK HISTORY</div>

      <div class="row">
        <div class="col-12 col-md-10 col-xl-8 mx-auto">
          <!-- WORK TIMELINE -->
          <div class="work-timeline">
            <workDataCard
              duration="SEPT 2022"
              company="VESICASH"
              role="SENIOR SOFTWARE LEAD ENGINEER"
            />

            <workDataCard
              duration="OCT 2022"
              company="PAVEHQ"
              role="SENIOR SOFTWARE ENGINEER"
            />

            <workDataCard
              duration="AUG 2022 - SEPT 2022"
              company="MOTOCHECK"
              role="FRONTEND ENGINEER"
            />

            <workDataCard
              duration="MAY 2021 - AUG 2022"
              company="CLASS54"
              role="SENIOR SOFTWARE ENGINEER"
            />

            <workDataCard
              duration="APR 2020 - JUN 2022"
              company="GRADELY"
              role="SENIOR FRONTEND LEAD ENGINEER"
            />

            <workDataCard
              duration="JAN 2021 - MAY 2021"
              company="ICLASS LMS"
              role="FRONTEND DEVELOPER"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";

const workDataCard = defineAsyncComponent(() =>
  import("@/components/AboutComps/work-data-card")
);
</script>

<style lang="scss" scoped>
.experience-section {
  padding: toRem(40) 0 toRem(120);

  @include breakpoint-down(md) {
    padding: toRem(120) 0 toRem(80);
  }

  @include breakpoint-down(sm) {
    padding: toRem(140) 0 toRem(40);
  }

  @include breakpoint-down(xs) {
    padding: toRem(80) 0 toRem(5);
  }

  .title-text {
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: toRem(0.6);
    font-family: "Eaves-Heavy";
    margin-bottom: toRem(60);
    letter-spacing: 0.018em;
    font-size: toRem(120);

    @include breakpoint-down(xl) {
      font-size: toRem(100);
    }

    @include breakpoint-down(lg) {
      font-size: toRem(85);
      margin-bottom: toRem(40);
    }

    @include breakpoint-down(md) {
      font-size: toRem(60);
    }

    @include breakpoint-down(sm) {
      font-size: toRem(46);
    }

    @include breakpoint-down(xs) {
      font-size: toRem(38);
    }
  }

  .work-timeline {
    border-left: toRem(2) solid $brand-yellow;
    padding: toRem(5) 0;
    position: relative;
    height: auto;
  }

  .col-12 {
    @include breakpoint-down(md) {
      padding-left: toRem(30);
    }
  }
}
</style>
