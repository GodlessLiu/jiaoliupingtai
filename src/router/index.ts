import { createWebHistory, createRouter, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        component: () => import("../views/Home.vue"),
        redirect: "/index",
        children: [
            {
                path: "/index",
                component: () => import("../views/index.vue")
            }
        ]
    }
]

const route = createRouter({
    routes,
    history: createWebHistory()
})

export default route