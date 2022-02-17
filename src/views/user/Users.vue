<template>
  <div class="Users">
    <v-data-table
      :headers="headers"
      :items="userItems"
      :items-per-page="10"
      class="elevation-24"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Mes utilisateurs</v-toolbar-title>

          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>

          <router-link :to="{ name: 'UserCreate' }">
            <v-btn color="success" dark class="mb-2">
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
                <v-btn color="blue darken-1" text @click="closeView">
                  Fermer
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-dialog v-model="dialogEdit" max-width="1000px">
            <v-card>
              <v-card-title>
                <span class="text-h5">Modifier l'utilisateur</span>
              </v-card-title>
              <v-form ref="form">
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
                <v-btn color="blue darken-1" text @click="closeEdit">
                  Annuler
                </v-btn>
                <v-btn color="blue darken-1" text @click="saveEdit">
                  Enregistrer
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-dialog v-model="dialogDelete" max-width="1000px">
            <v-card>
              <v-card-title class="text-h5"
                >Souhaitez-vous vraiment créer cet utilisateur ?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete"
                  >Annuler</v-btn
                >
                <v-btn color="blue darken-1" text @click="deleteItemConfirm()"
                  >Supprimer</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon class="mr-2" @click="viewItem(item)"> mdi-eye </v-icon>
        <v-icon class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon
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
} from "@/functions/inputRules.js";
import { roleName, reformatedDates } from "@/functions/index.js";

export default {
  data: () => ({
    firstNameRules,
    lastNameRules,
    emailRules,
    dialogView: false,
    dialogEdit: false,
    dialogDelete: false,
    currentIndex: -1,
    currentItem: {},
    headers: [
      { text: "Nom", value: "lastname" },
      { text: "Prénom", value: "firstname" },
      { text: "E-mail", value: "email" },
      { text: "Rôle", value: "roleName" },
      { text: "Boutique", value: "shop.name" },
      { text: "Date de création", value: "createdAtReformated" },
      { text: "Dernière modification", value: "updatedAtReformated" },
      { text: "Actions", value: "actions", sortable: false },
    ],
  }),

  computed: {
    ...mapGetters(["users", "currentUser"]),
    userItems: function () {
      return this.users.filter(function (i) {
        i.roleName = roleName(i.roleId);
        i.createdAtReformated = reformatedDates(i.createdAt);
        i.updatedAtReformated = reformatedDates(i.updatedAt);
        if (i.id != store.getters.currentUser.id) {
          return i;
        }
      });
    },
  },

  watch: {
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
        this.$store.dispatch("editUser", this.currentItem);
        this.closeEdit();
      }
    },

    deleteItemConfirm() {
      this.$store.dispatch("deleteUser", this.currentItem);
      this.closeDelete();
    },
  },
};
</script>