<template>
  <div class="home-page w-100">
    <!-- HERO SECTION -->
    <header-hero-section />

    <!-- PHTO GEOMETRY SECTION -->
    <photo-geometry-section />

    <!-- ABOUT ME SECTION -->
    <about-section />

    <!-- PORTFOLIO SECTION -->
    <portfolio-section />

    <!-- SERVICE SECTION -->
    <service-section />

    <!-- EXPERIENCE SECTION -->
    <experience-section />

    <!-- TESTIMONIAL SECTION -->
    <testimonial-section />

    <!-- BLOG SECTION -->
    <blog-section v-if="false" />

    <!-- CLIENT SECTION -->
    <client-section />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import headerHeroSection from "@/components/HomeComps/header-hero-section";
import photoGeometrySection from "@/components/HomeComps/photo-geometry-section";
import blogSection from "@/components/HomeComps/blog-section";

const aboutSection = defineAsyncComponent(() =>
  import("@/components/HomeComps/about-section")
);
const serviceSection = defineAsyncComponent(() =>
  import("@/components/HomeComps/service-section")
);
const portfolioSection = defineAsyncComponent(() =>
  import("@/components/HomeComps/portfolio-section")
);
const experienceSection = defineAsyncComponent(() =>
  import("@/components/AboutComps/exerience-section")
);
const testimonialSection = defineAsyncComponent(() =>
  import("@/components/HomeComps/testimonial-section")
);
const clientSection = defineAsyncComponent(() =>
  import("@/components/HomeComps/client-section")
);

export default {
  components: {
    headerHeroSection,
    photoGeometrySection,
    aboutSection,
    serviceSection,
    portfolioSection,
    experienceSection,
    testimonialSection,
    blogSection,
    clientSection,
  },
};
</script>

<style lang="scss" scoped>
.home-page {
}
</style>
