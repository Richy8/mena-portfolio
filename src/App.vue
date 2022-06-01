<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>

    <!-- CURSOR STATE -->
    <cursor-state />
  </div>
</template>

<script>
import cursorState from "@/components/GlobalComps/cursor-state";

export default {
  name: "app",

  components: {
    cursorState,
  },

  mounted() {
    this.$color.setPageBackgroundColor("#eaeaea");
  },
};
</script>

<style lang="scss">
body {
  cursor: none;
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
