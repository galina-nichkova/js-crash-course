<script>
export default {
  name: 'AsanaCard',
  props: ['asana'],
  computed: {
    asanaUrl() {
      return `/asana/${this.asana._id}`
    }
  ,
  getImgUrl() {
    return require(`../assets/${this.asana.nameSanskrit}.webp`);
  // var images = require.context('@/assets/', false, /\.webp$/)
  // console.log(images);
  // return images('Tadasana.webp')
  }
  }
}
</script>

<template lang="pug">
article.card
  img(:src="getImgUrl", alt="", width="200px", heigth="200px")
  h2.card-title
    router-link(:to="asanaUrl") {{ asana.nameEnglish }} 
  p {{ asana.nameSanskrit }}
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
}
</style>