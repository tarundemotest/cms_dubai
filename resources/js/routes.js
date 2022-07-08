const Welcome = () => import('./components/Welcome.vue' /* webpackChunkName: "resource/js/components/welcome" */)
const PagesList = () => import('./components/Pages/List.vue' /* webpackChunkName: "resource/js/components/Pages/list" */)
const PagesCreate = () => import('./components/Pages/Add.vue' /* webpackChunkName: "resource/js/components/Pages/add" */)
const PagesEdit = () => import('./components/Pages/Edit.vue' /* webpackChunkName: "resource/js/components/Pages/edit" */)

export const routes = [
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
    }
]