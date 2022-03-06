import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './../components/HcodeSectionBanner.vue'
import News from './../components/HcodeSectionNews.vue'
import Notice from './../components/HcodeSectionNewsNotice.vue'
import Hcode404 from './../components/Hcode404.vue'

Vue.use(VueRouter)

export default new VueRouter({
    linkActiveClass:'link-active',
    routes: [{
        path: '/',
        component: Home
    }, {
        path: '/news',
        alias: '/notices',
        component: News
    }, {
        path: '/news/:idnotice',
        name: 'notice',
        component: Notice,
        beforeEnter: (to, from, next) => {
            next();
        }
    }, {
        path: '/admin',
        redirect: '/'
        },{
        path: '*',
        component:Hcode404    
    }] 
})