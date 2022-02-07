import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Anchor from '../views/Anchor.vue'
import Category from '../views/Category.vue'
import News from '../views/News.vue'
import Search from '../views/Search.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/anchor',
        name: 'Anchor',
        component: Anchor,
    },
    {
        path: '/category',
        name: 'Category',
        component: Category,
    },
    {
        path: '/news',
        name: 'News',
        component: News,
    },
    {
        path: '/search',
        name: 'Search',
        component: Search,
    },
]

const router = new VueRouter({
    routes,
    // mode: history,
})

export default router
