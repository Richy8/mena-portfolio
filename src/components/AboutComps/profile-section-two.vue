<template>
  <div class="profile-section">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-12 col-md-6">
          <div class="profile-data brand-light-grey">
            <p>
              🤝 But hey, here's where it gets even more exciting. I don't just
              dwell in the realm of pixels and processors; I'm also your go-to
              guide for soft skills that can’t be written in code. Picture this:
              a dashboard where leadership, communication, and collaboration
              meters are always off the charts. Leading a team isn't just a
              role; it's a chance to orchestrate a digital symposium where every
              note, every pixel, contributes to a larger-than-life experience.
            </p>

            <p>
              🎙️ Communication? Oh, that's my jam! Whether it's translating the
              technical jargon into a language everyone understands or crafting
              code comments that might just make you chuckle, I've got you
              covered. And collaboration? Imagine a digital campfire where ideas
              are roasted, toasted, and crafted into a blazing trail of
              innovation.
            </p>

            <p>
              ⚡ So, strap on your virtual reality headsets, and let's embark on
              this thrilling quest. From conquering bugs that feel like mythical
              creatures to bringing a user's smile to life—it's all part of the
              saga. Together, let's create a narrative where tech isn't just
              about lines of code, but a grand adventure that's bound to leave
              an indelible mark on the digital universe. 🌌🚀
            </p>
          </div>
        </div>

        <div class="col-12 col-md-6">
          <div class="image-section">
            <div class="image-frame image-frame-one">
              <div class="image-holder">
                <img
                  src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt=""
                />
              </div>
            </div>

            <div class="image-frame image-frame-two">
              <div class="image-holder">
                <img
                  src="https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.profile-section {
  padding: toRem(80) 0 toRem(120);
  font-family: "Eaves-SemiBold";

  @include breakpoint-down(xl) {
    padding: toRem(80) 0 toRem(80);
  }

  @include breakpoint-down(lg) {
    padding: toRem(80) 0 toRem(50);
  }

  @include breakpoint-down(md) {
    padding: toRem(80) 0 toRem(40);
  }

  @include breakpoint-down(sm) {
    padding: toRem(60) 0 toRem(20);
  }

  .profile-data {
    width: 96%;

    @include breakpoint-down(md) {
      width: 100%;
      margin-bottom: toRem(120);
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

  .image-section {
    @include flex-row-nowrap("flex-end", "center");
    gap: toRem(30);

    .image-frame {
      position: relative;
      background: $brand-off-grey;
      border-radius: toRem(8);
      position: relative;
      height: toRem(480);
      width: 45.5%;

      @include breakpoint-down(lg) {
        width: 100%;
      }

      @include breakpoint-down(md) {
        width: 48%;
      }

      @include breakpoint-custom-down(520) {
        width: 100%;
        height: toRem(500);
      }

      @include breakpoint-down(sm) {
        height: toRem(480);
      }

      @include breakpoint-custom-down(400) {
        height: toRem(440);
      }

      &-one {
        top: toRem(-30);
      }

      &-two {
        top: toRem(30);

        @include breakpoint-down(lg) {
          display: none;
        }

        @include breakpoint-down(md) {
          display: unset;
        }

        @include breakpoint-custom-down(520) {
          display: none;
        }
      }

      .image-holder {
        background: $brand-dark-grey;
        @include center-placement;
        position: relative;
        height: 94.25%;
        width: 92%;

        @include breakpoint-custom-down(520) {
          width: 94.5%;
        }

        img {
          @include background-cover;
        }
      }
    }
  }
}
</style>
