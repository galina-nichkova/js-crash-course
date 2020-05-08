<script>
import { mapState, mapActions } from 'vuex'
import router from "../router" 
import axios from "axios"  
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
    ...mapActions(['requestSequence', "getUserData"])
}
  ,
        mounted() {    
            this.$store.dispatch("getUserData")}
  }
</script>

<template lang="pug">
main
  section
    h2 Request new sequence here
    p Currently active user
    div 
      span(style='font-weight:bold') {{ userDetails.name }}
    div 
      span(style='font-weight:bold') {{ payload }}
    p Emphasis
    select(name="dropDown", v-model="payload.emphasis", id="")
      each t in ['chest open', 'hip open']
        option=t
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