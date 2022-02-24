<template>
  <div class="Users">
    <v-data-table
      :headers="headers"
      :items="shopItems"
      :items-per-page="10"
      :search="search"
      sort-by="statut"
      class="elevation-24"
    >
      <template v-slot:[`item.path`]="{ item }">
        <v-img
          :src="item.path ? item.path : 'assets/img/default.svg'"
          :lazy-src="item.path ? item.path : 'assets/img/default.svg'"
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
          <v-toolbar-title>Mes boutiques</v-toolbar-title>

          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>

          <router-link :to="{ name: 'ShopCreate' }">
            <v-btn color="success" dark class="mb-2">
              Ajouter une boutique
            </v-btn>
          </router-link>

          <v-dialog v-model="dialogDelete" max-width="1000px">
            <v-card>
              <v-card-title class="text-h5"
                >Souhaitez-vous vraiment supprimer la boutique n°
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
          label="Chercher une boutique"
          class="mx-4"
        ></v-text-field>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon v-if="!item.deleted" class="mr-2" @click="viewItem(item)">
          mdi-eye
        </v-icon>
        <v-icon
          v-if="!item.deleted && currentUser.roleId == '1'"
          class="mr-2"
          @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { reformatedDates } from "@/functions/index.js";

export default {
  data() {
    return {
      search: "",
      dialogDelete: false,
      currentIndex: -1,
      currentItem: {},
      headers: [
        { text: "Logo", value: "path" },
        { text: "Identifiant", value: "id" },
        { text: "Nom", value: "name" },
        { text: "E-mail", value: "email" },
        { text: "Téléphone", value: "phone" },
        { text: "Ville", value: "city" },
        { text: "Rue", value: "street" },
        { text: "Code postal", value: "postal" },
        { text: "Statut", value: "statut" },
        { text: "Membres", value: "countUsers" },
        { text: "Actions", value: "actions", sortable: false },
      ],
    };
  },

  computed: {
    ...mapGetters(["shops", "currentUser"]),
    shopItems: function () {
      return this.shops.filter(function (i) {
        i.createdAtReformated = reformatedDates(i.createdAt);
        i.updatedAtReformated = reformatedDates(i.updatedAt);
        i.countUsers = i.users.length;
        if (i.path) {
          i.path = process.env.VUE_APP_URL + i.path;
        }
        if (i.deleted) {
          i.statut = "Supprimée";
        } else {
          i.statut = "Ouverte";
        }
        return i;
      });
    },
  },

  watch: {
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.$store.dispatch("setShops");
  },

  methods: {
    viewItem(item) {
      this.$router.push({ name: "Shop", params: { id: item.id } });
    },

    deleteItem(item) {
      this.currentIndex = this.shopItems.indexOf(item);
      this.currentItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.currentItem = Object.assign({}, null);
        this.currentIndex = -1;
      });
    },
    deleteItemConfirm() {
      this.$store.dispatch("deleteShop", this.currentItem.id);
      this.closeDelete();
    },
  },
};
</script>