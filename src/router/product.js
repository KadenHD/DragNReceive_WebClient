import Products from '@/views/product/Products.vue';

import { isAdminOrSadmin, isPartner } from '@/functions/beforeEnter.js';

export default [
    {
        path: '/shop/:id/products',
        name: 'Products',
        component: Products,
        meta: {
            title: 'Produit de la boutique'
        },
        beforeEnter: isAdminOrSadmin,
    },
    {
        path: '/products',
        name: 'MyProducts',
        component: Products,
        meta: {
            title: 'Gestion des boutiques'
        },
        beforeEnter: isPartner,
    },
]