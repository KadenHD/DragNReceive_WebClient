<template>
  <div class="Register">
    <v-form ref="form">
      <v-card class="elevation-24">
        <v-card-title>Ajouter un utilisateur </v-card-title>
        <v-card-text>
          <v-select
            @input="updateShop"
            v-model="roleId"
            :rules="roleRules"
            :items="currentUser.roleId == '1' ? roleItems : roleItemsFiltered"
            label="Rôle"
            prepend-inner-icon="mdi-shield-crown"
          />

          <v-select
            v-if="roleId == '3'"
            v-model="shopId"
            :rules="shopRules"
            :items="shopItems"
            label="Boutique"
            prepend-inner-icon="mdi-store"
          />

          <v-text-field
            v-model="lastname"
            :rules="lastNameRules"
            label="Nom"
            prepend-inner-icon="mdi-human-capacity-decrease"
            counter
          ></v-text-field>

          <v-text-field
            v-model="firstname"
            :rules="firstNameRules"
            label="Prénom"
            prepend-inner-icon="mdi-human-male"
            counter
          ></v-text-field>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            prepend-inner-icon="mdi-email"
            counter
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <router-link :to="{ name: 'Users' }">
            <v-btn color="error" dark class="mr-4"> Annuler </v-btn>
          </router-link>
          <v-btn color="success" class="mr-4" @click="submitUserCreateForm">
            Créer
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import {
  roleRules,
  shopRules,
  firstNameRules,
  lastNameRules,
  emailRules,
} from "@/functions/inputRules.js";

export default {
  created() {
    this.$store.dispatch("setShops");
  },
  data() {
    return {
      roleId: null,
      shopId: null,
      firstname: null,
      lastname: null,
      email: null,
      roleRules,
      shopRules,
      firstNameRules,
      lastNameRules,
      emailRules,

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
      roleItemsFiltered: [
        {
          text: "Partenaire",
          value: "3",
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["shops", "currentUser"]),
    shopItems: function () {
      return this.shops.filter(function (i) {
        i.text = i.name; /* select options display text */
        i.value = i.id; /* select options display value */
        return i.deleted == false; /* only not deleted shops */
      });
    },
  },
  methods: {
    updateShop() {
      this.shopId = null;
    },
    submitUserCreateForm() {
      if (this.$refs.form.validate()) {
        const data = {
          lastname: this.lastname,
          firstname: this.firstname,
          email: this.email,
          roleId: this.roleId,
          shopId: this.shopId,
        };
        this.$store.dispatch("createUser", data);
      }
    },
  },
};
</script>