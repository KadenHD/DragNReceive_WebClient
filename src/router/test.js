import UserCreate from '@/views/test/UserCreate.vue';

export default [
    {
        path: '/users',
        name: 'UserCreate',
        component: UserCreate,
        meta: {
            title: 'UserCreate',
        }
    },
]