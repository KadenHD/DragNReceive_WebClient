import Login from '@/views/auth/Login.vue';
import Forgot from '@/views/auth/Forgot.vue';
import ForgotSuccess from '@/views/auth/ForgotSuccess.vue';
import Reset from '@/views/auth/Reset.vue';
import Dashboard from '@/views/Dashboard.vue';

import { isNotLogged, isSadmin, isAdmin, isPartner } from '@/utils/beforeEnter.js';

export default [
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            title: 'Connexion',
        },
        beforeEnter: isNotLogged
    },
    {
        path: '/forgot',
        name: 'Forgot',
        component: Forgot,
        meta: {
            title: 'Mot de passe oublié',
        },
        beforeEnter: isNotLogged
    },
    {
        path: '/forgotsuccess',
        name: 'ForgotSuccess',
        component: ForgotSuccess,
        meta: {
            title: 'Email envoyé',
        },
        beforeEnter: isNotLogged
    },
    {
        path: '/reset/:userId/:token',
        name: 'Reset',
        component: Reset,
        meta: {
            title: 'Réinitialisation de mot de passe',
        },
        beforeEnter: isNotLogged
    },
    {
        path: '/sadmin',
        name: 'Sadmin',
        component: Dashboard,
        meta: {
            title: 'Dashboard',
        },
        beforeEnter: isSadmin
    },
    {
        path: '/admin',
        name: 'Admin',
        component: Dashboard,
        meta: {
            title: 'Dashboard',
        },
        beforeEnter: isAdmin,
    },
    {
        path: '/partner',
        name: 'Partner',
        component: Dashboard,
        meta: {
            title: 'Dashboard',
        },
        beforeEnter: isPartner
    },
]