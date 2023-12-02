<template>
  <div class="booknow-area">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-10 mx-auto brand-light-grey">
          <!-- LOADER ICON -->
          <loaderIcon v-if="isLoading" />

          <!-- Calendly inline widget begin -->
          <div
            class="calendly-inline-widget"
            data-url="https://calendly.com/efemena_elvis/60min?primary_color=3c8f9f"
            style="min-width: 320px; height: 700px"
          ></div>
          <!-- Calendly inline widget end -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import loaderIcon from "@/components/GlobalComps/loader-icon";

const isLoading = ref(true);

const loadScript = (url) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = url;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
};

onMounted(() => {
  loadScript("https://assets.calendly.com/assets/external/widget.js")
    .then(() => {
      isLoading.value = !isLoading.value;
    })
    .catch(() => {
      console.error("Script failed to load.");
    });
});
</script>

<style lang="scss" scoped>
.booknow-area {
  position: relative;
  margin-top: toRem(-120);

  @include breakpoint-down(sm) {
    margin-top: toRem(-60);
  }
}
</style>
