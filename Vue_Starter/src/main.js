import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App';
import router from './router';

Vue.use(BootstrapVue);

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
        App,
    },
});