<template>
  <v-container>
    <v-responsive class="mx-auto text-center" style="max-width: 500px">
      <v-card class="text-center pa-1" elevation="2">
        <v-card-title class="justify-center display-1 mb-2"
          >Welcome</v-card-title
        >
        <v-card-subtitle>Sign in to your account</v-card-subtitle>
        <!-- <v-divider aria-orientation="horizontal"></v-divider> -->
        <v-card-text>
          <v-form ref="form" class="pa-7" @submit.prevent="handleLogin(user)">
            <v-text-field
              v-model="user.email"
              label="Email"
              required
              outlined
            ></v-text-field>
            <v-text-field
              v-model="user.password"
              label="Password"
              outlined
              type="password"
            ></v-text-field>
            <div v-html="message" style="color: red"></div>
            <v-btn
              class="primary mb-3"
              x-large
              block
              type="submit"
              :loading="isLoading"
              >Log in</v-btn
            >
          </v-form>
        </v-card-text>
      </v-card>
    </v-responsive>
  </v-container>
</template>

<script>
import { mapMutations } from "vuex";
//import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },

      checkbox: false,
      //text: '***',
      show: false,
      rules: {},
      isLoading: false,
      message: "",
    };
  },
  computed: {
    //...mapState([""]),
  },
  methods: {
    ...mapMutations([""]),
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
    handleLogin(user) {
      this.isLoading = true;
      this.$store.dispatch("auth/login", user).then(
        () => {
          this.$router.push("/");
        },
        (error) => {
          this.message = error.response.data.msg;
          this.isLoading = false;
        }
      );
    },
  },
  created() {},
};
</script>

<style>
</style>