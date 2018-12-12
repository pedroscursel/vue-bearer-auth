import axios from 'axios'
import apiendpoint from '../../apiendpoint'

export const whatError = (isName) => {
  isName ? this.userNameErr = true : this.pswdNameErr = true
  let console = isName ? this.callBackMsg = 'Preencha o campo de usuário' : this.callBackMsg = 'Preencha o campo de senha'
  return console
}

export const translateMsg = (msg) => {
  if (msg === 'fail') {
    return 'Senha inválida!'
  } else if (msg === 'Username not found') {
    return 'Usuário não encontrado...'
  }
}

export const areYouSure = (maybe) => {
  if (maybe) {
    return true
  }
}

export const login = ({ commit, dispatch }, authData) => {
  axios.post(apiendpoint.AUTH_LOGIN, authData.body)
    .then(res => {
      console.log('sucesso!')
      dispatch('fetchUser', res.data.api_key)
    })
    .catch(err => {
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
    })
}

export const fetchUser = ({ commit }, tokenData) => {
  axios.get(apiendpoint.AUTH_USER_DATA.concat(tokenData), {
    headers: {
      project: 24
    }
  })
    .then(res => {
      commit('authUser', {
        token: tokenData,
        obj: res.data,
        user: res.data.data.id,
        account: res.data.data.account.id
      })
    })
    .catch(err => {
      console.log(err.response)
    })
}
