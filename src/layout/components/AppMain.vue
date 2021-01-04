<template>
  <section class="app-main">
    <router-view :key="key" v-slot="{Component}">
      <transition mode="out-in">
        <keep-alive>
          <component :is="Component" />
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

<style lang="scss" scoped>
.app-main {
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
  padding: 15px;
}
</style>
