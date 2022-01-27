<template>
  <div class="Forgot">
    <v-form
      @submit.prevent="handleSubmit"
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-card>
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
    };
  },
  methods: {
    async handleSubmit() {
      await axios
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

<style >
</style>