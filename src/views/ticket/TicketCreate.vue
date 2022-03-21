<template>
  <div class="TicketCreate">
    <v-form ref="form">
      <v-card class="elevation-24">
        <v-card-title>Créer un ticket</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="title"
            :rules="titleRules"
            label="Titre"
            prepend-inner-icon="mdi-email"
            counter
          ></v-text-field>
          <v-textarea
            v-model="content"
            :rules="contentRules"
            label="Contenu"
            prepend-inner-icon="mdi-feather"
            counter
          ></v-textarea>
        </v-card-text>
        <v-card-actions>
          <router-link :to="{ name: 'Tickets' }">
            <v-btn color="error" dark class="mr-4"> Annuler </v-btn>
          </router-link>
          <v-btn
            id="submit"
            color="success"
            class="mr-4"
            @click="submitTicketCreateForm"
          >
            Créer
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </div>
</template>

<script>
import { titleRules, contentRules } from "@/utils/inputRules.js";

export default {
  data() {
    return {
      title: null,
      content: null,
      titleRules,
      contentRules,
    };
  },
  methods: {
    submitTicketCreateForm() {
      if (this.$refs.form.validate()) {
        const data = {
          title: this.title,
          content: this.content,
        };
        this.$store.dispatch("createTicket", data);
      }
    },
  },
};
</script>