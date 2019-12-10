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
  section
    h2 Request new sequence here
    p Currently active user
    div 
      span(style='font-weight:bold') {{ userDetails.name }}
    //div 
    //  span(style='font-weight:bold') {{ userDetails.id }}
    p Emphasis
    input(type="text" v-model="payload.emphasis" placeholder="edit me")
    p Duration
    input(type="text" v-model="payload.duration" placeholder="edit me")
    p
    button.post-user-button(@click="requestSequence(payload)") Request

</template>

<style scoped>
section {
  width: 1000px;
  height: 600px;
  display: inline;
  position: inherit;
}

section::after {
  content: "";
  background-image: url('~@/assets/home-page.jpg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center; 
  opacity: 0.4;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;   
}
</style>