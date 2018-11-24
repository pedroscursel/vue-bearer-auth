<template>
  <navbar class="navbar navbar-light align-items-center justify-content-end">
    <div class="profile">
      <b-dropdown id="ddown-right" size="sm" right text="Pedro H C Scursel" variant="info" class="mr-2">
        <b-dropdown-item href="#">Configurações</b-dropdown-item>
      </b-dropdown>
    </div>
    <div class="logout">
      <button
        @click="logout"
        class="btn btn-sm btn-info">
          SAIR <font-awesome-icon icon="sign-out-alt" class="ml-2" />
        </button>
    </div>
  </navbar>
</template>

<script>
import bDropdown from 'bootstrap-vue/es/components/dropdown/dropdown'

export default {
  components: {
    bDropdown
  },

  data () {
    return {
      userName: null,
      avatar: null
    }
  },
  methods: {
    logout: () => {
      this.$auth.logout()
    }
  }
}
</script>

<style lang="scss">
  @import "~sass-rem";
  .navbar{
    height: 4.1rem;
    border-radius: 0;
    border-bottom: rem(1px solid #49A0B5);
    box-shadow: 0px 0px 40px 0px rgba(73,160,181, 0.65);
  }
</style>
