import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './../components/HcodeSectionBanner.vue'
import News from './../components/HcodeSectionNews.vue'

Vue.use(VueRouter)

export default new VueRouter({
    linkActiveClass:'link-active',
    routes: [{
        path: '/',
        component: Home
    }, {
        path: '/news',
        component: News
    }] 
})