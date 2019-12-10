<script>
// @ is an alias to /src
import AsanaCard from '@/components/asana-card.vue'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Asanas',
  components: {
    AsanaCard
  },
  computed: {
    ...mapState(['asanas'])
  },
  methods: {
    ...mapActions(['fetchAsanas'])
  },
  created() {
    this.fetchAsanas()
  }
}
</script>

<template lang="pug">
  main
    section
      asana-card(v-for="asana in asanas", :asana="asana", :key="asana.id")
</template>

<style scoped>
section {
  padding: 40px 0;
}
</style>
