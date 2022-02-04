<template>
  <div class="Forgot">
    <v-form :v-model="valid">
      <v-card>
        <v-card-title>Mot de passe oublié ?</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="emailName"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
          >
            Envoyer
          </v-btn></v-card-actions
        >
      </v-card>
    </v-form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",

      emailRules: [
        (v) => !!v || "L'e-mail est requis",
        (v) => /.+@.+\..+/.test(v) || "Le format de l'e-mail doit être valide",
      ],

      valid: false,
    };
  },
  methods: {
    validate() {
      axios
        .post("forgot", {
          email: this.email,
        })
        .then((response) => {
          this.$store.dispatch("success", response.data.success);
        })
        .catch((error) => {
          this.$store.dispatch("error", error.response.data.error);
        });
    },
  },
};
</script>