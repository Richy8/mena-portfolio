<template>
  <div class="wrapper container mx-auto">
    <div class="header-socials vertical-text">
      <!-- FACEBOOK -->
      <a href="https://www.instagram.com/efe_mena/" target="_blank"
        >Instagram</a
      >

      <!-- TWITTER -->
      <a href="https://twitter.com/ElvisRichie" target="_blank">Twitter</a>

      <!-- LINKEDIN -->
      <a href="https://www.linkedin.com/in/efemena-elvis/" target="_blank"
        >LinkedIn</a
      >

      <!-- GITHUB -->
      <a href="https://github.com/Richy8" target="_blank">Github</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "headerSocials",
};
</script>

<style lang="scss" scoped>
.wrapper {
  @include center-placement;

  @include breakpoint-down(xl) {
    width: 95%;
  }

  @include breakpoint-down(sm) {
    display: none;
  }

  .header-socials {
    @include center-y;  
    right: toRem(2);

    @include breakpoint-down(xl) {
      right: 0;
    }

    a {
      @include font-height(13.5, 18);
      @include transition(0.4s);
      color: $brand-off-grey;
      margin: toRem(13) 0;

      &:hover {
        color: $brand-yellow;
      }
    }
  }
}
</style>
