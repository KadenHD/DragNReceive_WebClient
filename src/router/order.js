import Orders from '@/views/order/Orders.vue';
import Order from '@/views/order/Order.vue';

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
    },
    {
        path: '/order/:number',
        name: 'Order',
        component: Order,
        meta: {
            title: 'Commande'
        },
        beforeEnter: isPartner,
    },
]