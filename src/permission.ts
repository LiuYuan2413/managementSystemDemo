// 路由守卫
import router from "@/router";
router.beforeEach((to, from, next) => {
    const hasToken = localStorage.getItem("acctoken");
    if (hasToken) {
        if (to.path === '/login') {
            next({ path: "/" })
        }
    } else {
        next('/login')
    }
})
