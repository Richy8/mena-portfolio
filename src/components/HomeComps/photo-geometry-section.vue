<template>
  <div class="container">
    <div
      class="photo-geometry"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="1800"
    >
      <img :src="mxStaticImg('photo-collage.png')" alt="" class="h-auto" />
    </div>
  </div>
</template>

<script>
export default {
  name: "photoGeometrySection",
};
</script>

<style lang="scss" scoped>
.photo-geometry {
  @include flex-column("center", "center");
  padding: toRem(140) 0 toRem(80);

  @include breakpoint-down(sm) {
    padding: toRem(120) 0 toRem(70);
  }

  img {
    width: 90%;

    @include breakpoint-down(md) {
      width: 100%;
    }
  }
}
</style>
