<template>
  <div class="Login">
    <v-form ref="form">
      <v-card>
        <v-card-title>Connectez-vous</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            prepend-inner-icon="mdi-email"
          ></v-text-field>

          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Mot de passe"
            prepend-inner-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn color="success" class="mr-4" @click="submitLoginForm">
            Se connecter
          </v-btn>
          <div class="mr-1">Mot de passe oublié ?</div>
          <router-link class="TextLinks" :to="{ name: 'Forgot' }">
            Réinitialisez votre mot de passe </router-link
          >.
        </v-card-actions>
      </v-card>
    </v-form>
  </div>
</template>

<script>
import axios from "axios";
import { emailRules, passwordRules } from "@/plugins/inputRules.js";

export default {
  data() {
    return {
      email: null,
      password: null,
      showPassword: false,
      emailRules,
      passwordRules,
    };
  },
  methods: {
    submitLoginForm() {
      if (this.$refs.form.validate()) {
        axios
          .post("loginUser", {
            email: this.email,
            password: this.password,
          })
          .then((response) => {
            localStorage.setItem("token", response.data.token);
            this.$store.dispatch("currentUser", response.data.user);
            this.$store.dispatch("success", "Vous êtes connecté !");
            this.$router.push({ name: "Home" });
          })
          .catch((error) => {
            this.$store.dispatch("error", error.response.data.error);
          });
      }
    },
  },
};
</script>