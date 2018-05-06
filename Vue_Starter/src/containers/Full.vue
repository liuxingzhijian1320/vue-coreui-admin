<template>
  <div class="app">
    <!-- 头部 -->
    <AppHeader/>
    <!-- 内容区域 -->
    <div class="app-body">
      <!-- 导航栏 侧边栏 -->
      <Sidebar :navItems="routes" />
      <!--  主体区域 -->
      <main class="main">
        <!-- 面包屑 -->
        <breadcrumb :list="list" />
        <!-- 路由视图 -->
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
      <!-- 右侧边栏 暂时隐藏起来 -->
      <AppAside/>
    </div>
    <!-- 底部 -->
    <AppFooter/>
  </div>
</template>

<script>
import {
  Header as AppHeader,
  Sidebar,
  Aside as AppAside,
  Footer as AppFooter,
  Breadcrumb,
} from '../components/base';

export default {
  name: 'full',
  components: {
    AppHeader,
    Sidebar,
    AppAside,
    AppFooter,
    Breadcrumb,
  },
  data() {
    return {};
  },
  computed: {
    name() {
      return this.$route.name;
    },
    list() {
      return this.$route.matched;
    },
    routes() {
      let list = this.$router.options.routes[0].children;
      let arr = [];
      list.forEach((n, i) => {
        if (!n.children) {
          n.meta.url = n.path;
          n.meta.name = n.meta.title;
          delete n.meta.title;
          arr.push(n.meta);
        }
      });
      return arr;
    },
  },
  mounted() {},
};
</script>
