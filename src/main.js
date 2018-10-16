import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueAuth from '@websanova/vue-auth'
import NProgress from 'vue-nprogress'
import { sync } from 'vuex-router-sync'
import VeeValidate from 'vee-validate'
import router from './router'
import store from './store'

import './registerServiceWorker'

import App from './App.vue'
import apiendpoint from './apiendpoint'

// FONTAWESOME
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// BOOTSTRAPVUE
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

Vue.router = router
Vue.use(VueAxios, axios)
Vue.use(VueAuth, {
  auth: {
    request: function (req, token) {
      this.options.http._setHeaders.call(this, req, {
        Authorization: 'Bearer ' + token
      })
    },
    response: function (res) {
      return res.data.api_key
    }
  },
  http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
  loginData: {
    url: apiendpoint.LOGIN_URL,
    fechUser: false
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

library.add(faSignOutAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  store,
  nprogress,
  render: h => h(App)
}).$mount('#app')
