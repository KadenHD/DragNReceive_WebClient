import Vue from "vue";
import VueRouter from "vue-router";

import Home from '@/views/Home.vue';
import NotFound from '@/views/NotFound.vue';

import authRouter from "./auth.js";
import aboutRouter from "./about.js";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {
            title: 'Home',
        }
    },
    ...authRouter,
    ...aboutRouter,
    {
        path: '/404',
        name: 'NotFound',
        component: NotFound,
        meta: {
            title: '404',
        }
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404'
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

router.afterEach((to) => {
    document.title = to.meta.title;
});

export default router;
