import { RouteRecordRaw } from 'vue-router';
import { RouterView } from 'vue-router';
import menuList from '@/layout/menuList'; // 导入你的菜单数据

interface MenuItem {
    path: string;
    meta: {
        title: string;
        icon: string;
        hidden?: boolean;
    };
    children?: MenuItem[];
}

// 组件映射表
const componentMap: { [key: string]: any } = {
    '/fullNetworkResources/fullNetworkResourcesOne': () => import('@/views/workbenches/fullNetworkResources/fullNetworkResourcesOne/index.vue'),
    '/fullNetworkResources/fullNetworkResourcesTwo': () => import('@/views/workbenches/fullNetworkResources/fullNetworkResourcesTwo/index.vue'),
    // 其他路径的组件映射
};

// 定义递归函数生成路由表
function generateRoutes(menuList: MenuItem[]): RouteRecordRaw[] {
    return menuList.map((item) => {
        const route: RouteRecordRaw = {
            path: item.path,
            name: item.meta.title,
            // 如果父节点没有子节点，则设置 component，否则不设置
            component: item.children && item.children.length > 0 ? RouterView : (componentMap[item.path] || (() => import('@/views/error-page/404.vue'))),
            meta: {
                title: item.meta.title,
                icon: item.meta.icon,
                hidden: item.meta.hidden || false,
            },
        };

        // 如果有子路由，递归生成子路由并赋值给 children
        if (item.children && item.children.length > 0) {
            (route as RouteRecordRaw).children = generateRoutes(item.children)
        }

        return route;
    });
}

// 使用生成的路由
const dynamicRoutes: RouteRecordRaw[] = generateRoutes(menuList);
console.log(dynamicRoutes);

export default dynamicRoutes;
