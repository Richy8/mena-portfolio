<template>
  <div class="client-section">
    <div class="container">
      <!-- META TEXT -->
      <h2 class="page-meta-text">ESTEEMED CLIENTS</h2>

      <!-- TITLE TEXT -->
      <h2 class="page-title-text brand-light-grey text-center">
        Meet my
        <span class="brand-yellow">Exceptional Clients</span>
      </h2>

      <div class="row client-row brand-light-grey">
        <div class="col-6 col-md-4 col-lg-3">
          <div class="client-img">
            <img
              src="https://res.cloudinary.com/richy-jones/image/upload/q_60/v1701596425/client-gradely.svg"
              class="filter-bw"
              alt="Gradely client"
              loading="lazy"
            />
          </div>
        </div>

        <div class="col-6 col-md-4 col-lg-3">
          <div class="client-img">
            <img
              src="https://res.cloudinary.com/richy-jones/image/upload/q_60/v1701596426/client-vesicash.svg"
              class="filter-contrast"
              alt="Vesicash client"
              loading="lazy"
            />
          </div>
        </div>

        <div class="col-6 col-md-4 col-lg-3">
          <div class="client-img">
            <img
              src="https://res.cloudinary.com/richy-jones/image/upload/q_60/v1701596427/client-pave.svg"
              class="filter-contrast"
              alt="PaveHq client"
              loading="lazy"
            />
          </div>
        </div>

        <div class="col-6 col-md-4 col-lg-3">
          <div class="client-img">
            <img
              src="https://res.cloudinary.com/richy-jones/image/upload/q_60/v1701596425/client-class54.svg"
              class="filter-contrast"
              alt="Class54 client"
              loading="lazy"
            />
          </div>
        </div>

        <div class="col-6 col-md-4 col-lg-3">
          <div class="client-img">
            <img
              src="https://res.cloudinary.com/richy-jones/image/upload/q_60/v1701596425/client-budgit.svg"
              class="filter-contrast"
              alt="Budgit client"
              loading="lazy"
            />
          </div>
        </div>

        <div class="col-6 col-md-4 col-lg-3">
          <div class="client-img">
            <img
              src="https://res.cloudinary.com/richy-jones/image/upload/q_60/v1701596425/client-golden-penny.png"
              class="gp-img filter-contrast"
              alt="GoldenPenny client"
              loading="lazy"
            />
          </div>
        </div>

        <div class="col-6 col-md-4 col-lg-3">
          <div class="client-img">
            <img
              src="https://res.cloudinary.com/richy-jones/image/upload/q_60/v1701596426/client-deskangle.svg"
              alt="Deskangle client"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.client-section {
  background: darken($brand-light-black, 9.5%);
  font-family: "Eaves-SemiBold";
  padding: toRem(120) 0;

  @include breakpoint-down(lg) {
    padding: toRem(100) 0 toRem(120);
  }

  @include breakpoint-down(md) {
    padding: toRem(100) 0 toRem(90);
  }

  @include breakpoint-down(sm) {
    padding: toRem(80) 0 toRem(50);
  }

  .container {
    @include flex-column("flex-start", "center");

    .page-title-text {
      margin-bottom: toRem(80);
      width: 60%;

      @include breakpoint-down(xl) {
        margin-bottom: toRem(20);
        margin-top: toRem(5);
        width: 80%;
      }

      @include breakpoint-down(lg) {
        width: 90%;
      }

      @include breakpoint-down(md) {
        width: 95%;
      }

      @include breakpoint-down(sm) {
        width: 100%;
      }
    }

    .client-row {
      @include flex-row-wrap("center", "center");
      width: 85%;
      gap: 30px 0;

      @include breakpoint-down(lg) {
        width: 95%;
        gap: toRem(25);
      }

      @include breakpoint-down(md) {
        width: 100%;
        gap: 0;
      }

      .client-img {
        position: relative;
        @include flex-row-nowrap("center", "center");
        padding: 0 toRem(25) toRem(10);

        @include breakpoint-down(lg) {
          padding: 0 toRem(20) toRem(10);
        }

        @include breakpoint-down(md) {
          padding: 0 toRem(25) toRem(50);
        }

        @include breakpoint-down(sm) {
          padding: 0 toRem(0) toRem(50);
        }

        img {
          @include transition(0.3s);
          height: auto;
          width: 100%;

          @include breakpoint-down(sm) {
            width: 85%;
          }

          @include breakpoint-down(xs) {
            width: 95%;
          }

          &:hover {
            filter: grayscale(0%);
          }
        }

        .gp-img {
          width: auto;
          height: toRem(200);

          @include breakpoint-down(sm) {
            height: toRem(160);
          }

          @include breakpoint-down(xs) {
            height: toRem(130);
          }
        }

        .filter-bw {
          // filter: grayscale(100%);
        }

        .filter-contrast {
          // filter: grayscale(100%) contrast(0.25);
        }
      }
    }
  }
}
</style>
