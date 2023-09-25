<template>
  <div class="contact-page">
    <div class="contact-hero">
      <div class="container">
        <!-- META TEXT -->
        <div class="page-meta-text">CONTACT US</div>

        <!-- TITLE TEXT -->
        <div class="page-title-text brand-light-grey text-center">
          Collaborate to Innovate: <br />
          <span class="brand-yellow">Your Ideas, Our Expertise</span>
        </div>

        <!-- HELPER TEXT -->
        <div class="helper-text brand-light-grey text-center mgb-0">
          Your vision deserves attention, and I'm here to make it a reality.
          Whether you're starting a project or just want to chat, I'm ready to
          listen. <br />
          Reach out now and let's begin the journey.
        </div>
      </div>
    </div>

    <!-- CONTACT AREA -->
    <div class="container">
      <div class="row contact-area">
        <div
          class="col-12 col-md-10 col-xl-8 mx-auto brand-faded-grey contact-area-wrapper"
        >
          <div
            class="contact-field-section rounded-10 navigation-shadow-effect"
          >
            <div class="row">
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="fullName" class="form-label">Full Name:*</label>
                  <input
                    type="text"
                    id="fullName"
                    class="form-control"
                    placeholder="Your fulname here..."
                  />
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="email" class="form-label">Email Address:*</label>
                  <input
                    type="email"
                    id="email"
                    class="form-control"
                    placeholder="Your email address here..."
                  />
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="subject" class="form-label">Subject:*</label>
                  <input
                    type="text"
                    id="subject"
                    class="form-control"
                    placeholder="Your email message subject..."
                  />
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="phone" class="form-label">Phone Number:</label>
                  <input
                    type="phone"
                    id="phone"
                    class="form-control"
                    placeholder="Your phone number here..."
                  />
                </div>
              </div>

              <div class="col-12">
                <div class="form-group">
                  <label for="messageBody" class="form-label"
                    >Message Body:*</label
                  >
                  <textarea
                    id="messageBody"
                    cols="30"
                    rows="10"
                    class="form-control"
                    placeholder="Your message description here..."
                  ></textarea>
                </div>
              </div>

              <div class="col-12 col-md-6 mx-auto">
                <button class="btn btn-primary w-100">Get in Touch</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.contact-page {
  .contact-hero {
    @include flex-column("center", "center");
    padding: toRem(230) 0 toRem(150);
    font-family: "Eaves-SemiBold";

    @include breakpoint-down(md) {
      padding: toRem(200) 0 toRem(140);
    }

    @include breakpoint-down(xs) {
      padding: toRem(180) 0 toRem(120);
    }

    .container {
      @include flex-column("flex-start", "center");
      margin: auto;

      .page-title-text {
        @include font-height(60, 70);
        margin-bottom: toRem(30);
        width: 60%;

        @include breakpoint-down(lg) {
          @include font-height(54, 64);
          width: 85%;
        }

        @include breakpoint-down(md) {
          @include font-height(44, 54);
          width: 100%;
        }

        @include breakpoint-down(sm) {
          @include font-height(38, 50);
        }

        @include breakpoint-down(xs) {
          @include font-height(36, 44);
        }

        @include breakpoint-custom-down(410) {
          @include font-height(32, 44);
        }
      }

      .helper-text {
        @include font-height(21.5, 29.5);
        width: 48.75%;

        @include breakpoint-down(xl) {
          width: 56%;
        }

        @include breakpoint-down(lg) {
          @include font-height(20, 29);
          width: 65%;
        }

        @include breakpoint-down(md) {
          @include font-height(19, 28);
          width: 90%;
        }

        @include breakpoint-down(sm) {
          @include font-height(18.25, 27);
          width: 100%;
        }

        @include breakpoint-down(xs) {
          @include font-height(17.45, 27);
        }
      }
    }
  }

  .contact-area {
    font-family: "Eaves-SemiBold";
    margin: toRem(-30) auto toRem(120);

    @include breakpoint-down(md) {
      margin: toRem(-30) auto toRem(80);
    }

    @include breakpoint-down(sm) {
      margin: toRem(-30) auto toRem(40);
    }

    @include breakpoint-down(xs) {
      margin: toRem(-30) auto toRem(10);
    }

    .contact-area-wrapper {
      @include breakpoint-down(sm) {
        padding: 0;
      }

      .contact-field-section {
        background: darken($brand-light-black, 7%);
        padding: toRem(60);

        @include breakpoint-down(xl) {
          padding: toRem(45);
        }

        @include breakpoint-down(md) {
          padding: toRem(40);
        }

        @include breakpoint-down(sm) {
          padding: toRem(40) toRem(35);
        }

        @include breakpoint-down(xs) {
          padding: toRem(23.5);
        }
      }
    }
  }
}
</style>
