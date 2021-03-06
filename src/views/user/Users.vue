<template>
  <div class="Users">
    <v-data-table
      :headers="headers"
      :items="userItems"
      :items-per-page="10"
      :search="search"
      sort-by="lastname"
      class="elevation-24"
    >
      <template v-slot:[`item.path`]="{ item }">
        <v-avatar height="50px" width="50px">
          <v-img
            :src="item.path ? item.path : 'assets/img/user.svg'"
            :lazy-src="item.path ? item.path : 'assets/img/user.svg'"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="primary"
                ></v-progress-circular>
              </v-row>
            </template> </v-img
        ></v-avatar>
      </template>
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Mes utilisateurs</v-toolbar-title>

          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>

          <router-link id="user-create" :to="{ name: 'UserCreate' }">
            <v-btn id="user-create" color="success" dark class="mb-2">
              Ajouter un utilisateur
            </v-btn>
          </router-link>

          <v-dialog v-model="dialogView" max-width="1000px">
            <v-card>
              <v-card-title>
                <span class="text-h5">Utilisateur n° {{ currentItem.id }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <div class="mt-4 mb-4 text-center">
                    <v-avatar height="150px" width="150px">
                      <v-img
                        :src="
                          currentItem.path
                            ? currentItem.path
                            : 'assets/img/user.svg'
                        "
                        :lazy-src="
                          currentItem.path
                            ? currentItem.path
                            : 'assets/img/user.svg'
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
                        </template>
                      </v-img>
                    </v-avatar>
                  </div>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="currentItem.lastname"
                        label="Nom"
                        prepend-inner-icon="mdi-human-capacity-decrease"
                        disabled
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="currentItem.firstname"
                        label="Prénom"
                        prepend-inner-icon="mdi-human-male"
                        disabled
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="currentItem.email"
                        label="E-mail"
                        prepend-inner-icon="mdi-email"
                        disabled
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="currentItem.roleName"
                        label="Rôle"
                        prepend-inner-icon="mdi-shield-crown"
                        disabled
                      ></v-text-field>
                    </v-col>
                    <v-col v-if="currentItem.shop" cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="currentItem.shop.name"
                        label="Boutique"
                        prepend-inner-icon="mdi-store"
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
                <v-btn id="closeView" color="error" text @click="closeView">
                  Fermer
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-dialog v-model="dialogEdit" max-width="1000px">
            <v-card>
              <v-card-title>
                <span class="text-h5"
                  >Modifier l'utilisateur n° {{ currentItem.id }}</span
                >
              </v-card-title>
              <v-form ref="form">
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          id="lastname"
                          v-model="currentItem.lastname"
                          :rules="lastNameRules"
                          label="Nom"
                          prepend-inner-icon="mdi-human-capacity-decrease"
                          counter
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          id="firstname"
                          v-model="currentItem.firstname"
                          :rules="firstNameRules"
                          label="Prénom"
                          prepend-inner-icon="mdi-human-male"
                          counter
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          id="email"
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
                <v-btn id="closeEdit" color="error" text @click="closeEdit">
                  Annuler
                </v-btn>
                <v-btn id="saveEdit" color="primary" text @click="saveEdit">
                  Enregistrer
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-dialog v-model="dialogDelete" max-width="1000px">
            <v-card>
              <v-card-title class="text-h5"
                >Souhaitez-vous vraiment supprimer l'utilisateur n°
                {{ currentItem.id }} ?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn id="closeDelete" color="error" text @click="closeDelete"
                  >Annuler</v-btn
                >
                <v-btn
                  id="deleteItemConfirm"
                  color="primary"
                  text
                  @click="deleteItemConfirm()"
                  >Supprimer</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
        <v-text-field
          v-model="search"
          label="Chercher un utilisateur"
          class="mx-4"
        ></v-text-field>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon id="viewItem" class="mr-2" @click="viewItem(item)">
          mdi-eye
        </v-icon>
        <v-icon id="editItem" class="mr-2" @click="editItem(item)">
          mdi-pencil
        </v-icon>
        <v-icon
          id="deleteItem"
          class="mr-2"
          v-if="currentUser.roleId == '1' && item.roleId != '1'"
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
  firstNameRules,
  lastNameRules,
  emailRules,
} from "@/utils/inputRules.js";
import { roledName, reformatedDates } from "@/utils/index.js";

export default {
  data() {
    return {
      search: "",
      path_url: process.env.VUE_APP_URL,
      firstNameRules,
      lastNameRules,
      emailRules,
      dialogView: false,
      dialogEdit: false,
      dialogDelete: false,
      currentIndex: -1,
      currentItem: {},
      headers: [
        { text: "Logo", value: "path" },
        { text: "Identifiant", value: "id" },
        { text: "Nom", value: "lastname" },
        { text: "Prénom", value: "firstname" },
        { text: "E-mail", value: "email" },
        { text: "Rôle", value: "roleName" },
        { text: "Boutique", value: "shop.name" },
        { text: "Date de création", value: "createdAtReformated" },
        { text: "Dernière modification", value: "updatedAtReformated" },
        { text: "Actions", value: "actions", sortable: false },
      ],
    };
  },

  computed: {
    ...mapGetters(["users", "currentUser"]),
    userItems: function () {
      if (!this.users) {
        return [];
      } else {
        return this.users.filter(function (i) {
          i.roleName = roledName(i.roleId);
          i.createdAtReformated = reformatedDates(i.createdAt);
          i.updatedAtReformated = reformatedDates(i.updatedAt);
          if (i.path) {
            i.path = process.env.VUE_APP_URL + i.path;
          }
          if (i.id != store.getters.currentUser.id) {
            return i;
          }
        });
      }
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
    this.$store.dispatch("setUsers");
  },

  methods: {
    viewItem(item) {
      this.currentIndex = this.userItems.indexOf(item);
      this.currentItem = Object.assign({}, item);
      this.dialogView = true;
    },
    editItem(item) {
      this.currentIndex = this.userItems.indexOf(item);
      this.currentItem = Object.assign({}, item);
      this.dialogEdit = true;
    },
    deleteItem(item) {
      this.currentIndex = this.userItems.indexOf(item);
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
          lastname: this.currentItem.lastname,
          firstname: this.currentItem.firstname,
          email: this.currentItem.email,
          route: "Users",
        };
        this.$store.dispatch("editUser", data);
        this.closeEdit();
      }
    },

    deleteItemConfirm() {
      this.$store.dispatch("deleteUser", this.currentItem.id);
      this.closeDelete();
    },
  },
};
</script>