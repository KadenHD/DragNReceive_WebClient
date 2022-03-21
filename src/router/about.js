import Us from '@/views/about/company/Us.vue';
import Services from '@/views/about/company/Services.vue';
import Policy from '@/views/about/company/Policy.vue';

import Contact from '@/views/about/help/Contact.vue';
import Join from '@/views/about/help/Join.vue';

import Partner from '@/views/about/buy/Partner.vue';
import Download from '@/views/about/buy/Download.vue';

import { isNotLogged } from '@/utils/beforeEnter.js';

export default [
    {
        path: '/about/company/us',
        name: 'AboutUs',
        component: Us,
        meta: {
            title: 'À propos de nous',
        },
        beforeEnter: isNotLogged
    },
    {
        path: '/about/company/services',
        name: 'AboutServices',
        component: Services,
        meta: {
            title: 'Nos services',
        },
        beforeEnter: isNotLogged
    },
    {
        path: '/about/company/policy',
        name: 'AboutPolicy',
        component: Policy,
        meta: {
            title: 'Politique de confidentialité',
        },
        beforeEnter: isNotLogged
    },
    {
        path: '/about/help/contact',
        name: 'AboutContact',
        component: Contact,
        meta: {
            title: 'Nous contacter',
        },
        beforeEnter: isNotLogged
    },
    {
        path: '/about/help/join',
        name: 'AboutJoin',
        component: Join,
        meta: {
            title: 'Nous rejoindre',
        },
        beforeEnter: isNotLogged
    },
    {
        path: '/about/buy/partner',
        name: 'AboutPartner',
        component: Partner,
        meta: {
            title: 'Nos partenaires',
        },
        beforeEnter: isNotLogged
    },
    {
        path: '/about/buy/download',
        name: 'AboutDownload',
        component: Download,
        meta: {
            title: 'Télécharger',
        },
        beforeEnter: isNotLogged
    },
]