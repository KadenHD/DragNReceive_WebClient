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
          ></v-text-field>

          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Mot de passe"
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

export default {
  data() {
    return {
      email: null,
      password: null,

      emailRules: [
        (v) => !!v || "L'e-mail est requis",
        (v) => /.+@.+\..+/.test(v) || "Le format de l'e-mail doit être valide",
      ],
      passwordRules: [(v) => !!v || "Le mot de passe est requis"],
    };
  },
  methods: {
    submitLoginForm() {
      if (this.$refs.form.validate()) {
        axios
          .post("login", {
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