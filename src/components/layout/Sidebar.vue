<template>
  <section id="sidebar">
    <ul>
      <li>{{ message }}</li>
      <li><router-link to="welcome">Welcome</router-link></li>
      <li><router-link to="vehicles">Veículos</router-link></li>
    </ul>
  </section>
</template>

<script>
export default {
  data () {
    return {
      message: 'sidebar!'
    }
  }
}
</script>

<style lang="scss">
  @import "~sass-rem";
  @mixin calc($property, $expression) {
    #{$property}: calc(#{$expression});
  }
  #sidebar{
    @include calc( height, '100vh - 4.1rem');
    width: rem(200px);
    border-right: rem(1px solid #49A0B5);
    position: absolute;
    background-color: #ffffff;
  }
</style>
