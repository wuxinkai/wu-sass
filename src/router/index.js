import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/calculate',
            name: 'calculate',
            component: resolve => require(["@/components/2calculate.vue"], resolve),
        },
        {
            path: '/',
            name: 'variable',
            component: resolve => require(["@/components/variable.vue"], resolve),
        },
        {
            path: '/3extend',
            name: '3extend',
            component: resolve => require(["@/components/3extend.vue"], resolve),
        },
        {
            path: '/4if',
            name: '4if',
            component: resolve => require(["@/components/4if.vue"], resolve),
        },
        {
            path: '/5each',
            name: '5each',
            component: resolve => require(["@/components/5each.vue"], resolve),
        },
        {
            path: '/function',
            name: 'function',
            component: resolve => require(["@/components/6function.vue"], resolve),
        },
    ]
})