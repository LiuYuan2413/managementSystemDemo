import { createRouter, createWebHistory } from "vue-router";
import Layout from '@/layout/index.vue'
import dynamicRoutes from './dynamicRoutes'; // 导入生成的动态路由
const staticRoutes = [
    {
        path: "/login",
        component: () => import("@/views/login/index.vue"),
        meta: { hidden: true },
    },
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard', // 自动重定向到 /dashboard
        children: [
            {
                path: '/dashboard',
                name: 'dashboard',
                component: () => import('@/views/dashboard/index.vue')
            },
            ...dynamicRoutes
        ]
    }];

const router = createRouter({
    history: createWebHistory(),
    routes: staticRoutes,
});

// 导出
export default router