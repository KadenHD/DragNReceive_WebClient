import Products from '@/views/product/Products.vue';
import ProductCreate from '@/views/product/ProductCreate.vue';

import { isAdminOrSadmin, isPartner } from '@/utils/beforeEnter.js';

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
    {
        path: '/products/create',
        name: 'ProductCreate',
        component: ProductCreate,
        meta: {
            title: 'Créer produit'
        },
        beforeEnter: isPartner,
    },
]