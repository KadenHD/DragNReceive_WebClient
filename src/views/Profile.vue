<template>
  <div class="Profile">
    <v-card class="mx-auto mt-5 mb-5" max-width="800">
      <v-card-text>
        <p class="TextTitle title text-center">
          Mes informations
          <v-icon @click="editItem"> mdi-pencil </v-icon>
        </p>
        <v-divider class="mr-2 ml-2" inset></v-divider>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="userItems.lastname"
                  label="Nom"
                  prepend-inner-icon="mdi-human-capacity-decrease"
                  disabled
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="userItems.firstname"
                  label="Prénom"
                  prepend-inner-icon="mdi-human-male"
                  disabled
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="userItems.email"
                  label="E-mail"
                  prepend-inner-icon="mdi-email"
                  disabled
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="userItems.roleName"
                  label="Rôle"
                  prepend-inner-icon="mdi-shield-crown"
                  disabled
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="userItems.createdAtReformated"
                  label="Date de création"
                  prepend-inner-icon="mdi-clock"
                  disabled
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="userItems.updatedAtReformated"
                  label="Dernière modification"
                  prepend-inner-icon="mdi-clock-outline"
                  disabled
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card-text>
      <p class="text-center">
        <v-btn color="warning" dark class="mb-2" @click="editPassItem"
          >Changer de mot de passe</v-btn
        >
      </p>
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
                    v-model="currentItem.lastname"
                    :rules="lastNameRules"
                    label="Nom"
                    prepend-inner-icon="mdi-human-capacity-decrease"
                    counter
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="currentItem.firstname"
                    :rules="firstNameRules"
                    label="Prénom"
                    prepend-inner-icon="mdi-human-male"
                    counter
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="currentItem.email"
                    :rules="emailRules"
                    label="E-mail"
                    prepend-inner-icon="mdi-email"
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

    <v-dialog v-model="dialogEditPass" max-width="1000px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Modifier le mot de passe</span>
        </v-card-title>
        <v-form ref="formEditPass">
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="currentItem.actualPassword"
                    :rules="passwordRules"
                    label="Mot de passe actuel"
                    prepend-inner-icon="mdi-lock"
                    :append-icon="
                      showActualPassword ? 'mdi-eye' : 'mdi-eye-off'
                    "
                    :type="showActualPassword ? 'text' : 'password'"
                    @click:append="showActualPassword = !showActualPassword"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="currentItem.newPassword"
                    :rules="passwordRules"
                    label="Nouveau mot de passe"
                    prepend-inner-icon="mdi-lock"
                    :append-icon="showNewPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showNewPassword ? 'text' : 'password'"
                    @click:append="showNewPassword = !showNewPassword"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-form>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeEditPass">
            Annuler
          </v-btn>
          <v-btn color="blue darken-1" text @click="saveEditPass">
            Enregistrer
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-card
      v-if="userItems.shop"
      class="mx-auto mt-5 mb-5"
      max-width="800"
      align="center"
    >
      <v-card-text>
        <p class="TextTitle title text-center">Ma boutique</p>
        <v-divider class="mr-2 ml-2" inset></v-divider>
      </v-card-text>
      <p class="MainText">{{ userItems.shop.name }}</p>
      <v-img
        :src="
          userItems.shop.path
            ? path_url + userItems.shop.path
            : 'assets/img/default.svg'
        "
        :lazy-src="
          userItems.shop.path
            ? path_url + userItems.shop.path
            : 'assets/img/default.svg'
        "
        height="200px"
        width="400px"
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
      <router-link :to="{ name: 'MyShop' }">
        <v-btn color="primary" dark class="mb-2 mt-2">Voir</v-btn>
      </router-link>
    </v-card>
  </div>
</template>

<script>
import store from "@/store";
import {
  firstNameRules,
  lastNameRules,
  emailRules,
  passwordRules,
} from "@/functions/inputRules.js";
import { roledName, reformatedDates } from "@/functions/index.js";

export default {
  data() {
    return {
      path_url: process.env.VUE_APP_URL,
      firstNameRules,
      lastNameRules,
      emailRules,
      passwordRules,
      showNewPassword: false,
      showActualPassword: false,
      dialogEdit: false,
      dialogEditPass: false,
      currentIndex: -1,
      currentItem: {},
    };
  },
  computed: {
    userItems: function () {
      const data = store.getters.user;
      data.roleName = roledName(data.roleId);
      data.createdAtReformated = reformatedDates(data.createdAt);
      data.updatedAtReformated = reformatedDates(data.updatedAt);
      return data;
    },
  },
  watch: {
    dialogEdit(val) {
      val || this.closeEdit();
    },
    dialogEditPass(val) {
      val || this.closeEditPass();
    },
  },
  created() {
    this.$store.dispatch("setUser", store.getters.currentUser.id);
  },
  methods: {
    editItem() {
      this.currentIndex = this.userItems;
      this.currentItem = Object.assign({}, this.userItems);
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
          id: this.userItems.id,
          lastname: this.currentItem.lastname,
          firstname: this.currentItem.firstname,
          email: this.currentItem.email,
          route: "Profile",
        };
        this.$store.dispatch("editUser", data);
        this.closeEdit();
      }
    },

    editPassItem() {
      this.dialogEditPass = true;
    },
    closeEditPass() {
      this.dialogEditPass = false;
      this.$nextTick(() => {
        this.currentItem = Object.assign({}, null);
        this.currentIndex = -1;
      });
    },
    saveEditPass() {
      if (this.$refs.formEditPass.validate()) {
        const data = {
          id: this.userItems.id,
          newPassword: this.currentItem.newPassword,
          actualPassword: this.currentItem.actualPassword,
          route: "Profile",
        };
        this.$store.dispatch("editUser", data);
        this.closeEditPass();
      }
    },
  },
};
</script>