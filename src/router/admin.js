import Dashboard from '@/views/Dashboard.vue';

import { isAdmin } from '@/functions/beforeEnter.js';

export default [
    {
        path: '/admin',
        name: 'Admin',
        component: Dashboard,
        meta: {
            title: 'Admin Dashboard',
        },
        beforeEnter: isAdmin
    }
]