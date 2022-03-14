import Vue from 'vue';
import VueRouter from 'vue-router';

import AllJob from "./page/alljob";
import Blog from './page/blog';
import jobDetail from './page/jobDetail';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'alljob',
            component: AllJob
        },
        {
            path: '/blog',
            name: 'blog',
            component: Blog
        },
        {
            path:'/job/:id',
            name:"jobDetail",
            component:jobDetail
        }
    ]
});

export default router;