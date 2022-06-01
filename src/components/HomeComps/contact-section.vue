<template>
  <div class="contact-section container"></div>
</template>

<script>
export default {
  name: "contactSection",
};
</script>

<style lang="scss" scoped>
.contact-section {
  position: relative;
  margin: toRem(20) auto;
  padding: toRem(30) toRem(10);
  @include flex-row-between-nowrap;
}
</style>