<template>
  <div class="sidebar">
    <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
      <sidebar-item v-for="route in menu" :key="route.path" :item="route" class="menu-item" />
    </a-menu>
  </div>
</template>

<script>
import { constantRoutes } from "@/router/index.js";
import SidebarItem from "./SidebarItem.vue";

export default {
  name: "Sidebar",
  components: {
    SidebarItem,
  },
  setup() {
    const menu = constantRoutes.slice();
    return {
      menu,
      selectedKeys: [],
    };
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  height: 100%;
  background-color: #304156;
}
.menu-item {
  height: 50px;
  line-height: 50px;
  padding: 0 20px;
}
</style>
