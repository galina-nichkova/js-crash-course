<script>
// @ is an alias to /src
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
     ...mapState(['userDetails'])
  },
  data() {
    return {
      payload: {
        emphasis: '',
        duration: ''
      }
    }
  },
  methods: {
    ...mapActions(['requestSequence'])
}
}
</script>

<template lang="pug">
main
  h2 Request new sequence here
  p Currently active user
  div 
    span(style='font-weight:bold') {{ userDetails.name }}
  div 
    span(style='font-weight:bold') {{ userDetails.id }}
  p Emphasis
  input(type="text" v-model="payload.emphasis" placeholder="edit me")
  p Duration
  input(type="text" v-model="payload.duration" placeholder="edit me")
  p
  button.post-user-button(@click="requestSequence(payload)") Request

</template>

<style scoped>
</style>