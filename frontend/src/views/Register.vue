<script>
// @ is an alias to /src
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["userDetails"])
  },
  data() {
    return {
      payload: {
        name: "",
        level: "",
        password: ""
      }
    };
  },
  methods: {
    ...mapActions(["postUser"])
  }
};
</script>

<template lang="pug">
main
  section
    h2 Register here
    p User name
    input(type="text" v-model="payload.name" placeholder="edit me")
    p Level
    input(type="text" v-model="payload.level" placeholder="edit me")
    p Password
    input(type="text" v-model="payload.password" placeholder="edit me")
    p
    button.post-user-button(@click="postUser(payload)") Register
    //div {{ payload }}
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