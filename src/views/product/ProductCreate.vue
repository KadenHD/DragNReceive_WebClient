<template>
  <div class="ProductCreate">
    <v-form ref="form">
      <v-card class="elevation-24">
        <v-card-title>Ajouter un produit </v-card-title>
        <v-card-text>
          <v-file-input
            v-model="image"
            :rules="imageCreateRules"
            label="Ajoutez une image"
            show-size
            counter
          ></v-file-input>

          <v-text-field
            id="name"
            v-model="name"
            :rules="nameRules"
            label="Nom"
            prepend-inner-icon="mdi-cube-outline"
            counter
          ></v-text-field>

          <v-textarea
            id="description"
            v-model="description"
            :rules="descriptionRules"
            label="Description"
            prepend-inner-icon="mdi-feather"
            counter
          ></v-textarea>

          <v-text-field
            id="price"
            v-model="price"
            type="number"
            :rules="priceRules"
            label="Prix"
            prepend-inner-icon="mdi-currency-eur"
            counter
          ></v-text-field>

          <v-text-field
            id="stock"
            v-model="stock"
            type="number"
            :rules="stockRules"
            label="Stock"
            prepend-inner-icon="mdi-dropbox"
            counter
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <router-link :to="{ name: 'MyProducts' }">
            <v-btn id="close" color="error" dark class="mr-4"> Annuler </v-btn>
          </router-link>
          <v-btn
            id="create"
            color="success"
            class="mr-4"
            @click="submitProductCreateForm"
          >
            Créer
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </div>
</template>

<script>
import {
  imageCreateRules,
  nameRules,
  descriptionRules,
  priceRules,
  stockRules,
} from "@/utils/inputRules.js";

export default {
  data() {
    return {
      imageCreateRules,
      nameRules,
      descriptionRules,
      priceRules,
      stockRules,
      image: null,
      name: null,
      description: null,
      price: null,
      stock: null,
    };
  },
  methods: {
    submitProductCreateForm() {
      if (this.$refs.form.validate()) {
        const data = {
          name: this.name,
          description: this.description,
          price: this.price,
          stock: this.stock,
        };
        this.$store.dispatch("createProduct", {
          data,
          image: this.image,
        });
      }
    },
  },
};
</script>