<script>
// @ is an alias to /src
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["userDetails"])
  },
  methods: {
    ...mapActions(["postUser"])
  }
};
</script>

<template lang="pug">
div(class="bg-img")
  div(class="overlay")
  h2(class="h2") It's nice to meet you {{ userDetails.name }}!
  p We are glad to have you here today! Let's practice? What are you up for today?
</template>

<style scoped>
.bg-img {
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-position: bottom;
    background-attachment: fixed;
    background-size: cover;
    background-image: url('~@/assets/home-page.jpg')
}

.bg-img .overlay {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    opacity: .5;
    background: #ffffff;
}

h2 {
    position: relative;
    top: 400px;
    text-align: center;
    font-size: 50px;
    color:#ffffff;
}
</style>