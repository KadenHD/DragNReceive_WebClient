import Vue from "vue";
import VueRouter from "vue-router";

import UserCreate from '@/views/user/UserCreate.vue';

import Home from '@/views/Home.vue';
import NotFound from '@/views/NotFound.vue';

import authRouter from "./auth.js";
import aboutRouter from "./about.js";
import { isLogged } from "@/functions/beforeEnter.js";

Vue.use(VueRouter);

const routes = [
    {
        path: '/users',
        name: 'UserCreate',
        component: UserCreate,
        meta: {
            title: 'UserCreate',
        },
        beforeEnter: isLogged
    },

    //////////////////////////////////////

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
