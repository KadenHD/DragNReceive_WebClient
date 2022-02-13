import Dashboard from '@/views/Dashboard.vue';

import { isPartner } from '@/functions/beforeEnter.js';

export default [
    {
        path: '/partner',
        name: 'Partner',
        component: Dashboard,
        meta: {
            title: 'Partner Dashboard',
        },
        beforeEnter: isPartner
    }
]