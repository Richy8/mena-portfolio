<template>
  <footer>
    <div class="footer container">
      <!-- TOP ROW -->
      <div class="footer-top">
        <div class="top-left">
          <!-- LOGO IMAGE -->
          <img
            :src="mxStaticImg('mena-light.png', 'logo')"
            alt="mena_brand_logo"
            class="logo-img"
          />

          <!-- BRAND NAME -->
          <h2 class="brand-name stylish-font">MENA</h2>
        </div>

        <div class="top-right">
          <a href="" class="social social-fb">
            <div class="icon icon-facebook"></div>
          </a>

          <a href="" class="social social-tw">
            <div class="icon icon-twitter"></div>
          </a>

          <a href="" class="social social-in">
            <div class="icon icon-instagram"></div>
          </a>

          <a href="" class="social social-ln">
            <div class="icon icon-linkedin"></div>
          </a>

          <a href="" class="social social-gh">
            <div class="icon icon-github"></div>
          </a>
        </div>
      </div>

      <!-- BOTTOM ROW -->
      <div class="footer-bottom">
        <div class="bottom-left">
          All Rights Reserved. &copy; 2022 Mena Portfolio
        </div>
        <div class="bottom-righr">
          Designed with <span class="brand-red">&#10084;</span> and
          <span class="brand-white">&#9749;</span> by Deskangle
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footerNav",
};
</script>

<style lang="scss" scoped>
footer {
  background: $brand-sharp-grey;
  padding: toRem(20) 0 toRem(42);
  margin: toRem(30) auto 0;

  .footer {
    .footer-top {
      border-bottom: toRem(1) solid rgba($brand-faded-grey, 0.25);
      @include flex-row-between-nowrap;
      padding: toRem(27) 0;

      .top-left {
        @include flex-row-start-nowrap;

        .logo-img {
          @include rectangle-shape(57, 37);
        }

        .brand-name {
          color: rgba($brand-light-grey, 0.875);
          margin-left: toRem(20);
          font-size: toRem(18);
          position: relative;
          font-weight: 700;
          top: toRem(9);
        }
      }

      .top-right {
        @include flex-row-end-nowrap;
        gap: toRem(10);

        .social {
          border: toRem(1) solid $brand-faded-grey;
          @include transition(0.45s);
          @include square-shape(38);
          position: relative;
          border-radius: 50%;

          .icon {
            @include center-placement;
            color: $brand-faded-grey;
            font-size: toRem(15);
          }

          &:hover {
            border: toRem(1) solid transparent;

            .icon {
              color: $brand-white;
            }
          }

          &-fb {
            &:hover {
              background: $facebook-color;
            }
          }
          &-tw {
            &:hover {
              background: $twitter-color;
            }
          }
          &-in {
            &:hover {
              background: $instagram-color;
            }
          }
          &-ln {
            &:hover {
              background: $linkedin-color;
            }
          }
          &-gh {
            &:hover {
              background: $github-color;
            }
          }
        }
      }
    }

    .footer-bottom {
      @include flex-row-between-nowrap;
      @include font-height(12.85, 18);
      color: rgba($brand-light-grey, 0.5);
      padding: toRem(27) 0;
    }
  }
}
</style>