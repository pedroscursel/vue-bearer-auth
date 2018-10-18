<template>
  <section id="login">
    <b-container>
      <b-row>
        <b-col sm="12">
          <h1 class="text-center">Login</h1>
        </b-col>
        <b-col sm="9" md="6" class="ml-auto mr-auto">
          <b-form v-on:submit.prevent="login">
            <b-form-group
              label="Usuário:"
              label-for="user">
              <b-form-input id="user"
                type="text"
                v-model="data.body.username"></b-form-input>
              <transition
                name="bounce"
                enter-active-class="bounceIn"
                leave-active-class="bounceOut">
                <small v-if="userNameErr" class="form-text text-danger"> {{ callBackMsg }} </small>
              </transition>
            </b-form-group>

            <b-form-group
              label="Senha:"
              label-for="pswd"
              class="mt-4 pt-1">
              <b-form-input id="pswd"
                type="password"
                v-model="data.body.password"></b-form-input>
              <transition
                name="bounce"
                enter-active-class="bounceIn"
                leave-active-class="bounceOut"
              >
                <small v-if="pswdNameErr" class="form-text text-danger"> {{ callBackMsg }} </small>
              </transition>
            </b-form-group>
            <b-form-group
              class="mt-4 pt-1 d-flex align-items-center">
              <b-form-checkbox id="rememberMe"
                type="checkbox"
                v-model="data.rememberMe"
                class="ml-2">Lembrar</b-form-checkbox>
            </b-form-group>
            <b-form-group
              class="text-center">
              <b-button
                type="submit"
                variant="primary"
                class="mr-1">Entrar</b-button>
              <router-link
                to="Home"
                class="btn btn-secondary ml-1">Home</router-link>
            </b-form-group>
          </b-form>
        </b-col>
      </b-row>
      <transition
          name="bounce"
          enter-active-class="bounceIn"
          leave-active-class="bounceOut"
        >
        <b-row class="mt-4 pt-1" v-if="error">
          <b-col sm="9" md="6" class="ml-auto mr-auto">
            <div class="alert" :class="errorClass" role="alert">
              <p class="messages text-center mb-0">{{ callBackMsg }}</p>
            </div>
          </b-col>
        </b-row>
      </transition>
    </b-container>
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
      errorClass: null,
      userNameErr: false,
      pswdNameErr: false,
      callBackMsg: null
    }
  },

  mounted () {
    if (this.$auth.redirect()) {
      this.error = true
      this.errorClass = 'alert-warning'
      this.callBackMsg = 'Você veio redirecionado de: ' + this.$auth.redirect().from.name + ', para acessar este local, antes faça login!'
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

    areYouSure (maybe) {
      if (maybe) {
        return true
      }
    },

    login () {
      this.error = false
      this.userNameErr = false
      this.pswdNameErr = false
      let redirect = this.$auth.redirect()
      this.$auth.login({
        data: this.data.body,
        rememberMe: this.areYouSure(this.data.rememberMe),
        redirect: {
          name: redirect ? redirect.from.name : 'Welcome'
        },
        fetchUser: false,
        success (res) {
          console.log('success ' + this.context)
          console.log('Token: ' + JSON.stringify(this.$auth.token()))
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

  }

}
</script>

<style lang="scss" scoped>
  *{
    font-family: 'Roboto', sans-serif;
  }
  #login{
    padding-top: 10vh;
    .text-danger{
      position: absolute;
    }
  }
</style>
