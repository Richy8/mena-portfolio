<template>
  <div class="booknow-page">
    <!-- BOOK NOW HERO SECTION -->
    <div class="booknow-hero-section">
      <div class="container">
        <!-- META TEXT -->
        <div class="page-meta-text">BOOK A SESSION</div>

        <!-- TITLE TEXT -->
        <div class="page-title-text brand-light-grey text-center">
          Thank you for deciding to book a
          <span class="brand-yellow">Free Discovery</span> call with me
        </div>

        <!-- HELPER TEXT -->
        <div class="helper-text brand-light-grey text-center mgb-0">
          <p>
            Choose the schedule that works best for you in the scheduling tool
            below. I’ll personally respond and acknowledge your booking.
          </p>

          <p>
            Start by clicking on
            <span class="eaves-heavy">'60 Minute Discovery Call.'</span>
          </p>
        </div>
      </div>
    </div>

    <!-- BOOK NOW AREA SECTION -->
    <booknow-area />
  </div>
</template>

<script setup>
import booknowArea from "@/components/BookNowComps/booknow-area";
</script>

<style lang="scss" scoped>
.booknow-page {
  .booknow-hero-section {
    @include flex-column("center", "center");
    padding: toRem(230) 0 toRem(150);
    font-family: "Eaves-SemiBold";

    @include breakpoint-down(md) {
      padding: toRem(200) 0 toRem(140);
    }

    @include breakpoint-down(xs) {
      padding: toRem(180) 0 toRem(120);
    }

    .container {
      @include flex-column("flex-start", "center");
      margin: auto;

      .page-title-text {
        margin-bottom: toRem(50);
        width: 65%;

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
          @include font-height(30, 42);
        }
      }

      .helper-text {
        width: 48.75%;

        @include breakpoint-down(xl) {
          width: 56%;
        }

        @include breakpoint-down(lg) {
          width: 65%;
        }

        @include breakpoint-down(md) {
          width: 90%;
        }

        @include breakpoint-down(sm) {
          margin-bottom: toRem(40);
          width: 100%;
        }
      }
    }
  }
}
</style>
