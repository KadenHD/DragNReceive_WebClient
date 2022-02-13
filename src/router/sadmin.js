import Dashboard from '@/views/Dashboard.vue';

import { isSadmin } from '@/functions/beforeEnter.js';

export default [
    {
        path: '/sadmin',
        name: 'Sadmin',
        component: Dashboard,
        meta: {
            title: 'Super-admin Dashboard',
        },
        beforeEnter: isSadmin
    }
]