<template>
  <div class="Register">
    <v-form ref="form">
      <v-card>
        <v-card-title>Inscrivez-vous</v-card-title>
        <v-card-text>
          <v-select
            @input="updateShop"
            v-model="roleId"
            :rules="roleRules"
            :items="roleItems"
            label="Rôle"
          />

          <v-select
            v-if="roleId == 3"
            v-model="shopId"
            :rules="shopRules"
            :items="shopItems"
            label="Boutique"
          />

          <v-text-field
            v-model="lastname"
            :rules="lastNameRules"
            label="Nom"
          ></v-text-field>

          <v-text-field
            v-model="firstname"
            :rules="firstNameRules"
            label="Prénom"
          ></v-text-field>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
          ></v-text-field>

          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Mot de passe"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn color="success" class="mr-4" @click="submitUserCreateForm">
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
  // Faire apparaître que le roleId partenaire si le currentUser == 2 sinon tout
  data() {
    return {
      roleId: null,
      shopId: null,
      firstname: null,
      lastname: null,
      email: null,
      password: null,

      roleRules: [(v) => !!v || "Le rôle est requis"],
      shopRules: [(v) => !!v || "La boutique est requise"],
      firstNameRules: [(v) => !!v || "Le prénom est requis"],
      lastNameRules: [(v) => !!v || "Le nom est requis"],
      emailRules: [
        (v) => !!v || "L'e-mail est requis",
        (v) => /.+@.+\..+/.test(v) || "Le format de l'e-mail doit être valide",
      ],
      passwordRules: [(v) => !!v || "Le mot de passe est requis"],

      roleItems: [
        {
          text: "Super-Admin",
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
        i.text = i.name; // select options display text
        i.value = i.id; // select options display value
        return i.deleted == false; // only not deleted shops
      });
    },
  },
  methods: {
    updateShop() {
      this.shopId = null;
    },
    submitUserCreateForm() {
      if (this.$refs.form.validate()) {
        axios
          .post("users", {
            lastname: this.lastname,
            firstname: this.firstname,
            email: this.email,
            password: this.password,
            roleId: this.roleId,
            shopId: this.shopId,
          })
          .then((response) => {
            this.$store.dispatch("success", response.data.success);
            //this.$router.push({ name: "" }); // all Users page
          })
          .catch((error) => {
            this.$store.dispatch("error", error.response.data.error);
          });
      }
    },
  },
};
</script>