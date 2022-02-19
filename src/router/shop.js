import Shops from '@/views/shop/Shops.vue';
import ShopCreate from '@/views/shop/ShopCreate.vue';
import Shop from '@/views/shop/Shop.vue';

import { isAdminOrSadmin, isPartner } from '@/functions/beforeEnter.js';

export default [
    {
        path: '/shop',
        name: 'MyShop',
        component: Shop,
        meta: {
            title: 'Boutique'
        },
        beforeEnter: isPartner,
    },
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
    {
        path: '/shop/:id',
        name: 'Shop',
        component: Shop,
        meta: {
            title: 'Boutique'
        },
        beforeEnter: isAdminOrSadmin,
    },
]