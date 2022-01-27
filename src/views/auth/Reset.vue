<template>
  <div class="Reset">
    <form @submit.prevent="handleSubmit">
      <v-text-field
        v-model="password"
        :rules="passwordRules"
        label="Mot de passe"
        required
      ></v-text-field>

      <v-text-field
        v-model="passwordconfirm"
        :rules="passwordconfirmRules"
        label="Confirmez le mot de passe"
        required
      ></v-text-field>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
        Réinitialiser
      </v-btn>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      password: "",
      passwordRules: [(v) => !!v || "Le mot de passe est requis"],
      passwordconfirm: "",
      passwordconfirmRules: [
        (v) => !!v || "Le mot de passe est requis",
        (v) =>
          v === this.password ||
          "Les deux mots de passe doivent être similaire !",
      ],
    };
  },
  methods: {
    async handleSubmit() {
      //const response =
      await axios
        .post("reset", {
          password: this.password,
          passwordconfirm: this.passwordconfirm,
          token: this.$route.params.token,
        })
        .then((response) => {
          this.$store.dispatch("success", response.data.success);
          this.$router.push({ name: "Login" });
        })
        .catch((error) => {
          this.$store.dispatch("error", error.response.data.error);
        });
    },
  },
};
</script>

<style scoped>
</style>