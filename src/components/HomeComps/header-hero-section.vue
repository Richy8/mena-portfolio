<template>
  <header>
    <div class="container">
      <!-- GRID LINES -->
      <grid-lines />

      <!-- BACKGROUND TEXT -->
      <header-bg-text />

      <!-- CIRCLE ANIMATION -->
      <circle-animation />

      <!-- HEADER FOOTER CONTACTS -->
      <header-contact />

      <!-- HEADER COPY TEXT -->
      <header-copy />
    </div>

    <!-- SOCIAL ICON LIST -->
    <header-socials />
  </header>
</template>

<script>
import gridLines from "@/components/GlobalComps/grid-lines";
import headerSocials from "@/components/HomeComps/header-socials";
import headerContact from "@/components/HomeComps/header-contact";
import headerBgText from "@/components/HomeComps/header-bg-text";
import headerCopy from "@/components/HomeComps/header-copy";
import circleAnimation from "@/components/HomeComps/circle-animation";

export default {
  name: "headerHeroSection",

  components: {
    gridLines,
    headerSocials,
    headerContact,
    headerBgText,
    headerCopy,
    circleAnimation,
  },
};
</script>

<style lang="scss" scoped>
header {
  background: $brand-sharp-grey;
  padding-top: toRem(120);
  height: 100vh;
}
</style>