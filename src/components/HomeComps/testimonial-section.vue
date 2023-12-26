<template>
  <div class="testimonial-section brand-light-grey">
    <div class="container">
      <div class="row wrapper">
        <div class="copy-wrapper">
          <div class="copy-section">
            <!-- META TEXT -->
            <h2 class="page-meta-text">CLIENT TESTIMONIALS</h2>

            <!-- TITLE TEXT -->
            <h2 class="page-title-text brand-light-grey">
              Building Trust through
              <span class="brand-yellow">Experience</span>
            </h2>

            <!-- HELPER TEXT -->
            <p class="description-text">
              "Trust is the cornerstone of my successes. I don't just create
              products; I create trust. With every project, I listen intently to
              your vision, ensuring a perfect deliverable."
            </p>
          </div>
        </div>

        <div class="testimonial-wrapper">
          <div class="testimonials">
            <div class="content-col">
              <testimonial-card
                image="https://res.cloudinary.com/richy-jones/image/upload/v1703514594/tomisin.jpg"
                name="Tomisin Olaofe"
                description="Future Services Lead at Jaguar Land Rover"
                comment="Elvis diligence and work-ethic is second to none. Elvis intelligence and dedication to his work comes off quite easily. However, it's his emotional intelligence that makes him a standout engineer to work with. His willingness to work with cross department teammates to help to clarify their issues and explain things in clear terms makes him easy to work with."
              />

              <testimonial-card
                image="https://res.cloudinary.com/richy-jones/image/upload/v1696173743/segun.png"
                name="Oluwasegun Ige"
                description="Tech Lead at Budgit"
                comment="Elvis is a great guy. He is very dedicated to his work! He delivers with excellence on his tasks. He interprets designs very well and also pays attention to little details without any supervision. He is a great team player and makes sure everyone on his team is fine."
              />
            </div>

            <div class="content-col">
              <testimonial-card
                image="https://res.cloudinary.com/richy-jones/image/upload/v1703514595/oluwaseyi.jpg"
                name="Oluwaseyi Adelaju"
                description="Growth Product Manager at SEAMFIX"
                comment="Incredibly talented. Elvis is exceptionally dedicated to his work. During the period I worked with him, I noticed his eye for detail, teamwork spirit, and objectivity in every task assigned to him. He showed a great deal of determination in achieving set targets. Elvis is a valuable asset to any company he works with and above all an excellent colleague."
              />

              <testimonial-card
                image="https://res.cloudinary.com/richy-jones/image/upload/v1703514594/imole.jpg"
                name="Imole Oluyemi"
                description="Team Lead at Class54/Techhaven Africa"
                comment="Elvis is an exceptional software engineering leader known for ensuring on-time delivery and top-notch quality. He excels in communication, understanding both technical and business aspects. Elvis's passion for excellent user experiences makes him an ideal collaborator for design-oriented organisations. At Class54, Elvis played a crucial role in enhancing user touchpoints. He consistently delivers high-quality software on time and comes highly recommended, never failing to impress."
              />
              <a href="tel:+"></a>
              <a href="mailto:"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

const testimonialCard = defineAsyncComponent(() =>
  import("@/components/HomeComps/testimonial-card")
);

export default {
  name: "testimonialSection",

  components: {
    testimonialCard,
  },
};
</script>

<style lang="scss" scoped>
.testimonial-section {
  background: darken($brand-light-black, 8%);
  font-family: "Eaves-SemiBold";
  padding: toRem(120) 0 toRem(100);

  @include breakpoint-down(md) {
    padding: toRem(100) 0 toRem(110);
  }

  @include breakpoint-down(sm) {
    padding: toRem(80) 0;
  }

  .wrapper {
    @include flex-row-wrap("space-between", "center");

    .copy-wrapper {
      width: 44%;

      @include breakpoint-down(md) {
        width: 100%;
      }
    }

    .testimonial-wrapper {
      width: 56%;

      @include breakpoint-down(md) {
        width: 100%;
      }
    }

    .copy-section {
      width: 93%;

      @include breakpoint-down(lg) {
        width: 96%;
      }

      .description-text {
        color: lighten($brand-faded-grey, 7%);
        @include font-height(19.5, 29);

        @include breakpoint-down(lg) {
          @include font-height(19, 30);
        }

        @include breakpoint-down(md) {
          margin-bottom: toRem(80);
        }

        @include breakpoint-down(sm) {
          @include font-height(18.75, 29);
          margin-bottom: toRem(60);
        }

        @include breakpoint-down(xs) {
          @include font-height(16.85, 28);
        }
      }
    }

    .testimonials {
      display: grid;
      gap: toRem(16);
      grid-template-columns: repeat(2, minmax(48%, 1fr));

      @include breakpoint-down(sm) {
        grid-template-columns: repeat(1, minmax(100%, 1fr));
        gap: toRem(45) 0;
      }

      @include breakpoint-down(xs) {
        gap: toRem(35) 0;
      }

      .content-col {
        @include flex-column("center", "center");
        gap: toRem(18);

        @include breakpoint-down(md) {
          @include flex-column("flex-start", "center");
        }

        @include breakpoint-down(sm) {
          gap: toRem(45);
        }

        @include breakpoint-down(xs) {
          gap: toRem(35) 0;
        }
      }
    }
  }
}
</style>
