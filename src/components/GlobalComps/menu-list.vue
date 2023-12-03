<template>
  <div class="menu-list col-12 border-brand-red_">
    <router-link
      to="/"
      class="menu-item menu-item-active"
      aria-label="01 HOME"
    >
      <div class="menu-count">01</div>
      <div class="menu-text">HOME</div>
    </router-link>

    <a
      @click="routeToSection('about')"
      href="javascript:void(0)"
      class="menu-item"
      aria-label="02 ABOUT ME"
    >
      <div class="menu-count">02</div>
      <div class="menu-text">ABOUT ME</div>
    </a>

    <a
      @click="routeToSection('projects')"
      href="javascript:void(0)"
      class="menu-item"
      aria-label="03 PROJECTS"
    >
      <div class="menu-count">03</div>
      <div class="menu-text">PROJECTS</div>
    </a>

    <a
      href="#hire-me"
      class="menu-item"
      aria-label="04 CONTACT"
    >
      <div class="menu-count">04</div>
      <div class="menu-text">CONTACT</div>
    </a>

    <router-link
      to="/schedule-session"
      aria-label="05 DISCOVERY CALL"
      class="menu-item"
    >
      <div class="menu-count">05</div>
      <div class="menu-text">DISCOVERY CALL</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "menuList",

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

        this.$eventBus.emit("close-menu");
      },
      immediate: true,
    },
  },

  methods: {
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
.menu-list {
  padding: 0 toRem(35);

  @include breakpoint-down(sm) {
    padding: 0;
  }

  .menu-item {
    @include flex-row-nowrap("flex-start", "flex-start");
    border-bottom: toRem(0.2) solid rgba($brand-white, 0.4);
    font-family: "Eaves-Bold";
    padding: toRem(20) 0;

    @include breakpoint-down(sm) {
      padding: toRem(18) 0;
    }

    &:last-of-type {
      border-bottom: 0;
    }

    .menu-count {
      transition: all 0.15s ease-in;
      position: relative;
      top: toRem(4);
      margin-right: toRem(16);
      font-size: toRem(18);
      letter-spacing: 0.055em;
      color: rgba($brand-white, 0.75);
      font-family: "Eaves-SemiBold";

      @include breakpoint-down(xs) {
        margin-right: toRem(12);
        font-size: toRem(15);
      }
    }

    .menu-text {
      transition: all 0.3s ease-in;
      @include font-height(42, 48);
      font-family: "Eaves-Heavy";
      color: rgba($brand-white, 0.6);
      letter-spacing: 0.018em;
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke-width: toRem(0.6);

      @include breakpoint-down(xs) {
        @include font-height(33, 40);
      }
    }

    &:hover {
      @extend %active-menu;
    }

    &-active {
      @extend %active-menu;
    }
  }
}

%active-menu {
  .menu-count {
    color: $brand-yellow;
  }

  .menu-text {
    color: $brand-yellow;
    -webkit-text-fill-color: $brand-yellow;
  }
}
</style>
