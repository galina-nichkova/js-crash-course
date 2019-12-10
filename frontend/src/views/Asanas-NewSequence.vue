<script>
// @ is an alias to /src
import AsanaCard from '@/components/asana-card.vue'
import { mapState } from 'vuex'
export default {
  name: 'seqasanas',
  components: {
    AsanaCard
  },
  computed: {
    ...mapState(['seqAsanas'])
  }
}
</script>

<template lang="pug">
  main
    section
      asana-card(v-for="asana in seqAsanas", :asana="asana", :key="asana.id")
</template>

<style scoped>
section {
  padding: 40px 0;
}
</style>
