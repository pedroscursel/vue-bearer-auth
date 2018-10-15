<template>
  <section id="login">
    <div class="container">
       <transition
          name="bounce"
          enter-active-class="bounceIn"
          leave-active-class="bounceOut"
        >
        <div class="row" v-if="error">
          <div class="col-sm-9 col-md-6 ml-auto mr-auto">
            <div class="alert alert-danger" role="alert">
              <p class="messages text-center mb-0">{{ callBackMsg }}</p>
            </div>
          </div>
        </div>
       </transition>
      <div class="row">
        <div class="col-12">
          <h1 class="text-center">Login</h1>
        </div>
        <div class="col-sm-9 col-md-6 ml-auto mr-auto">
          <form v-on:submit.prevent="login">
            <div class="form-group">
              <label for="user">Usuário:</label>
              <input v-model="data.body.username" id="user" type="text" class="form-control">
              <transition
                name="bounce"
                enter-active-class="bounceIn"
                leave-active-class="bounceOut"
              >
                <small v-if="userNameErr" class="form-text text-danger"> {{ callBackMsg }} </small>
              </transition>
            </div>
            <div class="form-group">
              <label for="pswd">Senha:</label>
              <input v-model="data.body.password" id="pswd" type="password" class="form-control">
              <transition
                name="bounce"
                enter-active-class="bounceIn"
                leave-active-class="bounceOut"
              >
                <small v-if="pswdNameErr" class="form-text text-danger"> {{ callBackMsg }} </small>
              </transition>
            </div>
            <div class="form-group d-flex align-items-center">
              <label for="rememberME" class="mb-0 mr-2">Lembrar:</label>
              <input v-model="data.rememberMe" id="rememberME" type="checkbox">
            </div>
            <div class="form-group text-center">
              <button type="submit" class="btn btn-primary">Entrar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      data: {
        body: {
          username: null,
          password: null
        },
        rememberMe: false
      },
      error: false,
      userNameErr: false,
      pswdNameErr: false,
      callBackMsg: null
    }
  },

  mounted () {
    if (this.$auth.redirect()) {
      this.messages = 'Você veio redirecionado de: ' + this.$auth.redirect().from.name + ', para acessar este local, antes faça login!'
    }
  },

  methods: {
    whatError (isName) {
      isName ? this.userNameErr = true : this.pswdNameErr = true
      let console = isName ? this.callBackMsg = 'Preencha o campo de usuário' : this.callBackMsg = 'Preencha o campo de senha'
      return console
    },

    translateMsg (msg) {
      if (msg === 'fail') {
        return 'Senha inválida!'
      } else if (msg === 'Username not found') {
        return 'Usuário não encontrado...'
      }
    },

    login () {
      this.error = false
      this.userNameErr = false
      this.pswdNameErr = false
      let redirect = this.$auth.redirect()
      this.$auth.login({
        headers: {
          'Content-Type': 'application/json'
        },
        data: this.data.body,
        rememberMe: this.data.rememberMe,
        redirect: {
          name: redirect ? redirect.from.name : 'Welcome'
        },
        fetchUser: false,
        success (res) {
          console.log('Token: ' + JSON.stringify(this.$auth.token()))
        },
        error (err) {
          let errStatus = err.response.status
          let errMessage = err.response.data.status

          if (errStatus === 422) {
            if (err.response.data.username && err.response.data.password) {
              this.error = true
              this.callBackMsg = 'Preencha os campos de usuário e senha!'
            } else {
              this.whatError(err.response.data.username)
            }
          } else if (errStatus === 401) {
            this.error = true
            this.callBackMsg = this.translateMsg(errMessage)
          } else if (errStatus === 500) {
            this.error = true
            this.callBackMsg = 'Erro no servidor, favor contatar a equipe de desenvolvimento.'
          }
        }
      })
    }

  }

}
</script>

<style lang="scss" scoped>
  @import "~bootstrap/scss/functions";
  @import "~bootstrap/scss/variables";
  @import "~bootstrap/scss/mixins";
  @import "~bootstrap/scss/root";
  @import "~bootstrap/scss/reboot";
  @import "~bootstrap/scss/type";
  @import "~bootstrap/scss/grid";
  @import "~bootstrap/scss/forms";
  @import "~bootstrap/scss/buttons";
  @import "~bootstrap/scss/input-group";
  @import "~bootstrap/scss/button-group";
  @import "~bootstrap/scss/alert";
  @import "~bootstrap/scss/utilities";
  *{
    font-family: 'Roboto', sans-serif;
  }
  #login{
    padding-top: 10vh;
  }
</style>
