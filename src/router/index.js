import Vue from "vue";
import VueRouter from "vue-router";

import List from '../views/List'
import Details from '../views/Details'

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
    {
        path:"/",
        component:List
    },
    {
        name:'details',
        path: "/details/:infoIsid",
        component: Details
    }
]

var router =  new VueRouter({
    routes
})
export default router;