import Vue from 'vue';
import Router from 'vue-router';

// Containers
import Full from 'src/containers/Full';

// Views
import Dashboard from 'src/views/Dashboard';

Vue.use(Router);

export default new Router({
    mode: 'hash',
    linkActiveClass: 'open active',
    scrollBehavior: () => ({ y: 0 }),
    routes: [{
        path: '/',
        redirect: '/dashboard',
        name: 'Home',
        component: Full,
        children: [{
            path: 'dashboard',
            name: 'Dashboard',
            component: Dashboard,
        }, ],
    }, ],
});