<template>
  <div class="Reset">
    <form ref="form">
      <v-card>
        <v-card-title>Réinitialisez votre mot de passe</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            type="password"
            label="Mot de passe"
          ></v-text-field>

          <v-text-field
            v-model="passwordconfirm"
            :rules="passwordconfirmRules"
            type="password"
            label="Confirmez le mot de passe"
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

export default {
  data() {
    return {
      password: null,
      passwordconfirm: null,

      passwordRules: [(v) => !!v || "Le mot de passe est requis"],
      passwordconfirmRules: [
        (v) => !!v || "Le mot de passe est requis",
        (v) =>
          v === this.password ||
          "Les deux mots de passe doivent être similaire !",
      ],
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