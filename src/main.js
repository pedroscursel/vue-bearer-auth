import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import NProgress from 'vue-nprogress'
import { sync } from 'vuex-router-sync'
import VeeValidate from 'vee-validate'
import router from './router'
import store from './store'

import './registerServiceWorker'

import App from './App.vue'

// FONTAWESOME
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// BOOTSTRAPVUE
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

Vue.router = router

Vue.use(VueAxios, axios)
App.router = Vue.router
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
