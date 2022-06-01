<template>
  <div class="nav-circle position-fixed">
    <div class="nav-column brand-yellow">
      <!-- NAV COLUMN -->
      <div
        class="circle rounded-circle"
        :class="nav.active && 'circle-active'"
        v-for="(nav, index) in navs"
        :key="index"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navCircle",

  data: () => ({
    navs: [
      { title: "Home", link: "", active: true },
      { title: "About", link: "", active: false },
      { title: "Services", link: "", active: false },
      { title: "Portfolio", link: "", active: false },
      { title: "Clients", link: "", active: false },
      { title: "Contact", link: "", active: false },
    ],
  }),

  methods: {},
};
</script>

<style lang="scss" scoped>
.nav-circle {
  transform: translateY(-50%);
  width: max-content;
  top: 50%;
  left: 5.3%;

  .nav-column {
    .circle {
      position: relative;
      @include square-shape(10);
      background: rgba($brand-light-black, 0.65);
      margin: toRem(24) 0;

      &-active {
        position: relative;
        background: $brand-yellow;
        box-shadow: 0 toRem(2) toRem(4) rgba($brand-yellow, 0.45);
      }
    }
  }
}
</style>