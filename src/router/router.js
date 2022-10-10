import { createRouter, createWebHistory } from 'vue-router'

import HelloWorld from "@/components/HelloWorld";
import TableData from "@/components/TableData";
import AddMovies from "@/components/AddMovies";

const routes = [
    {
        path: '/',
        component: HelloWorld
    },
    {
        path: '/tableData',
        component: TableData
    },
    {
        path: '/addMovies',
        component: AddMovies
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router