<template>
  <div class="wrapper container">
    <div class="header-socials vertical-text">
      <!-- FACEBOOK -->
      <a href="">Instagram</a>

      <!-- TWITTER -->
      <a href="">Twitter</a>

      <!-- LINKEDIN -->
      <a href="">LinkedIn</a>

      <!-- GITHUB -->
      <a href="">Github</a>
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

  .header-socials {
    @include center-y;
    right: toRem(5.5);

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