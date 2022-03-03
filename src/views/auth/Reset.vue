<template>
  <div class="Forgot">
    <v-form ref="form">
      <v-card elevation="24">
        <v-card-title>Mot de passe oublié ?</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Mot de passe"
            prepend-inner-icon="mdi-lock-check"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
            counter
          ></v-text-field>

          <v-text-field
            v-model="passwordConfirm"
            :rules="passwordConfirmRules"
            label="Confirmez le mot de passe"
            prepend-inner-icon="mdi-lock-check"
            :append-icon="showPasswordConfirm ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPasswordConfirm ? 'text' : 'password'"
            @click:append="showPasswordConfirm = !showPasswordConfirm"
            counter
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn color="success" class="mr-4" @click="submitResetForm">
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
import { passwordRules } from "@/functions/inputRules.js";

export default {
  data() {
    return {
      password: null,
      passwordConfirm: null,
      showPassword: null,
      showPasswordConfirm: null,
      passwordConfirmRules: [
        (v) => !!v || "Le mot de passe est requis",
        (v) =>
          (v && v == this.password) ||
          "Les deux mots de passe doivent être similaire",
      ],
      passwordRules,
    };
  },
  methods: {
    submitResetForm() {
      if (this.$refs.form.validate()) {
        const data = {
          userId: this.$route.params.userId,
          token: this.$route.params.token,
          password: this.password,
        };
        this.$store.dispatch("reset", data);
      }
    },
  },
};
</script>