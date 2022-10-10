import { createRouter, createWebHistory } from 'vue-router'

// import TableData from "@/components/TableData";
import AddMovies from "@/router/AddMovies";

const routes = [

    {
        path: '/',
        name:'/',
        component: () => import('../components/HomeView.vue')
    },
    {
        path: '/add',
        component: AddMovies
    },
    {
        path: '/getall',
        name:'getall',
        component: () => import('../components/TableData.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router