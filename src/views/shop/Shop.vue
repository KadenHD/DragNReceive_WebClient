<template>
  <div class="Shop">
    <v-card class="mx-auto mt-5 mb-5" max-width="1800" elevation="24">
      <v-card-text>
        <p class="TextTitle title text-center">
          {{ shopItems.name }}
          <v-icon
            id="editItem"
            v-if="
              currentUser.roleId == '3' && shopItems.id == currentUser.shopId
            "
            @click="editItem"
          >
            mdi-pencil
          </v-icon>
        </p>
        <v-divider class="mr-2 ml-2" inset></v-divider>
        <v-row class="mt-4" justify="center" height="150px" width="150px">
          <div>
            <v-img
              :src="
                shopItems.path
                  ? path_url + shopItems.path
                  : '../../assets/img/default.svg'
              "
              :lazy-src="
                shopItems.path
                  ? path_url + shopItems.path
                  : '../../assets/img/default.svg'
              "
              max-height="300px"
              max-width="300px"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="primary"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img></div
        ></v-row>
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
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="shopItems.createdAtReformated"
                  label="Date de création"
                  prepend-inner-icon="mdi-clock"
                  disabled
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="shopItems.updatedAtReformated"
                  label="Dernière modification"
                  prepend-inner-icon="mdi-clock-outline"
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
                    label="Ajoutez un logo"
                    show-size
                    counter
                  ></v-file-input
                ></v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    id="name"
                    v-model="currentItem.name"
                    :rules="nameRules"
                    label="Nom"
                    prepend-inner-icon="mdi-store"
                    counter
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4"
                  ><v-text-field
                    id="email"
                    v-model="currentItem.email"
                    :rules="emailRules"
                    label="E-mail"
                    prepend-inner-icon="mdi-email"
                    counter
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4"
                  ><v-text-field
                    id="phone"
                    v-model="currentItem.phone"
                    :rules="phoneRules"
                    label="Téléphone"
                    prepend-inner-icon="mdi-phone"
                    counter
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4"
                  ><v-text-field
                    id="city"
                    v-model="currentItem.city"
                    :rules="cityRules"
                    label="Ville"
                    prepend-inner-icon="mdi-city"
                    counter
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4"
                  ><v-text-field
                    id="street"
                    v-model="currentItem.street"
                    :rules="streetRules"
                    label="Rue"
                    prepend-inner-icon="mdi-home-city"
                    counter
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4"
                  ><v-text-field
                    id="postal"
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
          <v-btn id="closeEdit" color="error" text @click="closeEdit">
            Annuler
          </v-btn>
          <v-btn id="saveEdit" color="primary" text @click="saveEdit">
            Enregistrer
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-card
      v-if="userItems"
      class="mx-auto mt-5 mb-5"
      max-width="1800"
      align="center"
      elevation="24"
    >
      <v-card-text>
        <p class="TextTitle title text-center">Mes partenaires</p>
        <v-divider class="mr-2 ml-2" inset></v-divider>
        <v-row class="mt-4 mb-2" align="center">
          <v-col v-for="(user, index) in userItems" :key="index" sm="16" md="2">
            <v-avatar height="50px" width="50px" class="ml-2 mr-2">
              <v-img
                :src="
                  user.path ? path_url + user.path : '../../assets/img/user.svg'
                "
                :lazy-src="
                  user.path ? path_url + user.path : '../../assets/img/user.svg'
                "
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
                </template> </v-img
            ></v-avatar>
            <p>{{ user.lastname }} {{ user.firstname }}</p>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <v-card
      v-if="productItems"
      class="mx-auto mt-5 mb-5"
      max-width="1800"
      align="center"
      elevation="24"
    >
      <v-card-text>
        <p class="TextTitle title text-center">Mes produits</p>
        <v-divider class="mr-2 ml-2" inset></v-divider>
        <v-row class="mt-4 mb-2" align="center">
          <v-col
            v-for="(product, index) in productItems"
            :key="index"
            sm="16"
            md="3"
          >
            <v-card class="mx-auto" max-width="344">
              <v-img
                :src="path_url + product.path"
                :lazy-src="path_url + product.path"
                height="200px"
                width="200px"
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

              <v-card-title class="TextTitle title">
                {{ product.name }}
              </v-card-title>
              <v-card-subtitle class="title TextLinks">
                {{ product.price }} €</v-card-subtitle
              >
            </v-card>
          </v-col>
          <v-col sm="16" md="3">
            <router-link :to="{ name: routeName }">
              <v-icon class="plusIcon" color="primary">mdi-plus-circle</v-icon>
            </router-link>
            <p>Voir plus de produits...</p>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import {
  logoRules,
  nameRules,
  emailRules,
  phoneRules,
  cityRules,
  streetRules,
  postalRules,
} from "@/functions/inputRules.js";
import { reformatedDates } from "@/functions/index.js";
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
      routeName: null,
    };
  },
  computed: {
    ...mapGetters(["currentUser", "shop"]),
    userItems: function () {
      const data = this.shop.users;
      if (!data) {
        return [];
      } else {
        if (data.length == 0) {
          return [];
        }
        return data;
      }
    },
    shopItems: function () {
      const data = this.shop;
      if (!data) {
        return [];
      } else {
        if (data.length == 0) {
          return null;
        }
        data.createdAtReformated = reformatedDates(data.createdAt);
        data.updatedAtReformated = reformatedDates(data.updatedAt);
        return data;
      }
    },
    productItems: function () {
      if (!this.shop.products) {
        return [];
      } else {
        let data = this.shop.products.filter(
          (product) => product.deleted === false
        );
        if (data.length <= 3) {
          return data;
        } else {
          data = data.sort(function (a, b) {
            var keyA = new Date(a.createdAt),
              keyB = new Date(b.createdAt);
            // Compare the 2 dates
            if (keyA < keyB) return -1;
            if (keyA > keyB) return 1;
            return 0;
          });
          data = [data[0], data[1], data[2]];
          return data;
        }
      }
    },
  },
  watch: {
    dialogEdit(val) {
      val || this.closeEdit();
    },
  },
  created() {
    if (this.$route.name == "MyShop") {
      this.routeName = "MyProducts";
      this.$store.dispatch("setShop", this.currentUser.shopId);
    } else if (this.$route.name == "Shop") {
      this.routeName = "Products";
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
          name: this.currentItem.name,
          email: this.currentItem.email,
          phone: this.currentItem.phone,
          city: this.currentItem.city,
          street: this.currentItem.street,
          postal: parseInt(this.currentItem.postal),
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

<style>
.Shop .plusIcon {
  font-size: 100px;
}
.Shop .plusIcon:hover {
  transform: rotate(180deg);
  transition-duration: 1s;
  color: #afb854 !important;
}
</style>