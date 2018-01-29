import Vue from 'vue';
import Router from 'vue-router';

// Containers
const Full = resolve =>
    import ('src/containers/Full');

// Views
const Dashboard = resolve =>
    import ('src/views/Dashboard/Dashboard');

Vue.use(Router);

const router = new Router({
    mode: 'hash',
    linkActiveClass: 'open active',
    scrollBehavior: () => ({ y: 0 }), //因为admin的项目，不需要保留滚动位置
    routes: [{
        path: '/',
        redirect: '/dashboard',
        name: 'Home',
        component: Full,
        children: [{
            path: 'dashboard',
            name: 'Dashboard',
            component: Dashboard,
            meta: {
                title: '首页',
            },
        }, ],
    }, ],
});

// 路由变化
router.afterEach(function(to) {
    if (to.meta && to.meta.title) {
        //console.info(to.meta.title)
        document.title = to.meta.title;
    }
    // store.commit('closeModal');
});

export default router;