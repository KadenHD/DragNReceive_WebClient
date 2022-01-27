import Us from '@/views/about/company/Us.vue';
import Services from '@/views/about/company/Services.vue';
import Policy from '@/views/about/company/Policy.vue';

import Contact from '@/views/about/help/Contact.vue';
import Join from '@/views/about/help/Join.vue';

import Partner from '@/views/about/buy/Partner.vue';
import Download from '@/views/about/buy/Download.vue';

export default [
    {
        path: '/about/company/us',
        name: 'About-us',
        component: Us,
        meta: {
            title: 'À propos de nous',
        }
    },
    {
        path: '/about/company/services',
        name: 'Services',
        component: Services,
        meta: {
            title: 'Nos services',
        }
    },
    {
        path: '/about/company/policy',
        name: 'Policy',
        component: Policy,
        meta: {
            title: 'Politique de confidentialité',
        }
    },
    {
        path: '/about/help/contact',
        name: 'Contact',
        component: Contact,
        meta: {
            title: 'Nous contacter',
        }
    },
    {
        path: '/about/help/join',
        name: 'Join',
        component: Join,
        meta: {
            title: 'Nous rejoindre',
        }
    },
    {
        path: '/about/buy/partner',
        name: 'Partner',
        component: Partner,
        meta: {
            title: 'Nos partenaires',
        }
    },
    {
        path: '/about/buy/download',
        name: 'Download',
        component: Download,
        meta: {
            title: 'Télécharger',
        }
    },
]