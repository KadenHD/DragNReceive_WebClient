<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <div>Réinitialiser le mot de passe</div>

      <q-input
        required
        filled
        type="password"
        v-model="password"
        label="Mot de passe"
        :rules="[
          (val) =>
            (val !== null && val !== '') || 'Saisissez votre mot de passe !',
        ]"
      />

      <q-input
        required
        filled
        type="password"
        v-model="passwordconfirm"
        label="Confirmer mot de passe"
        :rules="[
          (val) =>
            val === password ||
            'Les deux mots de passe doivent être similaire !',
          (val) =>
            (val !== null && val !== '') || 'Confirmez votre mot de passe !',
        ]"
      />

      <btn label="Réinitialiser" type="submit" color="primary" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Reset",
  data() {
    return {
      password: "",
      passwordconfirm: "",
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
