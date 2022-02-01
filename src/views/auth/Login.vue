<template>
  <div class="Login">
    <v-form
      @submit.prevent="handleSubmit"
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-card>
        <v-card-title>Connectez-vous</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Password"
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
            Se connecter
          </v-btn>
        </v-card-actions>
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
      password: "",
      passwordRules: [(v) => !!v || "Le mot de passe est requis"],
    };
  },
  methods: {
    async validate() {
      this.$refs.form.validate();
      this.$store.dispatch("error", "test");
      await axios
        .post("login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          this.$store.dispatch("user", response.data.user);
          this.$store.dispatch("success", "logged in");
          this.$router.push({ name: "Home" });
        })
        .catch((error) => {
          this.$store.dispatch("error", error.response.data.error);
        });
    },
  },
};
</script>