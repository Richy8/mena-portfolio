<template>
  <div class="about-section">
    <div class="container">
      <section class="section section-left">
        <!-- META TEXT -->
        <div class="page-meta-text">ABOUT ME</div>

        <!-- TITLE TEXT -->
        <div class="page-title-text brand-light-grey">
          About <span class="brand-yellow">Efemena Elvis</span>
        </div>

        <!-- DESCRIPTION BIO -->
        <div class="about-description brand-light-grey">
          <p>
            Meet Efemena Elvis, a
            <span class="highlight">highly skilled</span> and passionate
            software engineer with a knack for turning complex problems into
            elegant solutions. Having a
            <span class="highlight">wealth of experience</span> and a relentless
            drive for innovation, he possesses a deep understanding of
            cutting-edge technologies and industry best practices. From
            designing robust architectures to
            <span class="highlight">writing efficient code,</span> he delivers
            high-quality solutions that meets users' expectations.
          </p>

          <p>
            A versatile software engineer experienced in web and mobile
            applications, database management, and cloud computing. He
            <span class="highlight">collaborates effectively</span> with
            cross-functional teams to deliver scalable,
            <span class="highlight">user-centric products.</span> With strong
            analytical and problem-solving skills. In addition to his technical
            abilities, Efemena possesses exceptional
            <span class="highlight">communication skills,</span>
            enabling him thrive in dynamic work environments.
          </p>
        </div>

        <button class="btn btn-secondary">Meet Efemena Elvis</button>
      </section>

      <section class="section section-right">
        <!-- QOUTE SECTION -->
        <div class="soft-quote brand-white">
          Software engineering is the art of transforming imagination into
          reality, where lines of code manifest into products that revolutionize
          industries, leveraging technical expertise to bridge the gap between
          abstract concepts and practical solutions, shaping the digital
          landscape one line at a time.
        </div>

        <!-- IMAGE SECTION -->
        <div class="image-section">
          <div class="image-frame image-frame-one">
            <div class="image-holder">
              <img
                src="https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
                alt=""
              />
            </div>
          </div>

          <div class="image-frame image-frame-two">
            <div class="image-holder">
              <img
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.about-section {
  padding: toRem(80) 0 toRem(40);

  @include breakpoint-down(lg) {
    padding: toRem(60) 0 toRem(50);
  }

  @include breakpoint-down(md) {
    padding: toRem(40) 0 toRem(50);
  }

  .container {
    @include flex-row-wrap("space-between", "flex-start");

    .section {
      width: 46%;

      @include breakpoint-down(xl) {
        width: 48%;
      }

      &-left {
        @include breakpoint-down(lg) {
          width: 52%;
        }

        @include breakpoint-down(md) {
          margin-bottom: toRem(100);
          width: 100%;
        }

        .about-description {
          @include font-height(20, 31);
          margin-bottom: toRem(42);
          font-family: "Eaves-SemiBold";

          @include breakpoint-down(xl) {
            @include font-height(20, 29);
          }

          @include breakpoint-down(lg) {
            @include font-height(19.5, 30);
          }

          @include breakpoint-down(sm) {
            @include font-height(19, 30);
          }

          @include breakpoint-down(xs) {
            @include font-height(17.5, 28);
          }

          .highlight {
            background: rgba($brand-yellow, 0.825);
            @include font-height(20, 30);
            padding: toRem(1.75) toRem(3.5);
            color: $brand-sharp-dark;
            border-radius: toRem(4);
            font-family: "Eaves-Bold";

            @include breakpoint-down(md) {
              @include font-height(19, 30);
            }

            @include breakpoint-down(xs) {
              @include font-height(17.5, 29);
            }
          }
        }
      }

      &-right {
        @include breakpoint-down(lg) {
          width: 42%;
        }

        @include breakpoint-down(md) {
          width: 100%;
        }

        .soft-quote {
          border-left: toRem(3) solid $brand-yellow;
          @include font-height(18, 31);
          margin-bottom: toRem(100);
          padding-left: toRem(16);

          @include breakpoint-down(xl) {
            @include font-height(19, 29);
          }

          @include breakpoint-down(lg) {
            border-left: toRem(2) solid $brand-yellow;
            @include font-height(18, 28);
            padding-left: toRem(14);
          }

          @include breakpoint-down(md) {
            @include font-height(18, 30);
          }

          @include breakpoint-down(xs) {
            border-left: toRem(1) solid $brand-yellow;
            @include font-height(16, 28.5);
            padding-left: toRem(10);
          }
        }

        .image-section {
          @include flex-row-nowrap("flex-end", "center");
          position: relative;
          gap: toRem(30);

          .image-frame {
            position: relative;
            background: $brand-off-grey;
            border-radius: toRem(8);
            position: relative;
            height: toRem(420);
            width: 48.5%;

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
              top: toRem(-20);
            }

            &-two {
              top: toRem(20);

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
              height: 94.5%;
              width: 92.5%;

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
    }
  }
}
</style>
