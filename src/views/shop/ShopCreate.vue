<template>
  <div class="ShopCreate">
    <v-form ref="form">
      <v-card class="elevation-24">
        <v-card-title>Ajouter une boutique </v-card-title>
        <v-card-text>
          <v-text-field
            id="name"
            v-model="name"
            :rules="nameRules"
            label="Nom"
            prepend-inner-icon="mdi-store"
            counter
          ></v-text-field>
          <v-text-field
            id="email"
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            prepend-inner-icon="mdi-email"
            counter
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <router-link id="close" :to="{ name: 'Shops' }">
            <v-btn id="close" color="error" dark class="mr-4"> Annuler </v-btn>
          </router-link>
          <v-btn
            id="save"
            color="success"
            class="mr-4"
            @click="submitShopCreateForm"
          >
            Créer
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </div>
</template>

<script>
import { nameRules, emailRules } from "@/functions/inputRules.js";

export default {
  data() {
    return {
      name: null,
      email: null,
      nameRules,
      emailRules,
    };
  },
  methods: {
    submitShopCreateForm() {
      if (this.$refs.form.validate()) {
        const data = {
          name: this.name,
          email: this.email,
        };
        this.$store.dispatch("createShop", data);
      }
    },
  },
};
</script>