import { createWebHashHistory, createRouter, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [

]

const route = createRouter({
    routes,
    history: createWebHashHistory()
})

export default route