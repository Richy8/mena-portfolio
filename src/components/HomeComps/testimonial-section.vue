<template>
  <div class="testimonial-section brand-light-grey">
    <div class="container">
      <div class="row wrapper">
        <div class="col-12 col-md-5 col-xl-6">
          <div class="copy-section">
            <!-- META TEXT -->
            <div class="page-meta-text">Client Testimonials</div>

            <!-- TITLE TEXT -->
            <div class="page-title-text brand-light-grey">
              Building Trust through
              <span class="brand-yellow">Experience</span>
            </div>

            <!-- HELPER TEXT -->
            <div class="description-text">
              "Trust is the cornerstone of my successes. I don't just create
              products; I create trust. With every project, I listen intently to
              your vision, ensuring a perfect deliverable. Explore how my
              clients' confidence in me transforms into impeccable products. See
              what they have to say."
            </div>
          </div>
        </div>

        <div class="col-12 col-md-7 col-xl-6">
          <div class="testimonials">
            <div class="content-col">
              <testimonial-card
                image="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80"
                name="Chris Southam"
                description="Product lead at The SaaS People"
                comment="Elvis's core strength is his ability to adapt and apply critical thinking to a problem. He doesn't just take a project and do it, he will break it down, check it ticks all the boxes (including the ones you forgot about!), and then deliver something beyond your expectations. Work with him without hesitation!"
              />

              <testimonial-card
                image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80"
                name="Sara King"
                description="CTO at The Variables"
                comment="I always love working with Elvis - he’s professional and enthusiastic and always willing to provide insight and suggestions for improving accessibility and functionality of our project"
              />
            </div>

            <div class="content-col">
              <testimonial-card
                image="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80"
                name="Daniel Moore"
                description="UI/UX Designer at Twitter"
                comment="We loved working with Elvis and appreciate all his contributions to Pigeon Loans. If anyone is in the market for hiring a great freelance front-end developer, don’t hesitate to add Elvis to your team."
              />

              <testimonial-card
                image="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80"
                name="Brian Tracy"
                description="CEO at SquareSpace"
                comment="Over the last few months I’ve had the pleasure to work with Elvis on the relaunch of our new marketing site. His attention to detail and flexibility to work with in our team’s style made him a delight to work with. Additionally, as an American it was awesome to wake up each day to a fresh package of improvements. To that end we are planning to employ Elvis to help us modernize our other two sites as well."
              />
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

    .copy-section {
      width: 93%;

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
