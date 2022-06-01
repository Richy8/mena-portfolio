<template>
  <div class="header-copy">
    <div class="copy-text-area select-none">
      <div class="copy copy-one">Hello<span class="brand-red">.</span></div>
      <div class="copy copy-two">I am</div>

      <div class="copy copy-three">
        Efemena

        <!-- LOVE -->
        <div class="love">
          <div class="heart position-relative pulse-animate"></div>
        </div>
      </div>

      <!-- COPY DESCRIPTION -->
      <div class="copy-description brand-off-grey">
        A passionate software engineer,<br />
        building exceptional digital experience<br />
        and creating human-centered products.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "headerCopy",
};
</script>

<style lang="scss" scoped>
.header-copy {
  @include flex-column-end-end;

  .copy-text-area {
    position: relative;
    right: 13.75%;

    .copy {
      position: relative;
      color: $brand-white;
      font-size: toRem(130);
      font-weight: 700;

      &-one {
        top: toRem(37);
      }

      &-two {
        top: toRem(-20);
      }

      &-three {
        top: toRem(-60);
      }
    }

    .love {
      position: absolute;
      width: 50px;
      height: 40px;
      top: 25%;
      left: 83.5%;

      .heart {
        &:before,
        &:after {
          position: absolute;
          content: "";
          left: toRem(17);
          top: 0;
          width: toRem(17);
          height: toRem(30);
          background: #d65858;
          border-radius: 50px 50px 0 0;
          transform: rotate(-45deg);
          transform-origin: 0 100%;
        }

        &:after {
          left: 0;
          transform: rotate(45deg);
          transform-origin: 100% 100%;
        }
      }
    }

    .copy-description {
      position: absolute;
      @include font-height(13, 24);
      text-align: right;
      bottom: toRem(18);
      right: 0;
    }
  }
}
</style>