<template>
  <div>
    Lista de Veículos
  </div>
</template>

<script>
export default {
  methods: {
    alert () {
      console.log(this.$auth.token())
    }
  },
  created () {
    this.alert()
  }
}
</script>
