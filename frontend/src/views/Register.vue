<script>
// @ is an alias to /src
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["userDetails", "errMessage"])
  },
  data() {
    return {
      payload: {
        name: "",
        level: "",
        password: ""
      }
    };
  },
  methods: {
    ...mapActions(["postUser"])
  }
};
</script>

<template lang="pug">
div(class="bg-img")
  div(class="overlay")
    div(class="container")
      form
      div(class="row")
        div(class="col-25")
          label User name
        div(class="col-75")
          input(type="text" v-model="payload.name" placeholder="Your user name ...")
      div(class="row")
        div(class="col-25")
          label Password
        div(class="col-75")
          input(type="password" v-model="payload.password" placeholder="Your password ...")
      div(class="row")
        div(class="col-25")
          label Your level
        div(class="col-75")
          select(v-model="payload.level" placeholder=1)
            option(value=1) Beginner
            option(value=2) Intermideate Beginner
            option(value=3) Intermideate
            option(value=4) Advanced
            option(value=5) Ultimate Yoga Master
      div(class="row")
        input(type="submit" value="Register" @click="postUser(payload)")
      p {{ errMessage }}
</template>

<style scoped>
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
    background: #ffffff;
}

 input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  font-family: "Sarabun";
}

 input[type=password], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
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
</style>