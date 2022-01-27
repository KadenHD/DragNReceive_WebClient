import Us from '@/views/about/company/Us.vue';
import Services from '@/views/about/company/Services.vue';
import Policy from '@/views/about/company/Policy.vue';

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
]