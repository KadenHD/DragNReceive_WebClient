<template>
  <div class="Reset">
    <form ref="form">
      <v-card>
        <v-card-title>Réinitialisez votre mot de passe</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Mot de passe"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
            counter
          ></v-text-field>

          <v-text-field
            v-model="passwordConfirm"
            :rules="passwordConfirmRules"
            label="Confirmez le mot de passe"
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
import axios from "axios";
import { passwordRules, passwordConfirmRules } from "@/plugins/inputRules.js";

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
        axios
          .post("reset", {
            password: this.password,
            token: this.$route.params.token,
          })
          .then((response) => {
            this.$store.dispatch("success", response.data.success);
            this.$router.push({ name: "Login" });
          })
          .catch((error) => {
            this.$store.dispatch("error", error.response.data.error);
          });
      }
    },
  },
};
</script>