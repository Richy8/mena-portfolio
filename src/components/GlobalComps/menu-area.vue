<template>
  <div
    class="menu-area w-100 brand-sharp-grey-bg overflow-hidden"
    :class="show_menu ? 'show-menu' : null"
  >
    <!-- BACKGROUND CIRCLE -->
    <div class="background-circle one"></div>
    <div class="background-circle two"></div>

    <div class="container h-100 d-flex align-items-center">
      <div class="row h-100 mx-auto">
        <div class="col-12 m-auto menu-container h-100 border-brand-green_">
          <menu-list />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuList from "@/components/GlobalComps/menu-list";

export default {
  name: "menuArea",

  components: {
    MenuList,
  },

  data: () => ({
    show_menu: false,
  }),

  created() {
    this.$eventBus.on("toggle-menu", this.toggleMenu);
    this.$eventBus.on("close-menu", this.closeMenu);
  },

  methods: {
    toggleMenu() {
      this.show_menu = !this.show_menu;
    },

    closeMenu() {
      this.show_menu = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-area {
  position: fixed;
  bottom: 0;
  left: 0;
  transition: height 0.5s ease;
  height: 0;
  z-index: 1;

  .background-circle {
    position: absolute;
    background: rgba($brand-light-black, 0.175);
    border-radius: 50%;

    &.one {
      background-image: linear-gradient(
        to left bottom,
        #424349,
        #2b2c33,
        #232327,
        #1b1b1d,
        #161616
      );
      @include square-shape(400);
      top: toRem(-40);
      left: toRem(-80);

      @include breakpoint-down(xs) {
        @include square-shape(350);
      }
    }

    &.two {
      background-image: linear-gradient(
        to right bottom,
        #2a2b30,
        #1f1f22,
        #1a1a1d,
        #161616
      );
      @include square-shape(580);
      bottom: toRem(-40);
      right: toRem(-60);

      @include breakpoint-down(sm) {
        @include square-shape(480);
      }

      @include breakpoint-down(xs) {
        @include square-shape(450);
        right: toRem(-90);
      }
    }
  }

  .menu-container {
    @include flex-column("center", "center");
    position: relative;
    z-index: 1;

    @include breakpoint-down(xs) {
      padding: 0;
    }
  }
}

.show-menu {
  height: 100vh;
}
</style>
