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

    <!-- FOOTER NAVIGATION -->
    <footer-nav />
  </div>
</template>

<script>
import topNav from "@/components/GlobalComps/top-nav";
import footerNav from "@/components/GlobalComps/footer-nav";
import contactCircle from "@/components/GlobalComps/contact-circle";

export default {
  name: "baseLayout",

  components: {
    topNav,
    footerNav,
    contactCircle,
  },
};
</script>