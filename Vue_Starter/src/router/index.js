import Vue from 'vue';
import Router from 'vue-router';

// Containers
const Full = resolve =>
    import ('src/containers/Full');

// Views
//首页
const Dashboard = resolve =>
    import ('src/views/Dashboard/Dashboard');
//登陆
const Login = resolve =>
    import ('src/views/Login/Login');
//商品
const Goods = resolve =>
    import ('src/views/Goods/Goods');
const GoodsAddUpdate = resolve =>
    import ('src/views/Goods/Goods.add.upadte');
//弹出层
const Modal = resolve =>
    import ('src/views/Modal/Modal');

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
            children: [
                //首页
                {
                    path: 'dashboard',
                    name: 'Dashboard',
                    component: Dashboard,
                    meta: {
                        title: '首页',
                    },
                },

                //商品列表
                {
                    path: 'Goods',
                    name: 'Goods',
                    component: Goods,
                    meta: {
                        title: '商品',
                    },
                },

                //商品新增
                {
                    path: 'Goods',
                    // name: 'Goods',
                    // component: Goods,
                    meta: {
                        title: '商品',
                    },
                    component: {
                        render(c) {
                            return c('router-view');
                        },
                    },
                    children: [{
                        path: 'GoodsAdd',
                        name: 'GoodsAdd',
                        component: GoodsAddUpdate,
                        meta: {
                            title: '商品新增',
                        },
                    }, ],
                },

                //商品编辑
                {
                    path: 'Goods',
                    // name: 'Goods',
                    // component: Goods,
                    meta: {
                        title: '商品',
                    },
                    component: {
                        render(c) {
                            return c('router-view');
                        },
                    },
                    children: [{
                        path: 'GoodsUpdate/:id',
                        name: 'GoodsUpdate',
                        component: GoodsAddUpdate,
                        meta: {
                            title: '商品编辑',
                        },
                    }, ],
                },

                //弹出层
                {
                    path: 'Modal',
                    name: 'Modal',
                    component: Modal,
                    meta: {
                        title: '弹出层',
                    },
                },
            ],
        },
        {
            path: '/admin',
            redirect: '/admin/login',
            name: 'admin',
            component: {
                render(c) {
                    return c('router-view');
                },
            },
            children: [{
                path: 'login',
                name: 'Login',
                component: Login,
            }, ],
        },
    ],
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