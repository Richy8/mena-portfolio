<template>
  <nav
    class="base-navigation fixed-top smooth-transition"
    :class="show_overlay && 'show-overlay'"
  >
    <div class="container">
      <div class="wrapper">
        <!-- LOGO SECTION -->
        <div class="logo-section">
          <!-- LOGO IMAGE -->
          <img
            :src="mxStaticImg('mena-light.png', 'logo')"
            alt="mena_brand_logo"
            class="logo-img smooth-transition"
          />
        </div>

        <!-- BRAND NAME -->
        <h2
          class="
            brand-name
            font-weight-700
            brand-light-grey
            stylish-font
            smooth-transition
          "
        >
          MENA
        </h2>

        <!-- MENU SECTION -->
        <div class="menu-section">
          <div
            class="
              icon icon-hamburger
              brand-light-grey
              pointer
              smooth-transition
            "
          ></div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "topNav",

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
  },
};
</script>

<style lang="scss" scoped>
.base-navigation {
  padding: toRem(25) 0;

  .wrapper {
    @include flex-row-between-nowrap;

    .logo-section {
      .logo-img {
        @include rectangle-shape(60, 41);
      }
    }

    .brand-name {
      position: relative;
      top: toRem(8);
      font-size: toRem(21);
    }

    .menu-section {
      .icon {
        font-size: toRem(26);

        &:hover {
          color: $brand-yellow !important;
        }
      }
    }
  }
}

.show-overlay {
  padding: toRem(21) 0;
  background: rgba($brand-sharp-grey, 0.85);
  backdrop-filter: blur(10px);

  .wrapper {
    .logo-section {
      .logo-img {
        @include rectangle-shape(55, 36);
      }
    }

    .brand-name {
      top: toRem(7);
      font-size: toRem(20);
    }

    .menu-section {
      .icon {
        font-size: toRem(24);
      }
    }
  }
}
</style>