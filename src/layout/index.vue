<template>
  <div class="layout">
    <a-layout class="height100">
      <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
        <sidebar />
      </a-layout-sider>
      <a-layout>
        <a-layout-header>
          <menu-unfold-outlined
            v-if="collapsed"
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
          <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
          <navbar />
        </a-layout-header>
        <a-layout-content>
          <app-main />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import { AppMain, Navbar } from "./components";
import sidebar from "./components/Sidebar/index.vue";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue";
export default {
  name: "Layout",
  components: {
    AppMain,
    Navbar,
    sidebar,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },
  data() {
    return {
      selectedKeys: ["1"],
      collapsed: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.layout {
  height: 100%;

  .ant-layout-header {
    display: flex;
    align-items: center;
    background: #fff;
    padding: 0;
  }
  .trigger {
    font-size: 18px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }
}
</style>
