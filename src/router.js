import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      name: 'login',
      path: '/login',
      component: () => import('./views/Login'),
      meta: {
        auth: false
      }
    },
    // HOME
    {
      name: 'Home',
      path: '/home',
      meta: {
        auth: true
      },
      component: () => import('./views/Home')
    },
    // VEHICLES
    {
      name: 'Vehicles',
      path: '/vehicles',
      component: () => import('./views/vehicles/List')
    }
  ]
})
