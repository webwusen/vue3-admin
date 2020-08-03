<template>
  <div class="layou height100">
    <sidebar />
    <navbar />
    <app-main />
  </div>
</template>

<script>
import { AppMain, Navbar } from './components';
import sidebar from './components/Sidebar/index.vue'

export default {
  name: 'Layout',
  components: {
    AppMain,
    Navbar,
    sidebar
  }
};
</script>

<style lang="scss" scoped>
.layou {
  display: flex;
}
</style>
