<template>
  <div class="Tickets">
    <v-data-table
      :headers="headers"
      :items="ticketItems"
      :items-per-page="10"
      :search="search"
      sort-by="statusName"
      :sort-desc="true"
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
          <v-toolbar-title>Mes tickets</v-toolbar-title>

          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>

          <router-link v-if="currentUser.shopId" :to="{ name: 'TicketCreate' }">
            <v-btn id="ticket-create" color="success" dark class="mb-2">
              Créer un ticket
            </v-btn>
          </router-link>

          <v-dialog v-model="dialogDelete" max-width="1000px">
            <v-card>
              <v-card-title class="text-h5"
                >Souhaitez-vous vraiment supprimer le ticket n°
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
          label="Chercher un ticket"
          class="mx-4"
        ></v-text-field>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon class="mr-2" @click="viewItem(item)"> mdi-eye </v-icon>
        <v-icon
          v-if="item.ticketStatusId == 1"
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
import store from "@/store";
import { mapGetters } from "vuex";
import { statusName, roledName, reformatedDates } from "@/functions/index.js";

export default {
  data() {
    return {
      search: "",
      path_url: process.env.VUE_APP_URL,
      dialogView: false,
      dialogEdit: false,
      dialogDelete: false,
      currentIndex: -1,
      currentItem: {},
      headers: [],
    };
  },

  computed: {
    ...mapGetters(["tickets", "currentUser"]),
    ticketItems: function () {
      if (!this.tickets) {
        return [];
      } else {
        return this.tickets.filter(function (i) {
          i.statusName = statusName(i.ticketStatusId);
          i.roleName = roledName(i.user.roleId);
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
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.$store.dispatch("setTickets");
    if (this.currentUser.shopId) {
      this.headers = [
        { text: "Statut", value: "statusName" },
        { text: "Titre", value: "title" },
        { text: "Contenu", value: "content" },
        { text: "Date de création", value: "createdAtReformated" },
        { text: "Dernière modification", value: "updatedAtReformated" },
        { text: "Actions", value: "actions", sortable: false },
      ];
    } else {
      this.headers = [
        { text: "Statut", value: "statusName" },
        { text: "Identifiant", value: "id" },
        { text: "Titre", value: "title" },
        { text: "Utilisateur", value: "roleName" },
        { text: "Date de création", value: "createdAtReformated" },
        { text: "Dernière modification", value: "updatedAtReformated" },
        { text: "Actions", value: "actions", sortable: false },
      ];
    }
  },

  methods: {
    viewItem(item) {
      this.$router.push({ name: "Ticket", params: { id: item.id } });
    },

    deleteItem(item) {
      this.currentIndex = this.userItems.indexOf(item);
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
      this.$store.dispatch("deleteTicket", this.currentItem.id);
      this.closeDelete();
    },
  },
};
</script>