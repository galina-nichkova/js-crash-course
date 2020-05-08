<script>
import SequenceCard from '@/components/sequence-card.vue'
import router from "../router"
import { mapState } from 'vuex'
export default {
  name: 'User-Sequence',
   components: {
    SequenceCard
  }, 
  computed: {
    ...mapState(["userSequences"])
  }
}
</script>

<template lang="pug">
main
  section
    sequence-card(v-for="sequence in userSequences", :sequence="sequence", :key="sequence._id")
</template>

<style scoped>
</style>