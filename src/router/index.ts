import { createRouter, createWebHashHistory } from 'vue-router'
//创建并暴露一个路由器
const routes = [
    {
        path: '/',
        component: () => import('@/views/home/index.vue'),
        redirect: '/template',
        children: [
            {
                path: '/template',
                component: () => import('../components/importTmpl.vue')
            },
            {
                path: '/element',
                component: () => import('../components/tools.vue')
            },
            {
                path: '/cartoon',
                component: () => import('../components/importSvgEl.vue')
            },
            {
                path: '/layer',
                component: () => import('../components/layer.vue')
            }
        ]
    }
];

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default router