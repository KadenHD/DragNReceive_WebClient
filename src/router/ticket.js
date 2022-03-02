import Tickets from '@/views/ticket/Tickets.vue';

import { isLogged } from '@/functions/beforeEnter.js';

export default [
    {
        path: '/tickets',
        name: 'Tickets',
        component: Tickets,
        meta: {
            title: 'Mes tickets'
        },
        beforeEnter: isLogged,
    }
]