<template>
  <div class="work-data">
    <div
      class="d-flex justify-content-between align-items-center"
      @click="$emit('workDataClicked', workdata.id)"
    >
      <div>
        <div class="work-duration">{{ workdata.duration }}</div>
        <div class="work-title smooth-transition" title="Click to toggle tasks">
          {{ workdata.company }}
        </div>
        <div class="work-role">{{ workdata.role }}</div>
      </div>

      <div class="toggler rounded-circle pointer">
        <div
          class="icon icon-caret-down smooth-transition"
          :class="workdata.visible ? 'rotate-180' : ''"
        ></div>
      </div>
    </div>

    <ul
      class="brand-faded-grey task-list smooth-transition"
      v-if="workdata.visible"
    >
      <li v-for="(task, index) in workdata.responsibilities" :key="index">
        {{ task }}
      </li>
    </ul>
  </div>
</template>

<script setup>
defineEmits(["workDataClicked"]);

defineProps({
  workdata: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style lang="scss" scoped>
.work-data {
  margin-bottom: toRem(40);
  padding-left: toRem(50);
  position: relative;

  @include breakpoint-down(md) {
    padding-left: toRem(35);
  }

  @include breakpoint-down(sm) {
    padding-left: toRem(25);
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  &::before {
    content: "";
    position: absolute;
    @include square-shape(16);
    background: $brand-yellow;
    border-radius: 50%;
    left: toRem(-8);
    top: toRem(33);

    @include breakpoint-down(md) {
      @include square-shape(14);
    }
  }

  &::after {
    content: "";
    position: absolute;
    @include square-shape(24);
    border: toRem(1) solid $brand-yellow;
    border-radius: 50%;
    left: toRem(-12);
    top: toRem(29);

    @include breakpoint-down(md) {
      @include square-shape(22);
    }
  }

  .work-duration {
    @include font-height(13, 24);
    margin-bottom: toRem(2);
    color: $brand-yellow;

    @include breakpoint-down(xl) {
      @include font-height(12, 22);
    }

    @include breakpoint-down(md) {
      @include font-height(11, 22);
    }
  }

  .work-title {
    color: $brand-off-grey;
    font-family: "Eaves-Heavy";
    @include font-height(34, 38);

    &:hover {
      color: $brand-yellow;
    }

    @include breakpoint-down(lg) {
      @include font-height(32, 34);
    }

    @include breakpoint-down(md) {
      @include font-height(28, 32);
    }

    @include breakpoint-down(sm) {
      @include font-height(25, 30);
    }

    @include breakpoint-down(xs) {
      @include font-height(21.5, 26);
      margin-bottom: toRem(5);
    }
  }

  .work-role {
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: toRem(0.6);
    @include font-height(30, 38);
    font-family: "Eaves-Heavy";
    color: $brand-off-grey;
    letter-spacing: 0.018em;

    @include breakpoint-down(md) {
      @include font-height(28, 32);
    }

    @include breakpoint-down(sm) {
      @include font-height(25, 30);
    }

    @include breakpoint-down(xs) {
      @include font-height(21, 26);
    }
  }

  .toggler {
    border: toRem(1) solid rgba($brand-faded-grey, 0.35);
    @include flex-row-nowrap("center", "center");
    @include square-shape(38);
    @include transition(0.3s);
    position: relative;

    .icon {
      color: rgba($brand-faded-grey, 0.35);
      margin-top: toRem(1);
      font-size: toRem(16);
      position: relative;
    }

    &:hover {
      background: rgba($brand-yellow, 0.15);
    }
  }

  .task-list {
    margin-top: toRem(15);

    @include breakpoint-down(xs) {
      padding-left: toRem(15);
    }

    li {
      @include font-height(16.5, 26);
      margin-bottom: toRem(15);

      @include breakpoint-down(lg) {
        @include font-height(15.75, 25);
      }

      @include breakpoint-down(xs) {
        @include font-height(15.5, 24.5);
      }

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
}
</style>
