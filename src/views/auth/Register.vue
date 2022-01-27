<template>
  <div class="Register">
    <v-form
      @submit.prevent="handleSubmit"
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-select
        v-model="roleId"
        :rules="roleRules"
        :items="options"
        label="Rôle"
        required
      />

      <v-text-field
        v-model="lastName"
        :rules="lastNameRules"
        label="Nom"
        required
      ></v-text-field>

      <v-text-field
        v-model="firstName"
        :rules="firstNameRules"
        label="Prénom"
        required
      ></v-text-field>

      <v-text-field
        v-model="emailName"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        v-model="passwordName"
        :rules="passwordRules"
        label="Mot de passe"
        required
      ></v-text-field>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
        Créer
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      roleId: "",
      roleRules: [(v) => !!v || "Le rôle est requis"],
      firstname: "",
      firstNameRules: [(v) => !!v || "Le prénom est requis"],
      lastname: "",
      lastNameRules: [(v) => !!v || "Le nom est requis"],
      email: "",
      emailRules: [
        (v) => !!v || "L'e-mail est requis",
        (v) => /.+@.+\..+/.test(v) || "Le format de l'e-mail doit être valide",
      ],
      password: "",
      passwordRules: [(v) => !!v || "Le mot de passe est requis"],
      options: [
        {
          text: "SuperAdmin",
          value: "1",
        },
        {
          text: "Admin",
          value: "2",
        },
        {
          text: "Partenaire",
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

<style scoped>
</style>