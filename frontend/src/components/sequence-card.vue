<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'SequenceCard',
  props: ['sequence'],
  computed: {
    sequenceUrl() {
      return `/sequence/${this.sequence._id}`
  }
},
  methods: {
    ...mapActions(["fetchAsanasOfSequence"])
}
}
</script>

<template lang="pug">
article.card
  h2.card-title
    button(@click="fetchAsanasOfSequence(sequence._id)") {{ sequence.emphasis }} 
  p Duration: {{ sequence.duration }}
</template>

<style scoped>
.card {
  display: inline-block;
  text-align: center;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 3px;
  margin: 20px;
  min-width: 200px;
  z-index: 100;
  position: relative;
}
</style>