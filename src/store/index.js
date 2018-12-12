import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

import state from './state'
import * as UserAuth from './actions/UserAuth'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

const store = new Vuex.Store({
  strict: true, // process.env.NODE_ENV !== 'production'
  state: {
    ...state
  },
  mutations: {
    authUser (state, userData) {
      state.tokenID = userData.token
      state.accountID = userData.account
      state.userID = userData.user
      state.userOBJ = userData.obj
    }
  },
  actions: {
    ...UserAuth
  },
  getters: {

  }
})

export default store
