<template>
  <div id="app">
    <IndexMain />
  </div>
</template>

<script>
import IndexMain from "@/views/Index.vue";

export default {
  name: "App",
  components: {
    IndexMain,
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/app";
</style>
