<template>
  <div class="Register">
    <v-form
      @submit.prevent="handleSubmit"
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-card>
        <v-card-title>Inscrivez-vous</v-card-title>
        <v-card-text>
          <v-select
            v-model="roleId"
            :rules="roleRules"
            :items="roleItems"
            label="Rôle"
            required
          />

          <v-select v-model="shopId" :items="shopItems" label="Boutique" />

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
        </v-card-text>
        <v-card-actions>
          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
          >
            Créer
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  //Penser à faire la method validate
  // Method qui fait disparaître shopId si roleId != 3 et le rend non required et l'inverse
  data() {
    return {
      roleId: "",
      roleRules: [(v) => !!v || "Le rôle est requis"],
      shopId: "",
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
      roleItems: [
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
  computed: {
    ...mapGetters(["shops"]),
    shopItems: function () {
      return this.shops.filter(function (i) {
        i.text = i.name;
        i.value = i.id;
        return i.deleted == false;
      });
    },
  },
  methods: {
    async handleSubmit() {
      await axios
        .post("users", {
          lastname: this.lastname,
          firstname: this.firstname,
          email: this.email,
          password: this.password,
          roleId: this.roleId, //à voir
          shopId: this.shopId, //à voir
        })
        .then((response) => {
          this.$store.dispatch("success", response.data.success);
          // Redirect to users page
        })
        .catch((error) => {
          this.$store.dispatch("error", error.response.data.error);
        });
    },
  },
};
</script>