<template>
  <div class="header-copy">
    <div class="copy-text-area select-none">
      <div class="copy copy-one">Hello<span class="brand-red">.</span></div>
      <div class="copy copy-two">I am</div>

      <div class="copy copy-three">
        <div class="wrapper">
          <div class="top">Efemena</div>
          <div class="bottom" aria-hidden="true">Efemena</div>
        </div>

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
  @include flex-column("flex-end", "flex-end");

  @include breakpoint-custom-down(620) {
    @include flex-column("center", "center");
    right: unset;
    left: 0;
  }

  .copy-text-area {
    position: relative;
    right: 16.5%;

    @include breakpoint-custom-down(620) {
      right: unset;
      left: 0;
    }

    .copy {
      position: relative;
      color: $brand-white;
      font-size: toRem(135);
      font-weight: 700;

      @include breakpoint-down(xl) {
        font-size: toRem(125);
      }

      @include breakpoint-down(lg) {
        font-size: toRem(115);
      }

      @include breakpoint-down(md) {
        font-size: toRem(120);
      }

      @include breakpoint-custom-down(620) {
        font-size: toRem(110);
      }

      @include breakpoint-down(sm) {
        font-size: toRem(100);
      }

      @include breakpoint-down(xs) {
        font-size: toRem(86);
      }

      @include breakpoint-custom-down(390) {
        font-size: toRem(80);
      }

      &-one {
        top: toRem(44);

        @include breakpoint-down(xl) {
          top: toRem(10);
        }

        @include breakpoint-down(lg) {
          top: toRem(30);
        }

        @include breakpoint-down(md) {
          top: toRem(5);
        }

        @include breakpoint-custom-down(620) {
          top: toRem(10);
        }

        @include breakpoint-down(sm) {
          top: toRem(20);
        }

        @include breakpoint-down(xs) {
          top: toRem(20);
        }

        @include breakpoint-custom-down(390) {
          top: toRem(30);
        }
      }

      &-two {
        top: toRem(-20);

        @include breakpoint-down(xl) {
          top: toRem(-50);
        }

        @include breakpoint-down(lg) {
          top: toRem(-25);
        }

        @include breakpoint-down(md) {
          top: toRem(-55);
        }

        @include breakpoint-custom-down(620) {
          top: toRem(-40);
        }

        @include breakpoint-down(sm) {
          top: toRem(-20);
        }

        @include breakpoint-down(xs) {
          top: toRem(-5);
        }

        @include breakpoint-custom-down(390) {
          top: toRem(10);
        }
      }

      &-three {
        top: toRem(-80);

        @include breakpoint-down(xl) {
          top: toRem(-110);
        }

        @include breakpoint-down(lg) {
          top: toRem(-80);
        }

        @include breakpoint-down(md) {
          top: toRem(-115);
        }

        @include breakpoint-custom-down(620) {
          top: toRem(-90);
        }

        @include breakpoint-down(sm) {
          top: toRem(-60);
        }

        @include breakpoint-down(xs) {
          top: toRem(-30);
        }

        @include breakpoint-custom-down(390) {
          top: toRem(-5);
        }
      }

      .wrapper {
        display: grid;
        place-content: center;

        div {
          grid-area: 1/1/-1/-1;
        }

        .top {
          clip-path: polygon(0% 0%, 100% 0%, 100% 48%, 0% 58%);
        }
        .bottom {
          clip-path: polygon(0% 60%, 100% 50%, 100% 100%, 0% 100%);
          color: transparent;
          background: -webkit-linear-gradient(177deg, black 53%, #fff 65%);
          background: linear-gradient(177deg, black 53%, #fff 65%);
          background-clip: text;
          -webkit-background-clip: text;
          transform: translateX(-2.16px) translateY(-0.5px);
        }
      }
    }

    .love {
      position: absolute;
      width: toRem(50);
      height: toRem(40);
      top: 25%;
      left: 83.5%;

      @include breakpoint-custom-down(620) {
        width: toRem(40);
        height: toRem(30);
        left: 82.5%;
      }

      @include breakpoint-down(xs) {
        width: toRem(38);
        height: toRem(28);
        left: 81.5%;
      }

      @include breakpoint-custom-down(400) {
        width: toRem(36);
        height: toRem(28);
        left: 82.1%;
      }

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

          @include breakpoint-down(xs) {
            width: toRem(16);
            height: toRem(26);
          }

          @include breakpoint-custom-down(400) {
            left: toRem(14);
            width: toRem(14);
            height: toRem(24);
          }
        }

        &:after {
          left: 0;
          transform: rotate(45deg);
          transform-origin: 100% 100%;
        }
      }
    }

    .copy-description {
      @include font-height(16, 25);
      position: absolute;
      text-align: right;
      bottom: toRem(24);
      right: 0;

      @include breakpoint-down(xl) {
        @include font-height(15, 24);
        bottom: toRem(65);
      }

      @include breakpoint-down(lg) {
        bottom: toRem(30);
      }

      @include breakpoint-down(md) {
        bottom: toRem(70);
      }

      @include breakpoint-custom-down(620) {
        bottom: toRem(50);
      }

      @include breakpoint-down(sm) {
        @include font-height(15.75, 28);
        bottom: toRem(10);
      }

      @include breakpoint-down(xs) {
        @include font-height(15.25, 26);
        bottom: toRem(-47);
      }

      @include breakpoint-custom-down(390) {
        bottom: toRem(-70);
      }
    }
  }
}
</style>
