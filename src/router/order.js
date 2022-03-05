import Orders from '@/views/order/Orders.vue';

import { isPartner } from '@/functions/beforeEnter.js';

export default [
    {
        path: '/orders',
        name: 'Orders',
        component: Orders,
        meta: {
            title: 'Gestion des commandes'
        },
        beforeEnter: isPartner,
    }
]