<template>
  <div class="Reset">
    <form ref="form">
      <v-card elevation="24">
        <v-card-title>Réinitialisez votre mot de passe</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Mot de passe"
            prepend-inner-icon="mdi-lock"
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
            Réinitialiser
          </v-btn>
        </v-card-actions>
      </v-card>
    </form>
  </div>
</template>

<script>
import { passwordRules, passwordConfirmRules } from "@/functions/inputRules.js";

export default {
  data() {
    return {
      password: null,
      passwordConfirm: null,
      showPassword: false,
      showPasswordConfirm: false,
      passwordRules,
      passwordConfirmRules,
    };
  },
  methods: {
    submitResetForm() {
      if (this.$refs.form.validate()) {
        return;
      }
    },
  },
};
</script>