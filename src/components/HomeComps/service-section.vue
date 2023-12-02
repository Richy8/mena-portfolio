<template>
  <div class="service-section">
    <div class="container">
      <!-- META TEXT -->
      <div
        class="page-meta-text"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1800"
      >
        MY SERVICES
      </div>

      <!-- TITLE TEXT -->
      <div
        class="page-title-text brand-light-grey text-center"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1800"
      >
        Empowering Businesses through
        <span class="brand-yellow">Innovative Services</span>
      </div>

      <!-- HELPER TEXT -->
      <div
        class="helper-text text-center"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1800"
      >
        Ignite your business's potential with bespoke solutions that fuel
        exponential growth and empower seamless scalability.
      </div>

      <div>
        <div class="row">
          <div
            class="col-12 col-md-4"
            data-aos="fade-down"
            data-aos-delay="200"
            data-aos-duration="1800"
          >
            <service-card
              icon="cli-terminal.gif"
              title="Front-End Development"
              description="I create user-friendly designs for web and mobile platforms, ensuring seamless experiences that drive business growth."
            />
          </div>

          <div
            class="col-12 col-md-4"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1800"
          >
            <service-card
              icon="server.gif"
              title="Back-End Development"
              description="I build scalable backend systems with efficient data management and seamless integrations, offering a strong foundation for growth."
            />
          </div>

          <div
            class="col-12 col-md-4"
            data-aos="fade-down"
            data-aos-delay="200"
            data-aos-duration="1800"
          >
            <service-card
              icon="globe.gif"
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
