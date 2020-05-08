<script>
import { mapState, mapActions } from "vuex"
import axios from "axios"    
import router from "../router"    
export default {
  computed: {
    ...mapState(["userDetails"])
  },
  data() {
    return {
      payload: {
        emphasis: "",
        duration: ""
      }
    }
  },
  methods: {
    ...mapActions(["getUserData", "requestSequence", "logout", "fetchUserSequences"])
  }
  ,
        mounted() {    
            this.$store.dispatch("getUserData")}
  }
</script>

<template lang="pug">
div
  h2(class="h2") It's nice to see you here again {{ userDetails.name }}!
  div(class="logout-link")
    button.logout-link(@click="logout()") Logout
  button.logout-link(@click="fetchUserSequences()") Browse
  p through the sequences we've already created for you or request a new one!
  div(class="container")
    div
      div(class="row")
        div(class="col-25")
          label Emphasis
        div(class="col-75")
          select(type="text", v-model="payload.emphasis" placeholder="Your sequence emphasis ...")
            option hip open
            option Back Bend
            option Core and Shoulders
            option Balance
            option Twist
        div(class="col-25")
          label Duration in minutes
        div(class="col-75")
          input(type="text" v-model="payload.duration" placeholder="Your sequence duration ...")
      input(type="submit" value="Request" @click="requestSequence(payload)")
  div {{ userDetails }}
</template>

<style scoped>
h2 {
    position: relative;
    top: 400px;
    text-align: center;
    font-size: 50px;
    color:#ffffff;
}

 input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  font-family: "Sarabun";
}

label {
  padding: 12px 12px 12px 0;
  display: inline-block;
  font-family: "Sarabun";
  font-size: 15px;
}

input[type=submit] {
  background-color: #83827a;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
  font-family: "Sarabun";
}

input[type=submit]:hover {
  background-color: #83827a;
}

.container {
  border-radius: 5px;
  padding: 20px;
  width: 50%;
  top: 50%;
  left: 50%;
  position: fixed;
  transform: translate(-50%, -50%);
}

.col-25 {
  float: left;
  width: 25%;
  margin-top: 6px;
}

.col-75 {
  float: left;
  width: 75%;
  margin-top: 6px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .col-25, .col-75, input[type=submit] {
    width: 100%;
    margin-top: 0;
  }
}

.logout-link {
  position: absolute;
  font-family: "Sarabun";
  color: #ffffff;
  font-size: 30px;
  right: 30px;
  top: 10px;
  border: none;
  background-color: transparent;
}

a {
  color: #ffffff;
  text-decoration: none;
}

.logout-link:hover {
  color: #83827a;
  cursor: pointer;
}
</style>