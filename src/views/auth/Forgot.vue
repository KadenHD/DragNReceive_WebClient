<template>
  <div class="Forgot">
    <v-form ref="form">
      <v-card>
        <v-card-title>Mot de passe oublié ?</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn color="success" class="mr-4" @click="submitForgotForm">
            Envoyer
          </v-btn></v-card-actions
        >
      </v-card>
    </v-form>
  </div>
</template>

<script>
import { emailRules } from "@/plugins/inputRules.js";

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
      }
    },
  },
};
</script>