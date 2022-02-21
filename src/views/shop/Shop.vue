<template>
  <div class="Shop">
    <v-card class="mx-auto mt-5 mb-5" max-width="1800">
      <v-card-text>
        <p class="TextTitle title text-center">
          {{ shopItems.name }}
          <b v-if="shopItems.deleted">(Supprimée)</b>
          <v-icon
            v-if="
              currentUser.roleId == '3' && shopItems.id == currentUser.shopId
            "
            @click="editItem"
          >
            mdi-pencil
          </v-icon>
        </p>
        <v-divider class="mr-2 ml-2" inset></v-divider>
        <v-img
          :src="shopItems.path ? shopItems.path : 'assets/img/default.svg'"
          :lazy-src="shopItems.path ? shopItems.path : 'assets/img/default.svg'"
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
              <v-col cols="12" sm="6" md="4"
                ><v-text-field
                  v-model="shopItems.email"
                  label="E-mail"
                  prepend-inner-icon="mdi-email"
                  disabled
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4"
                ><v-text-field
                  v-model="shopItems.phone"
                  label="Téléphone"
                  prepend-inner-icon="mdi-phone"
                  disabled
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4"
                ><v-text-field
                  v-model="shopItems.city"
                  label="Ville"
                  prepend-inner-icon="mdi-city"
                  disabled
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4"
                ><v-text-field
                  v-model="shopItems.street"
                  label="Rue"
                  prepend-inner-icon="mdi-home-city"
                  disabled
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4"
                ><v-text-field
                  v-model="shopItems.postal"
                  label="Code postal"
                  prepend-inner-icon="mdi-map-marker"
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
                  <v-file-input
                    v-model="currentItem.logo"
                    :rules="logoRules"
                    label="File input"
                    show-size
                    counter
                  ></v-file-input
                ></v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="currentItem.name"
                    :rules="nameRules"
                    label="Nom"
                    prepend-inner-icon="mdi-store"
                    counter
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4"
                  ><v-text-field
                    v-model="currentItem.email"
                    :rules="emailRules"
                    label="E-mail"
                    prepend-inner-icon="mdi-email"
                    counter
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4"
                  ><v-text-field
                    v-model="currentItem.phone"
                    :rules="phoneRules"
                    label="Téléphone"
                    prepend-inner-icon="mdi-phone"
                    counter
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4"
                  ><v-text-field
                    v-model="currentItem.city"
                    :rules="cityRules"
                    label="Ville"
                    prepend-inner-icon="mdi-city"
                    counter
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4"
                  ><v-text-field
                    v-model="currentItem.street"
                    :rules="streetRules"
                    label="Rue"
                    prepend-inner-icon="mdi-home-city"
                    counter
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4"
                  ><v-text-field
                    v-model="currentItem.postal"
                    :rules="postalRules"
                    type="number"
                    label="Code postal"
                    prepend-inner-icon="mdi-map-marker"
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
import { mapGetters } from "vuex";
import store from "@/store";
import {
  logoRules,
  nameRules,
  emailRules,
  phoneRules,
  cityRules,
  streetRules,
  postalRules,
} from "@/functions/inputRules.js";

export default {
  data() {
    return {
      logoRules,
      nameRules,
      emailRules,
      phoneRules,
      cityRules,
      streetRules,
      postalRules,
      path_url: process.env.VUE_APP_URL,
      dialogEdit: false,
      currentIndex: -1,
      currentItem: {},
    };
  },
  computed: {
    ...mapGetters(["currentUser"]),
    shopItems: function () {
      const data = store.getters.shop;
      if (data.path) {
        data.path = process.env.VUE_APP_URL + data.path;
      }
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
      console.log(this.currentItem.logo);
      if (this.$refs.formEdit.validate()) {
        const data = {
          id: this.shopItems.id,
          name: this.currentItem.name,
          email: this.currentItem.email,
          phone: this.currentItem.phone,
          city: this.currentItem.city,
          street: this.currentItem.street,
          postal: this.currentItem.postal,
        };

        if (this.currentItem.logo) {
          this.$store.dispatch("editShopFile", {
            data,
            logo: this.currentItem.logo,
          });
        } else {
          this.$store.dispatch("editShop", data);
        }
        this.closeEdit();
      }
    },
  },
};
</script>