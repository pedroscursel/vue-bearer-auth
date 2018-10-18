<template>
  <section
    :class="{ 'token': haveToken }"
    id="contentWrap">
    <transition
      mode="out-in"
      enter-active-class="fadeIn"
      leave-active-class="fadeOut"
      appear>
      <router-view class="animated"></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  data () {
    return {
      haveToken: false
    }
  }

}
</script>

<style lang="scss">
  @import "~sass-rem";
  #contentWrap.token{
    margin-left: rem(200px);
  }
</style>
