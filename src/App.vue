<template>
  <div id="app">
    <nprogress-container></nprogress-container>
    <template>
      <navbar></navbar>
      <sidebar></sidebar>
    </template>
    <app-main></app-main>
  </div>
</template>

<script>
import NprogressContainer from 'vue-nprogress/src/NprogressContainer'
import { Sidebar, Navbar, AppMain } from './components/layout'

export default {
  components: {
    Sidebar,
    Navbar,
    AppMain,
    NprogressContainer
  }
}
</script>

<style lang="scss">
$animationDuration: 0.5s;
@import '~vue2-animate/src/sass/vue2-animate';
@import url('https://fonts.googleapis.com/css?family=Roboto');
@import '~bootstrap/scss/bootstrap';
@import '~bootstrap-vue/dist/bootstrap-vue.css';
body{
  margin: 0;
  padding: 0;
}
.nprogress-container{
  position: fixed !important;
  width: 100%;
  height: 50px;
  z-index: 2048;
  pointer-events: none;
  #nprogress{
    $color: purple;
    .bar{
      background-color: $color;
    }
    .peg{
      box-shadow: 0 0 10px $color, 0 0 5px $color;
    }
    .spinner-icon{
      border-top-color: $color;
      border-left-color: $color;
    }
  }
}
@mixin calc($property, $expression) {
  #{$property}: calc(#{$expression});
}
</style>
