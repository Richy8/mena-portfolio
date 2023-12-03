<template>
  <div class="service-section">
    <div class="container">
      <!-- META TEXT -->
      <h2 class="page-meta-text">MY SERVICES</h2>

      <!-- TITLE TEXT -->
      <h2 class="page-title-text brand-light-grey text-center">
        Empowering Businesses through
        <span class="brand-yellow">Innovative Services</span>
      </h2>

      <!-- HELPER TEXT -->
      <p class="helper-text text-center">
        Ignite your business's potential with bespoke solutions that fuel
        exponential growth and empower seamless scalability.
      </p>

      <div>
        <div class="row">
          <div class="col-12 col-md-4">
            <service-card
              icon="https://res.cloudinary.com/richy-jones/image/upload/q_60/v1701627641/terminal.png"
              title="Front-End Development"
              description="I create user-friendly designs for web and mobile platforms, ensuring seamless experiences that drive business growth."
            />
          </div>

          <div class="col-12 col-md-4">
            <service-card
              icon="https://res.cloudinary.com/richy-jones/image/upload/q_60/v1701627641/server.png"
              title="Back-End Development"
              description="I build scalable backend systems with efficient data management and seamless integrations, offering a strong foundation for growth."
            />
          </div>

          <div class="col-12 col-md-4">
            <service-card
              icon="https://res.cloudinary.com/richy-jones/image/upload/q_60/v1701627641/globe.png"
              title="Cloud Solutions"
              description="I empower your business with cost-effective cloud solutions through strategic architecture and operational scalability."
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
  padding: toRem(130) 0 toRem(100);

  @include breakpoint-down(lg) {
    padding: toRem(120) 0 toRem(40);
  }

  @include breakpoint-down(sm) {
    padding: toRem(60) 0 toRem(30);
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
