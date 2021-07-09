import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'
import middlewarePipeline from './middleware-pipeline'

Vue.use(VueRouter) 

export default function (/* { store, ssrContext } */ { store }) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  /**
   * Run the middleware(s) using the beforeEach hook
   */
  /*
  Router.beforeEach((to, from, next) => {
    
    if (!to.meta.middlewares) return next()
    let middlewares = to.meta.middlewares
    let context = { to, from, next, store }
    return middlewares[0]({
      ...context,
      next: middlewarePipeline(context, middlewares, 1)
    })
    
  })
*/ 
  return Router
}