<template>
  <div id="app">
<!--     <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/asanas">Asanas</router-link> |
      <router-link to="/register">Register</router-link> |
      <router-link to="/signin">Sign In</router-link> |
      <router-link to="/request">Request</router-link> |
      <router-link to="/seqasanas">Your personal sequence</router-link>
    </div> -->
    <router-view/>
  </div>
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
</style>
