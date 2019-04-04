import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';


// START element setup
import Element from 'element-ui';
Vue.use(Element);
import 'element-ui/lib/theme-chalk/index.css';
// END element setup


Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
