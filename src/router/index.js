import Vue from "vue";
import VueRouter from "vue-router";

import Home from '@/views/Home.vue';
import Profile from '@/views/Profile.vue';
import NotFound from '@/views/NotFound.vue';

import aboutRouter from "./about.js";
import authRouter from "./auth.js";
import orderRouter from './order.js';
import productRouter from './product.js';
import shopRouter from './shop.js';
import ticketRouter from './ticket.js';
import userRouter from './user.js';

import { homeRedirections, isLogged } from '@/utils/beforeEnter.js';

Vue.use(VueRouter);

const routes = [
    ...aboutRouter,
    ...authRouter,
    ...orderRouter,
    ...productRouter,
    ...shopRouter,
    ...ticketRouter,
    ...userRouter,
    {
        path: '/',
        redirect: { name: 'Home' }
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {
            title: 'Accueil',
        },
        beforeEnter: homeRedirections
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
        meta: {
            title: 'Profil',
        },
        beforeEnter: isLogged
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

router.afterEach((to) => document.title = to.meta.title); /* dynamically change the title after changing route */

export default router;
