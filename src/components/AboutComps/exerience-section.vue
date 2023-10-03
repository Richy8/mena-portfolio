<template>
  <div class="experience-section">
    <div class="container">
      <div class="title-text">WORK HISTORY</div>

      <div class="row">
        <div class="col-12 col-md-10 col-xl-8 mx-auto">
          <!-- WORK TIMELINE -->
          <div class="work-timeline">
            <workDataCard
              v-for="(work, index) in experienceList"
              :key="index"
              :workdata="work"
              @workDataClicked="toggleWorkData"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent, ref } from "vue";
import experiences from "@/assets/experiences";

const workDataCard = defineAsyncComponent(() =>
  import("@/components/AboutComps/work-data-card")
);

const experienceList = ref([...experiences]);

const toggleWorkData = (selected_id) => {
  experienceList.value.map((data) => (data.visible = false));
  experienceList.value.find((data) => data.id === selected_id).visible = true;
};
</script>

<style lang="scss" scoped>
.experience-section {
  padding: toRem(80) 0 toRem(130);

  @include breakpoint-down(md) {
    padding: toRem(90) 0 toRem(100);
  }

  @include breakpoint-down(sm) {
    padding: toRem(70) 0 toRem(90);
  }

  .title-text {
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: toRem(0.6);
    font-family: "Eaves-Heavy";
    margin-bottom: toRem(40);
    letter-spacing: 0.018em;
    font-size: toRem(110);
    color: $brand-white;

    @include breakpoint-down(xl) {
      font-size: toRem(100);
    }

    @include breakpoint-down(lg) {
      font-size: toRem(85);
      margin-bottom: toRem(30);
    }

    @include breakpoint-down(md) {
      font-size: toRem(60);
    }

    @include breakpoint-down(sm) {
      font-size: toRem(50);
    }

    @include breakpoint-down(xs) {
      font-size: toRem(40);
    }
  }

  .work-timeline {
    border-left: toRem(2) solid $brand-yellow;
    padding: toRem(5) 0;
    position: relative;
    height: auto;

    @include breakpoint-down(sm) {
      border-left: toRem(1) solid $brand-yellow;
    }
  }

  .col-12 {
    @include breakpoint-down(md) {
      padding-left: toRem(30);
    }
  }
}
</style>
