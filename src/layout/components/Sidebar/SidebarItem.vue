import { reactive } from 'vue';
<template>
  <div v-if="!item.hidden">
    <template v-if="hasOneShowingChild(item.children,item) && (!data.onlyOneChild || !data.onlyOneChild.children||data.onlyOneChild.noShowingChildren) && !item.alwaysShow">
      <router-link
        v-if="data.onlyOneChild && data.onlyOneChild.meta"
        :to="data.onlyOneChild.path"
        class="menu-link"
        :class="{'is-active': avtiveMenu === data.onlyOneChild.path}"
      >
        {{ data.onlyOneChild.meta.title }}
      </router-link>
    </template>
    <div v-else>
      <div v-if="item.meta">{{ item.meta.title }}</div>
      <SidebarItem
        v-for="child in item.children"
        :key="child.path"
        :item="child"
        class="nest-menu"
      />
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from 'vue';
import router from '/@/router/index.js';

export default {
  name: 'SidebarItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup() {
    const avtiveMenu = ref('');
    const data = reactive({
      onlyOneChild: {}
    });

    function hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          data.onlyOneChild = item
          return true
        }
      })

      if (showingChildren.length === 1) {
        return true
      }

      if (showingChildren.length === 0) {
        data.onlyOneChild = { ...parent, path: '', noShowingChildren: true }
        return true
      }

      return false
    }

    onMounted(() => {
      avtiveMenu.value = router.currentRoute.value.path;
    })

    return {
      avtiveMenu,
      data,
      hasOneShowingChild
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-link {
  color: #bfcbd9;
  &.is-active {
    color: #409eff;
  }
}
.nest-menu {
  height: 40px;
  line-height: 40px;
  padding: 0 45px;
}
</style>
