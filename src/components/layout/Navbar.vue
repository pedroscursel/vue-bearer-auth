<template>
  <navbar class="navbar navbar-light">
    <div>
      <button 
        @click="logout"
        class="btn btn-sm btn-primary">
          SAIR | <font-awesome-icon icon="sign-out-alt" />
        </button>
    </div>
  </navbar>
</template>

<script>
export default {
  data () {
    return {
      message: 'navbar!'
    }
  }
}
</script>

<style lang="scss">
  
</style>
