<template>
  <section class="app-main">
    <router-view :key="key" v-slot="{Component}">
      <transition>
        <keep-alive>
          <component :is="Component"></component>
        </keep-alive>
      </transition>
    </router-view>
  </section>
</template>

<script>
export default {
  name: "AppMain",
  computed: {
    key() {
      return this.$route.path;
    },
  },
};
</script>

<style>
</style>