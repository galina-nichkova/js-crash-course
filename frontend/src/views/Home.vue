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
main
  section
    img(src='@/assets/home-page.jpg', alt="", width="700px", heigth="500px")
  section
    h2 Personalize your yoga practice
    div Click "Register" to proceed
</template>

<style scoped>
section {
  padding: 20px 0;
}
.increment-button {
  color: darkcyan;
  padding: 10px 20px;
  border-radius: 8px;
  background-color: white;
  border: 1px solid darkcyan;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 20px;
}
.increment-button:hover {
  background-color: darkcyan;
  color: white;
}
</style>