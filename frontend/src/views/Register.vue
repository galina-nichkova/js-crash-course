<script>
// @ is an alias to /src
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
     ...mapState(['userDetails'])
  },
  data() {
    return {
      payload: {name: '',
      level: '',
      password: ''}
    }
  },
  methods: {
    ...mapActions(['postUser'])
}
}
</script>

<template lang="pug">
main
  h2 Register here
  p User name
  input(type="text" v-model="payload.name" placeholder="edit me")
  p Level
  input(type="text" v-model="payload.level" placeholder="edit me")
  p Password
  input(type="text" v-model="payload.password" placeholder="edit me")
  p
  button.post-user-button(@click="postUser(payload)") Register
  div {{ payload }}
</template>

<style scoped>
</style>