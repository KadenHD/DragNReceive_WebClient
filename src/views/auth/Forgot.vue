<template>
  <div class="Forgot">
    <v-form ref="form">
      <v-card elevation="24">
        <v-card-title>Mot de passe oublié ?</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            prepend-inner-icon="mdi-email"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn color="success" class="mr-4" @click="submitForgotForm">
            Envoyer
          </v-btn>
          <div class="mr-1">Retourner à la</div>
          <router-link class="TextLinks" :to="{ name: 'Login' }">
            connexion </router-link
          >.
        </v-card-actions>
      </v-card>
    </v-form>
  </div>
</template>

<script>
import { emailRules } from "@/utils/inputRules.js";

export default {
  data() {
    return {
      email: null,
      emailRules,
    };
  },
  methods: {
    submitForgotForm() {
      if (this.$refs.form.validate()) {
        const data = {
          email: this.email,
        };
        this.$store.dispatch("forgot", data);
      }
    },
  },
};
</script>