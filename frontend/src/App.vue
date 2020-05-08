<template lang="pug">
div(class="bg-img")
  div(class="overlay")
  div(id="app")
    router-view
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Sarabun");

#app {
  font-family: 'Sarabun', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #D563E6;
}

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
    z-index: -1;
    background: #ffffff;
}
</style>
