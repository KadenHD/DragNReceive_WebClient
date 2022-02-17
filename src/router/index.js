import Vue from "vue";
import VueRouter from "vue-router";

import Home from '@/views/Home.vue';
import NotFound from '@/views/NotFound.vue';

import Users from '@/views/user/Users.vue';
import UserCreate from '@/views/user/UserCreate.vue';

import authRouter from "./auth.js";
import aboutRouter from "./about.js";

import { homeRedirections, isAdminOrSadmin } from '@/functions/beforeEnter.js';

Vue.use(VueRouter);

const routes = [
    // test
    {
        path: '/users',
        name: 'Users',
        component: Users,
        meta: {
            title: 'Users'
        },
        beforeEnter: isAdminOrSadmin,
    },
    {
        path: '/user/create',
        name: 'UserCreate',
        component: UserCreate,
        meta: {
            title: 'User Create'
        },
        beforeEnter: isAdminOrSadmin,
    },
    ...authRouter,
    ...aboutRouter,
    {
        path: '/',
        redirect: { name: 'Home' }
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {
            title: 'Home',
        },
        beforeEnter: homeRedirections
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
        redirect: { name: 'NotFound' }
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

router.afterEach((to) => document.title = to.meta.title); // dynamically change the title after changing route

export default router;
