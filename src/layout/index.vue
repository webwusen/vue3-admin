<template>
  <div>
    <navbar />
    <app-main />
  </div>
</template>

<script>
import { AppMain, Navbar } from "./components";

export default {
  name: "Layout",
  components: {
    AppMain,
    Navbar,
  },
};
</script>

<style lang="scss" scoped>
</style>