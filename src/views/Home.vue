<template>
  <div id="home" class="container-fluid">
    <div class="homeWrap container d-flex justify-content-between align-items-center align-content-center flex-column">
      <header class="w-100 pt-5">
        <div class="col-12">
          <h1>FROTAS <small>v1.1.0</small></h1>
        </div>
      </header>
      <section class="mainContent w-100">
        <div class="col-12 text-center">
          <h2>Sistema de Gestão</h2>
          <p>Gerenciamento de frotas, condutores, multas e controle de acessos</p>
          <router-link
            to="login"
            class="btn btn-lg btn-primary">Acesso</router-link>
        </div>
      </section>
      <footer class="w-100 pb-5 text-center">
        <p>Developed by: <b><a href="http://fabrika162.com.br" target="_blank">Fabrika162</a></b></p>
      </footer>
    </div>
  </div>
</template>

<script>
export default {

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
  @import url('https://fonts.googleapis.com/css?family=Ubuntu');
  *{
    font-family: 'Ubuntu', sans-serif;
  }
  #home{
    width: 100%;
    height: 100vh;
    box-shadow: inset 0 0 5rem rgba(0,0,0,.5);
    background-color: #333;
    .homeWrap{
      height: 100vh;
      header{
        h1{
          color: #f5f5f5;
          font-weight: 800;
        }
      }
      .mainContent{
        h2{
          color: #f5f5f5;
          font-weight: 700;
        }
        p{
          color: #f5f5f5;
        }
      }
      footer{
        color: #f5f5f5;
        a{
          color: #f5f5f5;
          text-decoration: none;
          transition: all 0.5s ease;
          &:hover{
            color: rgb(186, 186, 186);
          }
        }
      }
    }
  }
</style>
