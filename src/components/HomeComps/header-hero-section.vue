<template>
  <header>
    <div class="container">
      <!-- BACKGROUND TEXT -->
      <header-bg-text />

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
import headerSocials from "@/components/HomeComps/header-socials";
import headerContact from "@/components/HomeComps/header-contact";
import headerBgText from "@/components/HomeComps/header-bg-text";
import headerCopy from "@/components/HomeComps/header-copy";

export default {
  name: "headerHeroSection",

  components: {
    headerSocials,
    headerContact,
    headerBgText,
    headerCopy,
  },
};
</script>

<style lang="scss" scoped>
header {
  background: $brand-sharp-grey;
  padding-top: toRem(120);
  position: relative;
  height: 100vh;
}
</style>
