<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  computed: {
    ...mapState(['counter'])
  },
  methods: {
    ...mapActions(['incrementCounter'])
}
}
</script>

<template lang="pug">
div(class="bg-img")
  div(class="overlay")
  h2(class="h2") Personalize your yoga practice
  div(class="router-link")
    router-link(to="/signin") Login
    router-link(to="/register")  Register  
  //- p Register
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

/* section {
  padding: 0 0;
  height: 100%;
}*/

.router-link {
  position: absolute;
  font-family: "Sarabun";
  color: #ffffff;
  /* background-color: #000000; */
  /*border: 1px solid darkcyan; */
  font-size: 30px;
  right: 30px;
  top: 20px;

}

a {
  color: #ffffff;
  text-decoration: none;
}

a:hover {
  color: #83827a;
  cursor: pointer;
}

.router-link:visited {
  color:#ffffff;
  text-decoration: none;
}

/*
.increment-button:hover {
  background-color: darkcyan;
  color: white;
} */
</style>