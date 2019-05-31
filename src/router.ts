import Vue from 'vue';
import Router from 'vue-router';
import RadialSpanHome from './views/RadialSpanHome.vue';
import ProximityQueryHome from './views/ProximityQueryHome.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/select-query',
            name: 'select-query',
            component: RadialSpanHome,
        },
        {
            path: '/proximity-query',
            name: 'proximity-query',
            component: ProximityQueryHome,
            alias: "/"
        }
    ],
});
