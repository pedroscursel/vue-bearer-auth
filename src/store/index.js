import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import pkg from 'package'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

const store = new Vuex.Store({
  strict: true, // process.env.NODE_ENV !== 'production'
  getters: {

  },
  state: {
    pkg
  },
  mutations: {

  },
  actions: {

  }
})

export default store
