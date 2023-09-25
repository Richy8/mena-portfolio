<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>

    <!-- MENU ITEMS CONTAINER -->
    <menu-area />

    <!-- CURSOR STATE -->
    <cursor-state />
  </div>
</template>

<script>
import cursorState from "@/components/GlobalComps/cursor-state";
import MenuArea from "@/components/GlobalComps/menu-area";

export default {
  name: "app",

  components: {
    cursorState,
    MenuArea,
  },

  mounted() {
    this.$color.setPageBackgroundColor("#1A1A1A");
  },
};
</script>

<style lang="scss">
body {
  cursor: none;
  scroll-behavior: smooth;

  @include breakpoint-down(sm) {
    cursor: unset;
  }
}

.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.225s ease;
}
.fade-leave-active {
  transition: opacity 0.225s ease;
  opacity: 0;
}
</style>
