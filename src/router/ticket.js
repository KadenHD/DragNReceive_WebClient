import Tickets from '@/views/ticket/Tickets.vue';
import Ticket from '@/views/ticket/Ticket.vue';
import TicketCreate from '@/views/ticket/TicketCreate.vue';

import { isLogged, isPartner } from '@/functions/beforeEnter.js';

export default [
    {
        path: '/tickets',
        name: 'Tickets',
        component: Tickets,
        meta: {
            title: 'Mes tickets'
        },
        beforeEnter: isLogged,
    },
    {
        path: '/ticket/:id',
        name: 'Ticket',
        component: Ticket,
        meta: {
            title: 'Ticket'
        },
        beforeEnter: isLogged,
    },
    {
        path: '/ticket/create',
        name: 'TicketCreate',
        component: TicketCreate,
        meta: {
            title: 'Mes tickets'
        },
        beforeEnter: isPartner,
    },
]