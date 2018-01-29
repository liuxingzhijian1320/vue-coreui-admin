<template>
  <div class="app">
    <!-- 头部 -->
    <AppHeader/>
    <!-- 内容区域 -->
    <div class="app-body">
      <!-- 导航栏 侧边栏 -->
      <Sidebar :navItems="nav"/>
      <!--  主体区域 -->
      <main class="main">
        <!-- 面包屑 -->
        <breadcrumb :list="list"/>
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
import nav from '../_nav';

import {
  Header as AppHeader,
  Sidebar,
  Aside as AppAside,
  Footer as AppFooter,
  Breadcrumb,
} from '../components/';

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
    return {
      nav: nav.items,
    };
  },
  computed: {
    name() {
      return this.$route.name;
    },
    list() {
      return this.$route.matched;
    },
  },
};
</script>
