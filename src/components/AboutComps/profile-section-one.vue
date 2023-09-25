<template>
  <div class="profile-section">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-12 col-md-6">
          <Tilt>
            <div class="profile-image-area rounded-8">
              <div class="image-holder rounded-8 overflow-hidden">
                <img
                  src="https://cdn.pixabay.com/photo/2014/11/03/17/50/man-515518_1280.jpg"
                  alt=""
                />
              </div>
            </div>
          </Tilt>
        </div>

        <div class="col-12 col-md-6">
          <div class="profile-data brand-light-grey">
            <div class="title-text brand-white">MY PROFILE</div>

            <p>
              🚀 Hey there, fellow explorer of the digital cosmos! I'm thrilled
              to welcome you to my tech odyssey—a journey that's as much about
              code as it is about camaraderie, as much about innovation as it is
              about laughs over a cup of virtual coffee. 🌟
            </p>

            <p>
              👾 I'm not just your typical Senior Software Engineer with over
              five years of experience; I'm the mastermind behind turning
              technology into art, breathing life into lines of code. If
              software were music, I'd be the conductor of a symphony,
              seamlessly blending web, mobile, and cloud technologies to create
              harmonious digital experiences.
            </p>

            <p>
              🌐 My technical toolkit reads like a travelogue of the tech
              universe. From the intricate dance of JavaScript frameworks—React,
              Vue, Angular—to the cloud's vast expanse—AWS, Azure—I've navigated
              the galaxies of code with a curiosity that's always one step ahead
              of the curve.
            </p>

            <button class="btn btn-secondary mgt-40">Preview Resume</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Tilt from "vanilla-tilt-vue";
</script>

<style lang="scss" scoped>
.profile-section {
  padding: toRem(10) 0 toRem(120);
  font-family: "Eaves-SemiBold";

  @include breakpoint-down(lg) {
    padding: toRem(10) 0 toRem(60);
  }

  @include breakpoint-down(md) {
    padding: toRem(10) 0 toRem(40);
  }

  @include breakpoint-down(sm) {
    padding: toRem(10) 0 toRem(20);
  }

  .profile-image-area {
    background: $brand-off-grey;
    position: relative;
    height: toRem(680);
    width: 86%;

    @include breakpoint-down(xl) {
      width: 92%;
    }

    @include breakpoint-down(lg) {
      height: toRem(620);
      width: 97%;
    }

    @include breakpoint-down(md) {
      margin: 0 auto toRem(100);
      height: toRem(520);
      width: 65%;
    }

    @include breakpoint-down(sm) {
      height: toRem(480);
      width: 75%;
    }

    @include breakpoint-down(xs) {
      height: toRem(440);
      width: 80%;
    }

    @include breakpoint-custom-down(400) {
      height: toRem(400);
      width: 85%;
    }

    .image-holder {
      background: $brand-dark-grey;
      @include center-placement;
      position: relative;
      height: 91%;
      width: 91%;

      @include breakpoint-down(lg) {
        height: 95%;
        width: 94%;
      }

      @include breakpoint-down(xs) {
        height: 96%;
        width: 95%;
      }

      img {
        @include background-cover;
      }
    }
  }

  .profile-data {
    .title-text {
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke-width: toRem(0.6);
      font-family: "Eaves-Heavy";
      margin-bottom: toRem(20);
      letter-spacing: 0.018em;
      font-size: toRem(60);

      @include breakpoint-down(lg) {
        font-size: toRem(50);
      }

      @include breakpoint-down(sm) {
        font-size: toRem(45);
      }

      @include breakpoint-down(xs) {
        font-size: toRem(38);
      }

      @include breakpoint-custom-down(380) {
        font-size: toRem(32);
      }
    }

    p {
      @include font-height(20, 30);

      @include breakpoint-down(lg) {
        @include font-height(18.5, 28);
      }

      @include breakpoint-down(sm) {
        @include font-height(17.75, 28);
      }

      @include breakpoint-down(xs) {
        @include font-height(17.25, 26.5);
      }

      @include breakpoint-custom-down(400) {
        @include font-height(17, 26);
      }
    }
  }
}
</style>
