<template>
  <div class="base-layout">
    <!-- TOP NAVIGATION -->
    <top-nav />

    <!-- CONTACT CIRCLE -->
    <contact-circle />

    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>

    <!-- CONTACT SECTION -->
    <contact-section />

    <!-- FOOTER NAVIGATION -->
    <footer-nav />
  </div>
</template>

<script>
import topNav from "@/components/GlobalComps/top-nav";
import footerNav from "@/components/GlobalComps/footer-nav";
import contactCircle from "@/components/GlobalComps/contact-circle";
import contactSection from "@/components/HomeComps/contact-section";

export default {
  name: "baseLayout",

  components: {
    topNav,
    footerNav,
    contactCircle,
    contactSection,
  },
};
</script>
