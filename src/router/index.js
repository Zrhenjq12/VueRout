import { createRouter, createWebHistory } from 'vue-router';

import Cart from '../views/card';

import Main from '../views/main';

let routes = [{
        name: 'cart',
        path: '/card',
        component: Cart
    },
    {
        name: 'main',
        path: '/',
        component: Main
    },
]

export default createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});