<template>
  <div class="Shop">
    <v-card class="mx-auto mt-5 mb-5" max-width="1800">
      <v-card-text>
        <p class="TextTitle title text-center">
          {{ shopItems.name }}
          <b v-if="shopItems.deleted">(Supprimée)</b>
          <v-icon @click="editItem"> mdi-pencil </v-icon>
        </p>
        <v-divider class="mr-2 ml-2" inset></v-divider>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="shopItems.name"
                  label="Nom"
                  prepend-inner-icon="mdi-store"
                  disabled
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card-text>
    </v-card>

    <v-dialog v-model="dialogEdit" max-width="1000px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Modifier les informations</span>
        </v-card-title>
        <v-form ref="formEdit">
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="currentItem.name"
                    :rules="nameRules"
                    label="Nom"
                    prepend-inner-icon="mdi-store"
                    counter
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-form>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeEdit"> Annuler </v-btn>
          <v-btn color="blue darken-1" text @click="saveEdit">
            Enregistrer
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-card
      v-if="shopItems.products"
      class="mx-auto mt-5 mb-5"
      max-width="1800"
      align="center"
    >
      <v-card-text>
        <p class="TextTitle title text-center">Mes produits</p>
        <v-divider class="mr-2 ml-2" inset></v-divider>
      </v-card-text>

      <router-link :to="{ name: '' }">
        <v-btn color="primary" dark class="mb-2 mt-2">Voir</v-btn>
      </router-link>
    </v-card>
  </div>
</template>

<script>
import store from "@/store";
import {} from "@/functions/inputRules.js";
import { reformatedDates } from "@/functions/index.js";

export default {
  data() {
    return {
      path_url: process.env.VUE_APP_URL,
      dialogEdit: false,
      currentIndex: -1,
      currentItem: {},
    };
  },
  computed: {
    shopItems: function () {
      const data = store.getters.shop;
      console.log(data);
      data.createdAtReformated = reformatedDates(data.createdAt);
      data.updatedAtReformated = reformatedDates(data.updatedAt);
      return data;
    },
  },
  watch: {
    dialogEdit(val) {
      val || this.closeEdit();
    },
  },
  created() {
    if (this.$route.name == "MyShop") {
      this.$store.dispatch("setShop", store.getters.currentUser.shopId);
    } else if (this.$route.name == "Shop") {
      this.$store.dispatch("setShop", this.$route.params.id);
    }
  },
  methods: {
    editItem() {
      this.currentIndex = this.shopItems;
      this.currentItem = Object.assign({}, this.shopItems);
      this.dialogEdit = true;
    },
    closeEdit() {
      this.dialogEdit = false;
      this.$nextTick(() => {
        this.currentItem = Object.assign({}, null);
        this.currentIndex = -1;
      });
    },
    saveEdit() {
      if (this.$refs.formEdit.validate()) {
        const data = {
          id: this.shopItems.id,
        };
        this.$store.dispatch("editShop", data);
        this.closeEdit();
      }
    },
  },
};
</script>