<template>
  <div id="welcome">
    <router-link to="vehicles">Veículos</router-link>
    <span>True</span>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  *{
    font-family: 'Roboto', sans-serif;
  }
  @import "~sass-rem";
  #welcome{
    padding-left: rem(200px);
  }
</style>
