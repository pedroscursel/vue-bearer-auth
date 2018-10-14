import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueAuth from '@websanova/vue-auth'
import NProgress from 'vue-nprogress'
import { sync } from 'vuex-router-sync'
import VeeValidate from 'vee-validate'

import App from './App.vue'

import router from './router'
import store from './store'

import './registerServiceWorker'

import apiendpoint from './apiendpoint'

Vue.router = router
Vue.use(VueAxios, axios)
Vue.use(VueAuth, {
  auth: {
    request: function (req, token) {
      this.options.http_setHeaders.call(this, req, {
        Authorization: 'Bearer ' + token
      })
    },
    response: function (res) {
      let token = res.data.api_key
      return token
    }
  },
  http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
  loginData: {
    url: apiendpoint.LOGIN_URL,
    fechUser: true
  },
  refreshData: { enabled: false }
})

Vue.use(VeeValidate)
Vue.use(NProgress)

sync(store, router)

Vue.config.productionTip = false
Vue.config.devtools = true

const nprogress = new NProgress({
  parent: '.nprogress-container'
})

// const app = new Vue({
//   router,
//   store,
//   nprogress,
//   ...App
// })

// export { app, router, store }

new Vue({
  router,
  store,
  nprogress,
  render: h => h(App)
}).$mount('#app')
