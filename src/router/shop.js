import Shops from '@/views/shop/Shops.vue';
import ShopCreate from '@/views/shop/ShopCreate.vue';

import { isAdminOrSadmin } from '@/functions/beforeEnter.js';

export default [
    {
        path: '/shops',
        name: 'Shops',
        component: Shops,
        meta: {
            title: 'Gestion des boutiques'
        },
        beforeEnter: isAdminOrSadmin,
    },
    {
        path: '/shop/create',
        name: 'ShopCreate',
        component: ShopCreate,
        meta: {
            title: 'Créer une boutique'
        },
        beforeEnter: isAdminOrSadmin,
    },
]