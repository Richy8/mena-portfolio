<template>
  <!-- CONTACT ON WHATSAPP -->
  <div
    class="contact-circle position-fixed pointer overflow-hidden index-1"
    ref="contactCircle"
    @mouseenter="showExpandedView"
    @mouseleave="hideExpandedView"
  >
    <!-- TEXT CONTEXT -->
    <div class="text-content font-weight-600 smooth-transition">
      Schedule a Call Now
    </div>

    <div class="wrapper position-relative smooth-transition h-100 w-100">
      <div
        class="icon icon-phone brand-light-dark"
        v-animate-css="{
          classes: 'tada',
          duration: 1600,
          iteration: 'infinite',
        }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contactCircle",

  methods: {
    showExpandedView() {
      this.$refs.contactCircle.classList.add("show-expanded-view");
    },

    hideExpandedView() {
      this.$refs.contactCircle.classList.remove("show-expanded-view");
    },
  },
};
</script>

<style lang="scss" scoped>
.contact-circle {
  background: rgba($brand-faded-grey, 0.6);
  transition: all 0.3s ease-in-out;
  @include square-shape(46);
  border-radius: 50%;
  bottom: toRem(20);
  right: 4%;

  .wrapper {
    transition: all 0.3s ease-in-out;
  }

  .text-content {
    transition: all 0.3s ease-in-out;
    display: none;
  }

  .icon {
    @include center-placement;
    font-size: toRem(24);
  }
}

.show-expanded-view {
  color: $brand-sharp-dark !important;
  background: $brand-yellow;
  @include rectangle-shape(203, 46);
  @include flex-row-start-nowrap;
  border-radius: toRem(50);

  .text-content {
    padding: 0 0 toRem(5) toRem(22);
    font-size: toRem(13.5);
    white-space: nowrap;
    position: relative;
    display: unset;
    top: toRem(4);
  }

  .wrapper {
    @include square-shape(46);
  }
}
</style>
