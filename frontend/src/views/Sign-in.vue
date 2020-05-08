<script>
// @ is an alias to /src
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["userDetails"])
  },
  data() {
    return {
      payload: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    ...mapActions(["signInUser"])
  }
};
</script>

<template lang="pug">
div
  div(class="container")
    form
    div(class="row")
      div(class="col-25")
        label User name
      div(class="col-75")
        input(type="text" v-model="payload.username" name="username" placeholder="Your user name ...")
    div(class="row")
      div(class="col-25")
        label Password
      div(class="col-75")
        input(type="password" v-model="payload.password" name="password" placeholder="Your password ...")
    div(class="row")
      input(type="submit" value="Login" @click="signInUser(payload)")
</template>

<style scoped>
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