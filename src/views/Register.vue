<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <div>Création d'un utilisateur</div>

      <q-select
        required
        filled
        v-model="roleId"
        label="Rôle"
        :options="options"
      />

      <q-input
        required
        filled
        type="text"
        v-model="firstname"
        label="Nom"
        :rules="[
          (val) => (val !== null && val !== '') || 'Saisissez votre nom !',
        ]"
      />

      <q-input
        required
        filled
        type="text"
        v-model="lastname"
        label="Prénom"
        :rules="[
          (val) => (val !== null && val !== '') || 'Saisissez votre prénom !',
        ]"
      />

      <q-input
        required
        filled
        type="email"
        v-model="email"
        label="Email"
        :rules="[
          (val) => (val !== null && val !== '') || 'Saisissez votre email !',
        ]"
      />

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

      <btn label="Créer" type="submit" color="primary" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Register",
  data() {
    return {
      roleId: "",
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      options: [
        {
          label: "SuperAdmin",
          value: "1",
        },
        {
          label: "Admin",
          value: "2",
        },
        {
          label: "Partenaire",
          value: "3",
        },
      ],
    };
  },
  methods: {
    async handleSubmit() {
      await axios
        .post("users", {
          roleId: this.roleId.value,
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          password: this.password,
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