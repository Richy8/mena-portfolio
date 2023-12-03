<template>
  <div class="container">
    <div class="photo-geometry">
      <picture class="h-auto">
        <!-- WebP format for modern browsers -->
        <source
          srcset="
            https://res.cloudinary.com/richy-jones/image/upload/v1701620230/photo-collage.webp
          "
          type="image/webp"
          loading="lazy"
        />

        <!-- PNG format as a fallback for browsers that don't support WebP -->
        <img
          src="https://res.cloudinary.com/richy-jones/image/upload/v1701620230/photo-collage.png"
          alt="Efemena Elvis photo collage"
          loading="lazy"
        />
      </picture>
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
    width: 100%;
  }
}
</style>
