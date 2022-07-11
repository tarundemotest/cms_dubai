import { createRouter, createWebHistory } from 'vue-router'


const Welcome = () => import('./components/Welcome.vue') 
const PagesList = () => import('./components/Pages/List.vue')
const PagesCreate = () => import('./components/Pages/Add.vue')
const PagesEdit = () => import('./components/Pages/Edit.vue')
const PagesTree = () => import('./components/Pages/Tree.vue')


const routes = [
    {
        name: 'home',
        path: '/',
        component: Welcome
    },
    {
        name: 'pagesList',
        path: '/pageslist',
        component: PagesList
    },
    {
        name: 'PagesEdit',
        path: '/Pages/:id/edit',
        component: PagesEdit
    },
    {
        name: 'PagesAdd',
        path: '/Pages/add',
        component: PagesCreate
    },
    {
        name: 'pagesTree',
        path: '/pagestree',
        component: PagesTree
    },
    {
        name: 'PageTreeLoop',
        path: '/pagestree/:slug',
        component: PagesTree
    },
  ];
  
  export default createRouter({
    history: createWebHistory(),
    routes
})

