import Vue from "vue";
import VueRouter from "vue-router";

import Home from '@/views/Home.vue';
import NotFound from '@/views/NotFound.vue';

import authRouter from "./auth.js";
import aboutRouter from "./about.js";
import partnerRouter from './partner.js';
import adminRouter from './admin.js';
import sadminRouter from './sadmin.js';


Vue.use(VueRouter);

const routes = [
    ...partnerRouter,
    ...adminRouter,
    ...sadminRouter,
    ...authRouter,
    ...aboutRouter,
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
        },
        //gestion de toutes les redirections si loggedin et par roles etc
    },
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

router.afterEach((to) => document.title = to.meta.title); // dynamically change the title after changing route

export default router;
