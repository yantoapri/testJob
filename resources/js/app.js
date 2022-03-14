require('./bootstrap');

window.Vue = require('vue').default;
import VueRouter from 'vue-router';
import router from "./router";
import store from "./store/index";

import App from "./components/App";


const app = new Vue({
    router,
    store,
    el: '#app',
    render: h => h(App)
});

