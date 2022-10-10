import { createRouter, createWebHistory } from 'vue-router'

import TableData from "@/components/TableData";
import AddMovies from "@/router/AddMovies";

const routes = [

    {
        path: '/',
        component: TableData
    },
    {
        path: '/add',
        component: AddMovies
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router