<template>
  <section>
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
  methods: {
    areLogged () {
      if (!this.$auth.check()) {
      }
    }
  }
}
</script>
