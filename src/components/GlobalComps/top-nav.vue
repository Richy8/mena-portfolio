<template>
  <nav
    class="base-navigation fixed-top smooth-transition"
    :class="show_overlay && 'show-overlay'"
  >
    <div class="container position-relative">
      <div class="wrapper">
        <!-- LOGO SECTION -->
        <BrandLogo />

        <div class="menu-list">
          <a
            href="/home"
            class="list-item tab-view"
            aria-label="Home"
            :class="{ 'active-link': $route.name === 'Home' && !$route.hash }"
            >Home</a
          >
          <a
            @click="routeToSection('about')"
            href="javascript:void(0)"
            class="list-item tab-view"
            aria-label="About Me"
            :class="{ 'active-link': $route.hash === '#about' }"
            >About Me</a
          >
          <a
            @click="routeToSection('projects')"
            href="javascript:void(0)"
            aria-label="Projects"
            class="list-item tab-view"
            :class="{
              'active-link':
                $route.hash === '#projects' || $route.name === 'ProjectDetail',
            }"
            >Projects</a
          >
          <a
            href="#hire-me"
            class="list-item tab-view"
            aria-label="Contact"
            :class="{ 'active-link': $route.name === 'Contact' }"
            >Contact</a
          >

          <a
            href="#hire-me"
            aria-label="Hire Me Today"
            class="list-item btn-grey"
            >Hire Me Today</a
          >
        </div>

        <!-- MOBILE MENU SECTION -->
        <div class="mobile-wrapper">
          <a
            href="#hire-me"
            class="list-item btn-grey"
            aria-label="Hire Me Today"
            >Hire Me Today</a
          >

          <div
            class="mobile-menu pointer"
            aria-label="Menu icon"
            ref="menuPane"
            @click="toggleMenu"
          >
            <div class="line line-one"></div>
            <div class="line line-two"></div>
            <div class="line line-three"></div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import BrandLogo from "@/components/GlobalComps/brand-logo";

export default {
  name: "topNav",

  components: {
    BrandLogo,
  },

  watch: {
    $route: {
      handler(to) {
        if (to.hash) {
          if (to.name === "Home" && !to.hash) {
            location.href = "/";
          } else if (["Contact", "BookNow"].includes(to.name)) {
            this.$router.push(`/${to.hash}`);
          } else this.scrollToSection(to.hash);
        }
      },
      immediate: true,
    },
  },

  data: () => ({
    show_overlay: false,
  }),

  mounted() {
    window.addEventListener("scroll", this.toggleTopOverlay);
  },

  methods: {
    toggleTopOverlay() {
      this.$nextTick(() => {
        let offTop =
          window.pageYOffset ||
          (
            document.documentElement ||
            document.body.parentNode ||
            document.body
          ).scrollTop;

        this.show_overlay = offTop > 50 ? true : false;
      });
    },

    toggleMenu() {
      this.$refs.menuPane.classList.toggle("menu-active");
      this.$eventBus.emit("toggle-menu");
    },

    scrollToSection(hash) {
      const targetSection = document.querySelector(hash);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth",
        });
      }
    },

    routeToSection(hash) {
      location.href = `/#${hash}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.base-navigation {
  padding: toRem(26) 0;

  .wrapper {
    @include flex-row-nowrap("space-between", "center");

    .menu-list {
      @include flex-row-nowrap("space-end", "center");
      gap: toRem(10);

      @include breakpoint-down(md) {
        display: none;
      }
    }

    .list-item {
      @include font-height(15.5, 18);
      @include transition(0.3s);
      padding: toRem(9) toRem(16);
      color: $brand-off-grey;
      font-weight: 500;

      @include breakpoint-down(lg) {
        @include font-height(15, 18);
        padding: toRem(4) toRem(14);
      }

      @include breakpoint-custom-down(860) {
        @include font-height(14.5, 18);
        padding: toRem(4) toRem(12);
      }

      @include breakpoint-custom-down(390) {
        padding: toRem(4) toRem(8);
      }

      @include breakpoint-custom-down(360) {
        @include font-height(13.75, 18);
      }

      &:hover {
        color: $brand-yellow;
      }
    }

    .mobile-wrapper {
      @include flex-row-nowrap("flex-end", "center");
      gap: toRem(18);
      display: none;

      @include breakpoint-down(md) {
        @include flex-row-nowrap("flex-end", "center");
      }

      @include breakpoint-down(xs) {
        gap: toRem(10);
      }

      .mobile-menu {
        @include rectangle-shape(35, 24);
        position: relative;
        z-index: 9;

        @include breakpoint-down(xs) {
          @include rectangle-shape(32, 24);
        }

        .line {
          background: $brand-light-grey;
          @include transition(0.35s);
          position: absolute;
          height: toRem(3);
          left: 0;

          &-one {
            width: 75%;
            top: 0;
          }

          &-two {
            width: 100%;
            top: 50%;
          }

          &-three {
            width: 50%;
            top: 100%;
          }
        }

        &-active {
          .line {
            background: $brand-yellow;

            &-one {
              width: 100%;
              transform: rotate(45deg);
              transform-origin: top left;
            }

            &-two {
              width: 0;
              opacity: 0;
            }

            &-three {
              width: 100%;
              transform: rotate(-45deg);
              transform-origin: bottom left;
            }
          }
        }
      }
    }
  }
}

.active-link {
  color: $brand-yellow !important;
}

.show-overlay {
  background: rgba($brand-sharp-grey, 0.85);
  backdrop-filter: blur(toRem(4));
  padding: toRem(16) 0;
  z-index: 9;
}
</style>
