<template>
  <div class="service-section">
    <div class="container">
      <!-- META TEXT -->
      <div class="page-meta-text">MY SERVICES</div>

      <!-- TITLE TEXT -->
      <div class="page-title-text brand-light-grey text-center">
        Empowering Businesses through
        <span class="brand-yellow">Innovative Services</span>
      </div>

      <!-- HELPER TEXT -->
      <div class="helper-text text-center">
        Ignite your business's potential with bespoke solutions that fuel
        exponential growth and empower seamless scalability.
      </div>

      <div>
        <div class="row">
          <div class="col-12 col-md-4">
            <service-card
              icon="cli-terminal.gif"
              title="Front-End Development"
              description="I craft seamless user experiences that appeals with your target users. With intuitive designs and optimized usability across web and mobile platforms your business growth is assured."
            />
          </div>

          <div class="col-12 col-md-4">
            <service-card
              icon="server.gif"
              title="Back-End Development"
              description="I develop scalable backend systems for your applications. With efficient data management and seamless integrations, my solutions provide a solid foundation for a scalable growth."
            />
          </div>

          <div class="col-12 col-md-4">
            <service-card
              icon="globe.gif"
              title="Cloud Solutions"
              description="I empower your business with cost-effective cloud solutions. Through strategic architecture, efficient deployment and operational scalability your business growth is certain."
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
const serviceCard = defineAsyncComponent(() =>
  import("@/components/HomeComps/service-card")
);

export default {
  name: "serviceSection",

  components: {
    serviceCard,
  },
};
</script>

<style lang="scss" scoped>
.service-section {
  font-family: "Eaves-SemiBold";
  padding: toRem(130) 0 toRem(80);

  @include breakpoint-down(lg) {
    padding: toRem(120) 0 toRem(40);
  }

  @include breakpoint-down(sm) {
    padding: toRem(60) 0 toRem(20);
  }

  .container {
    @include flex-column("flex-start", "center");

    .page-title-text {
      margin-bottom: toRem(10);
      width: 60%;

      @include breakpoint-down(xl) {
        width: 75%;
      }

      @include breakpoint-down(lg) {
        width: 80%;
      }

      @include breakpoint-down(md) {
        width: 95%;
      }

      @include breakpoint-down(sm) {
        width: 100%;
      }
    }

    .helper-text {
      @include breakpoint-down(lg) {
        width: 65%;
      }

      @include breakpoint-down(md) {
        width: 85%;
      }

      @include breakpoint-down(sm) {
        width: 100%;
      }
    }
  }
}
</style>
