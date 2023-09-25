<template>
  <div class="blog-section">
    <div class="container">
      <!-- META TEXT -->
      <div class="page-meta-text brand-faded-grey">MY ARTICLES</div>

      <!-- TITLE TEXT -->
      <div class="page-title-text brand-light-grey text-center">
        Discover Captivating Content and
        <span class="brand-yellow">Mind-Blowing Articles</span>
      </div>

      <!-- HELPER TEXT -->
      <div class="helper-text text-center">
        Explore mind-blowing articles and captivating content that delivers
        exceptional value. Join me on a journey of inspiration and exploration.
      </div>

      <div class="row w-100">
        <div class="col-12 col-md-4">
          <blog-card
            image="https://images.unsplash.com/photo-1616469829718-0faf16324280?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            title="Optimise your website's SEO"
            extract="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate facere provident velit totam quasi ..."
          />
        </div>

        <div class="col-12 col-md-4">
          <blog-card
            image="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80"
            title="Simple productivity hack to success"
            extract="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate facere provident velit totam quasi ..."
          />
        </div>

        <div class="col-12 col-md-4">
          <blog-card
            image="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80"
            title="Brainstorming sessions gone wrong"
            extract="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate facere provident velit totam quasi ..."
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

const blogCard = defineAsyncComponent(() =>
  import("@/components/HomeComps/blog-card")
);

export default {
  name: "blogSection",

  components: {
    blogCard,
  },
};
</script>

<style lang="scss" scoped>
.blog-section {
  font-family: "Eaves-SemiBold";
  padding: toRem(120) 0 toRem(100);

  .container {
    @include flex-column("flex-start", "center");

    .page-title-text {
      margin-bottom: toRem(10);
      width: 60%;
    }

    .col-md-4 {
      padding: 0 toRem(16);
    }
  }
}
</style>
