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
div
  h2(class="h2") Personalize your yoga practice
  div(class="router-link")
    router-link(to="/signin") Login
    router-link(to="/register")  Register  
</template>

<style scoped>
h2 {
    position: relative;
    top: 400px;
    text-align: center;
    font-size: 50px;
    color:#ffffff;
}

.router-link {
  position: absolute;
  font-family: "Sarabun";
  color: #ffffff;
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

</style>