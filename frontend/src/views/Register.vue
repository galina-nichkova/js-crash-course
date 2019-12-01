<script>
// @ is an alias to /src
import { mapState, mapActions } from 'vuex'

export default {
  //name: 'register',
  computed: {
     ...mapState(['user'])
  },
  methods: {
    ...mapActions(['postUser']),
    saveDetails: function (name, level, password) {
    this.$store.state.userDetails.name = name
    this.$store.state.userDetails.level = level
    this.$store.state.userDetails.password = password
    }
}
}
</script>

<template lang="pug">
main
  h2 Register here
  p User name
  input(type="text" v-model="name" placeholder="edit me")
  p Level
  input(type="text" v-model="level" placeholder="edit me")
  p Password
  input(type="text" v-model="password" placeholder="edit me")
  p
  button.post-user-button(@click="saveDetails(name, level, password); postUser()") Register
  div {{ name }}
</template>

<style scoped>
</style>