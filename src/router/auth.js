import Login from '@/views/auth/Login.vue';
import Forgot from '@/views/auth/Forgot.vue';
import Reset from '@/views/auth/Reset.vue';

export default [
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            title: 'Login',
        }
    },
    {
        path: '/forgot',
        name: 'Forgot',
        component: Forgot,
        meta: {
            title: 'Forgot',
        }
    },
    {
        path: '/reset/:token',
        name: 'Reset',
        component: Reset,
        meta: {
            title: 'Reset',
        }
    },
]