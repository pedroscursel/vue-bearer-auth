import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    // HOME PAGE
    {
      name: 'Home',
      path: '/',
      component: () => import('./views/Home')
    },
    // LOGIN PAGE
    {
      name: 'Login',
      path: '/login',
      component: () => import('./views/Login'),
      meta: {
        auth: false
      }
    },
    // WELCOME LOGGED
    {
      name: 'Welcome',
      path: '/welcome',
      meta: {
        auth: true
      },
      component: () => import('./views/Welcome')
    },
    // VEHICLES
    {
      name: 'Vehicles',
      path: '/vehicles',
      component: () => import('./views/vehicles/List'),
      meta: {
        auth: true
      }
    }
  ]
})
