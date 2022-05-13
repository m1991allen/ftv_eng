import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Anchor from '../views/Anchor.vue'
import Category from '../views/Category.vue'
import News from '../views/News.vue'
import Search from '../views/Search.vue'
import Error from '../views/Error.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            breadcrumb: [
                {
                    name: 'Home',
                },
            ],
        },
    },
    {
        path: '/anchor',
        name: 'Anchor',
        component: Anchor,
        meta: {
            breadcrumb: [
                {
                    name: 'Home',
                    link: '/',
                },
                {
                    name: 'Anchor',
                },
            ],
        },
    },
    {
        path: '/category',
        name: 'Category',
        component: Category,
        meta: {
            breadcrumb: [
                {
                    name: 'Home',
                    link: '/',
                },
                {
                    name: 'Category',
                    link: '/category',
                },
                {
                    name: 'All',
                },
            ],
        },
    },
    {
        path: '/news',
        name: 'News',
        component: News,
        meta: {
            breadcrumb: [
                {
                    name: 'Home',
                    link: '/',
                },
                {
                    name: 'News',
                    link: '/news',
                },
                {
                    name: '{{Id}}',
                },
            ],
        },
    },
    {
        path: '/search',
        name: 'Search',
        component: Search,
        meta: {
            breadcrumb: [
                {
                    name: 'Home',
                    link: '/',
                },
                {
                    name: 'Search',
                },
            ],
        },
    },
    {
        path: '/error',
        name: 'Error',
        component: Error,
        meta: {
            breadcrumb: [
                {
                    name: 'Home',
                    link: '/',
                },
                {
                    name: 'Error',
                },
            ],
        },
    },
]

const router = new VueRouter({
    routes,
    // mode: history,
})

export default router
