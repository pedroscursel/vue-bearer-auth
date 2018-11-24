import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

import state from './state'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

const store = new Vuex.Store({
  strict: true, // process.env.NODE_ENV !== 'production'
  state: {
    ...state
  },
  mutations: {
    authUser (state, userData) {
      state.idToken = userData.token
      state.userID = userData.userID
      state.projectID = userData.projectID
    }
  },
  actions: {
    login ({ commit }, authData) {
      let redirect = this.$auth.redirect()
      this.$auth.login({
        data: authData.body,
        rememberMe: this.areYouSure(authData.rememberMe),
        redirect: {
          name: redirect ? redirect.from.name : 'Welcome'
        },
        fetchUser: false,
        success (res) {
          console.log('success ' + JSON.stringify(this.$auth.check()))
          console.log('Token: ' + JSON.stringify(this.$auth.token()))
          commit('authUser', {
            token: JSON.stringify(this.$auth.token()),
            userID: '24'
          })
        },
        error (err) {
          let errStatus = err.response.status
          let errMessage = err.response.data.status

          if (errStatus === 422) {
            if (err.response.data.username && err.response.data.password) {
              this.error = true
              this.errorClass = 'alert-danger'
              this.callBackMsg = 'Preencha os campos de usuário e senha!'
            } else {
              this.whatError(err.response.data.username)
            }
          } else if (errStatus === 401) {
            this.error = true
            this.errorClass = 'alert-danger'
            this.callBackMsg = this.translateMsg(errMessage)
          } else if (errStatus === 500) {
            this.error = true
            this.errorClass = 'alert-info'
            this.callBackMsg = 'Erro no servidor, favor contatar a equipe de desenvolvimento.'
          }
        }
      })
    }
  },
  getters: {

  }
})

export default store
