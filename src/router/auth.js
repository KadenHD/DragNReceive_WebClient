import Login from '@/views/auth/Login.vue';
import Forgot from '@/views/auth/Forgot.vue';
import Reset from '@/views/auth/Reset.vue';
import { isNotLogged } from '@/functions/beforeEnter.js';

export default [
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            title: 'Login',
        },
        beforeEnter: isNotLogged
    },
    {
        path: '/forgot',
        name: 'Forgot',
        component: Forgot,
        meta: {
            title: 'Forgot',
        },
        beforeEnter: isNotLogged
    },
    {
        path: '/reset/:token',
        name: 'Reset',
        component: Reset,
        meta: {
            title: 'Reset',
        },
        beforeEnter: isNotLogged
    },
]