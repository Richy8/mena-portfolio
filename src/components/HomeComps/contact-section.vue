<template>
  <div class="container">
    <div class="row">
      <div class="contact-section col-12" id="hire-me">
        <!-- META TEXT -->
        <div class="meta-text brand-off-grey">
          Need a High-Performing Software?
        </div>

        <!-- TITLE TEXT -->
        <div class="title-text brand-light-grey text-center text-uppercase">
          Let's Get <span class="brand-yellow">Started.</span>
        </div>

        <!-- ACTIONS ROW -->
        <div class="actions-row">
          <router-link to="/schedule-session" class="btn btn-primary"
            >Book a Free Discovery Call</router-link
          >

          <router-link to="/contact" class="btn btn-secondary"
            >Or send me an Email</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contactSection",
};
</script>

<style lang="scss" scoped>
.contact-section {
  @include flex-column("center", "center");
  padding: toRem(120) toRem(10) toRem(80);
  margin: toRem(20) auto;
  position: relative;

  @include breakpoint-down(lg) {
    padding: toRem(120) toRem(10) toRem(60);
  }

  @include breakpoint-down(sm) {
    padding: toRem(140) toRem(10) toRem(50);
  }

  .meta-text {
    font-family: "Eaves-SemiBold";
    @include font-height(23, 34);
    margin-bottom: toRem(10);

    @include breakpoint-down(lg) {
      @include font-height(22, 32);
    }

    @include breakpoint-down(md) {
      @include font-height(20, 28);
    }

    @include breakpoint-down(sm) {
      @include font-height(18, 28);
    }
  }

  .title-text {
    @include font-height(98, 110);
    font-family: "Eaves-Heavy";
    margin-bottom: toRem(74);

    @include breakpoint-down(lg) {
      @include font-height(90, 98);
    }

    @include breakpoint-down(sm) {
      @include font-height(72, 84);
    }

    @include breakpoint-down(xs) {
      @include font-height(68, 78);
      margin-bottom: toRem(65);
    }
  }

  .actions-row {
    @include flex-row-nowrap("center", "center");
    gap: toRem(20);

    @include breakpoint-custom-down(630) {
      @include flex-column("flex-start", "center");
      gap: toRem(25);
    }

    @include breakpoint-down(sm) {
      width: 100%;
    }
  }
}
</style>
