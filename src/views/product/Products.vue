<template>
  <div class="Products">
    <v-data-table
      :headers="headers"
      :items="productItems"
      :items-per-page="10"
      :search="search"
      sort-by="statut"
      class="elevation-24"
    >
      <template v-slot:[`item.path`]="{ item }">
        <v-img
          :src="item.path"
          :lazy-src="item.path"
          height="50px"
          width="50px"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="primary"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </template>
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Les produits</v-toolbar-title>

          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>

          <router-link
            v-if="currentUser.shopId"
            :to="{ name: 'ProductCreate' }"
          >
            <v-btn color="success" dark class="mb-2">
              Ajouter un produit
            </v-btn>
          </router-link>

          <v-dialog v-model="dialogView" max-width="1000px">
            <v-card>
              <v-card-title>
                <span class="text-h5">Produit n° {{ currentItem.id }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-img
                    class="mx-auto"
                    :src="currentItem.path"
                    :lazy-src="currentItem.path"
                    height="150px"
                    width="150px"
                  >
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          indeterminate
                          color="primary"
                        ></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>

                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="currentItem.name"
                        label="Nom"
                        prepend-inner-icon="mdi-human-capacity-decrease"
                        disabled
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="currentItem.description"
                        label="Description"
                        prepend-inner-icon="mdi-human-capacity-decrease"
                        disabled
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="currentItem.price"
                        label="Prix"
                        prepend-inner-icon="mdi-human-capacity-decrease"
                        disabled
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="currentItem.stock"
                        label="Stock"
                        prepend-inner-icon="mdi-human-capacity-decrease"
                        disabled
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="currentItem.statut"
                        label="Statut"
                        prepend-inner-icon="mdi-human-capacity-decrease"
                        disabled
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="currentItem.createdAtReformated"
                        label="Date de création"
                        prepend-inner-icon="mdi-clock"
                        disabled
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="currentItem.updatedAtReformated"
                        label="Dernière modification"
                        prepend-inner-icon="mdi-clock-outline"
                        disabled
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="error" text @click="closeView"> Fermer </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-dialog v-model="dialogEdit" max-width="1000px">
            <v-card>
              <v-card-title>
                <span class="text-h5"
                  >Modifier le produit n° {{ currentItem.id }}</span
                >
              </v-card-title>
              <v-form ref="form">
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4"
                        ><v-file-input
                          v-model="currentItem.image"
                          :rules="imageRules"
                          label="Ajoutez une image"
                          show-size
                          counter
                        ></v-file-input
                      ></v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="currentItem.name"
                          :rules="nameRules"
                          label="Nom"
                          prepend-inner-icon="mdi-human-capacity-decrease"
                          counter
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="currentItem.description"
                          :rules="descriptionRules"
                          label="Description"
                          prepend-inner-icon="mdi-human-capacity-decrease"
                          counter
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="currentItem.price"
                          type="number"
                          :rules="priceRules"
                          label="Prix"
                          prepend-inner-icon="mdi-human-capacity-decrease"
                          counter
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="currentItem.stock"
                          type="number"
                          :rules="stockRules"
                          label="Stock"
                          prepend-inner-icon="mdi-human-capacity-decrease"
                          counter
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
              </v-form>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="error" text @click="closeEdit"> Annuler </v-btn>
                <v-btn color="primary" text @click="saveEdit">
                  Enregistrer
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-dialog v-model="dialogDelete" max-width="1000px">
            <v-card>
              <v-card-title class="text-h5"
                >Souhaitez-vous vraiment supprimer le produit n°
                {{ currentItem.id }} ?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="error" text @click="closeDelete">Annuler</v-btn>
                <v-btn color="primary" text @click="deleteItemConfirm()"
                  >Supprimer</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
        <v-text-field
          v-model="search"
          label="Chercher un produit"
          class="mx-4"
        ></v-text-field>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon class="mr-2" v-if="!item.deleted" @click="viewItem(item)">
          mdi-eye
        </v-icon>
        <v-icon class="mr-2" v-if="currentUser.shopId" @click="editItem(item)">
          mdi-pencil
        </v-icon>
        <v-icon
          class="mr-2"
          v-if="currentUser.shopId"
          @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import store from "@/store";
import { mapGetters } from "vuex";
import {
  imageRules,
  nameRules,
  descriptionRules,
  priceRules,
  stockRules,
} from "@/functions/inputRules.js";
import { reformatedDates } from "@/functions/index.js";

export default {
  data() {
    return {
      imageRules,
      nameRules,
      descriptionRules,
      priceRules,
      stockRules,
      search: "",
      path_url: process.env.VUE_APP_URL,
      dialogView: false,
      dialogEdit: false,
      dialogDelete: false,
      currentIndex: -1,
      currentItem: {},
      headers: [
        { text: "Image", value: "path" },
        { text: "Nom", value: "name" },
        { text: "Prix", value: "price" },
        { text: "Stock", value: "stock" },
        { text: "Statut", value: "statut" },
        { text: "Date de création", value: "createdAtReformated" },
        { text: "Dernière modification", value: "updatedAtReformated" },
        { text: "Actions", value: "actions", sortable: false },
      ],
    };
  },

  computed: {
    ...mapGetters(["shop", "currentUser"]),
    productItems: function () {
      return this.shop.products.filter(function (i) {
        i.createdAtReformated = reformatedDates(i.createdAt);
        i.updatedAtReformated = reformatedDates(i.updatedAt);
        if (i.path) {
          i.path = process.env.VUE_APP_URL + i.path;
        }
        if (i.deleted) {
          i.statut = "Supprimé";
        } else {
          i.statut = "Disponible";
        }
        return i;
      });
    },
  },

  watch: {
    dialogView(val) {
      val || this.closeView();
    },
    dialogEdit(val) {
      val || this.closeEdit();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    if (this.$route.name == "MyProducts") {
      this.$store.dispatch("setShop", store.getters.currentUser.shopId);
    } else if (this.$route.name == "Products") {
      this.$store.dispatch("setShop", this.$route.params.id);
    }
  },

  methods: {
    viewItem(item) {
      this.currentIndex = this.productItems.indexOf(item);
      this.currentItem = Object.assign({}, item);
      this.dialogView = true;
    },
    editItem(item) {
      this.currentIndex = this.productItems.indexOf(item);
      this.currentItem = Object.assign({}, item);
      this.dialogEdit = true;
    },
    deleteItem(item) {
      this.currentIndex = this.productItems.indexOf(item);
      this.currentItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    closeView() {
      this.dialogView = false;
      this.$nextTick(() => {
        this.currentItem = Object.assign({}, null);
        this.currentIndex = -1;
      });
    },
    closeEdit() {
      this.dialogEdit = false;
      this.$nextTick(() => {
        this.currentItem = Object.assign({}, null);
        this.currentIndex = -1;
      });
    },
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.currentItem = Object.assign({}, null);
        this.currentIndex = -1;
      });
    },

    saveEdit() {
      if (this.$refs.form.validate()) {
        const data = {
          id: this.currentItem.id,
          name: this.currentItem.name,
          description: this.currentItem.description,
          price: this.currentItem.price,
          stock: this.currentItem.stock,
          shopId: this.currentUser.shopId,
        };
        if (this.currentItem.image) {
          this.$store.dispatch("editProductFile", {
            data,
            image: this.currentItem.image,
          });
        } else {
          this.$store.dispatch("editProduct", data);
        }
        this.closeEdit();
      }
    },

    deleteItemConfirm() {
      const data = {
        id: this.currentItem.id,
        shopId: this.currentItem.shopId,
      };
      this.$store.dispatch("deleteProduct", data);
      this.closeDelete();
    },
  },
};
</script>