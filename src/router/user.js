import Users from '@/views/user/Users.vue';
import UserCreate from '@/views/user/UserCreate.vue';

import { isAdminOrSadmin } from '@/utils/beforeEnter.js';

export default [
    {
        path: '/users',
        name: 'Users',
        component: Users,
        meta: {
            title: 'Gestion des utilisateurs'
        },
        beforeEnter: isAdminOrSadmin,
    },
    {
        path: '/user/create',
        name: 'UserCreate',
        component: UserCreate,
        meta: {
            title: 'Créer un utilisateur '
        },
        beforeEnter: isAdminOrSadmin,
    },
]