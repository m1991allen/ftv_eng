import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        hashtag: '',
        hashtags: ['All', 'International', 'Politics', 'Society', 'Sports', 'Business', 'Life', 'entertainment'],
        search: '',
        breadcrumb: 'Home',
    },
    mutations: {},
    actions: {},
    modules: {},
})
