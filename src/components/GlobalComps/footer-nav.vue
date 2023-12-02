<template>
  <footer>
    <div class="footer container">
      <!-- TOP ROW -->
      <div class="footer-top">
        <div class="top-left">
          <!-- LOGO IMAGE -->
          <BrandLogo :has_index="false" />

          <!-- CONTACT INFO -->
          <div class="contact-info">
            <a href="mailto:menaelvisjones@gmail.com">
              <span class="icon icon-email"></span> menaelvisjones@gmail.com
            </a>

            <a href="tel:+2348131177703"
              ><span class="icon icon-phone"></span> +2348131177703</a
            >
          </div>
        </div>

        <div class="top-right">
          <a
            href="https://web.facebook.com/Lordelvis.95"
            target="_blank"
            class="social social-fb"
          >
            <div class="icon icon-facebook"></div>
          </a>

          <a
            href="https://twitter.com/ElvisRichie"
            target="_blank"
            class="social social-tw"
          >
            <div class="icon icon-twitter"></div>
          </a>

          <a
            href="https://www.instagram.com/efe_mena/"
            target="_blank"
            class="social social-in"
          >
            <div class="icon icon-instagram"></div>
          </a>

          <a
            href="https://www.linkedin.com/in/efemena-elvis/"
            target="_blank"
            class="social social-ln"
          >
            <div class="icon icon-linkedin"></div>
          </a>

          <a
            href="https://github.com/Richy8"
            target="_blank"
            class="social social-gh"
          >
            <div class="icon icon-github"></div>
          </a>
        </div>
      </div>

      <!-- BOTTOM ROW -->
      <div class="footer-bottom">
        <div class="bottom-left">
          All Rights Reserved. &copy; 2022 Mena Portfolio
        </div>

        <div class="bottom-right">
          Designed with <span class="brand-red">&#10084;</span> and
          <span class="brand-white">&#9749;</span> by Deskangle
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import BrandLogo from "@/components/GlobalComps/brand-logo";
</script>

<style lang="scss" scoped>
footer {
  padding: toRem(20) 0 toRem(48);
  margin: toRem(30) auto 0;

  .footer {
    .footer-top {
      border-bottom: toRem(1) solid rgba($brand-faded-grey, 0.25);
      @include flex-row-nowrap("space-between", "center");
      padding: toRem(27) 0;

      @include breakpoint-down(sm) {
        @include flex-column("flex-start", "center");
        gap: toRem(30);
      }

      .top-left {
        @include breakpoint-down(sm) {
          @include flex-column("flex-start", "center");
        }

        .contact-info {
          @include flex-column("flex-start", "flex-start");
          margin-top: toRem(12);

          @include breakpoint-down(sm) {
            @include flex-column("flex-start", "center");
          }

          a {
            @include font-height(15.5, 18);
            margin-bottom: toRem(6);
            color: $brand-faded-grey;
            display: inline-block;

            &:hover {
              color: $brand-yellow;
            }

            &:last-of-type {
              margin-bottom: 0;
            }

            .icon {
              margin-right: toRem(6);
              position: relative;
              top: toRem(3);
            }
          }
        }
      }

      .top-right {
        @include flex-row-nowrap("flex-end", "center");
        gap: toRem(14);

        .social {
          border: toRem(1) solid rgba($brand-faded-grey, 0.5);
          @include transition(0.45s);
          @include square-shape(40);
          position: relative;
          border-radius: 50%;

          .icon {
            @include center-placement;
            color: $brand-faded-grey;
            font-size: toRem(17);
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
      @include flex-row-nowrap("space-between", "center");
      @include font-height(14, 18);
      color: rgba($brand-light-grey, 0.5);
      padding: toRem(27) 0;

      @include breakpoint-down(sm) {
        @include flex-column("flex-start", "center");
        @include font-height(14.25, 18);
        gap: toRem(17);
      }
    }
  }
}
</style>
