import Vue from 'vue';
import Router from 'vue-router';
import RadialSpanHome from './views/RadialSpanHome.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: RadialSpanHome,
        }
    ],
});
