import {
    createRouter,
    createWebHistory,
    type RouteRecordRaw,
} from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        meta: {
            title: 'Home',
            keepAlive: true,
            requireAuth: false,
        },
        component: async () => await import('@/pages/Home.vue'),
    },
    {
        path: '/about',
        name: 'About',
        meta: {
            title: 'About',
            keepAlive: true,
            requireAuth: false,
        },
        component: async () => await import('@/pages/About.vue'),
    },
    {
        path: '/contact',
        name: 'Contact',
        meta: {
            title: 'Contact',
            keepAlive: true,
            requireAuth: false,
        },
        component: async () => await import('@/pages/Contact.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (to, from) => {
    // const token = getToken();
    // if (!token && to.name !== 'Index') {
    //     return { name: 'Index' };
    // }
});

export { router };
