<template>
  <div class="Ticket">
    <v-card class="mx-auto mt-5 mb-5" elevation="24">
      <v-row align="center" justify="center">
        <v-col cols="12" sm="6" md="8">
          <v-card
            class="ml-5 mt-5 mb-5 scroll pa-2"
            max-height="800"
            max-width="800"
            elevation="24"
          >
            <v-card-text>
              <p class="TextTitle title text-center">
                {{ ticketItems.title }}
              </p>
              <v-divider class="mr-2 ml-2" inset></v-divider>
            </v-card-text>
            <div v-for="(message, index) in ticketItems.messages" :key="index">
              <v-card>
                <v-card-title>
                  <v-avatar class="mr-5" height="50px" width="50px">
                    <v-img
                      :src="
                        message.user.path
                          ? path_url + message.user.path
                          : '../../assets/img/user.svg'
                      "
                      :lazy-src="
                        message.user.path
                          ? path_url + message.user.path
                          : '../../assets/img/user.svg'
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
                  {{ message.user.lastname }} {{ message.user.firstname }}
                </v-card-title>
                <v-card-text> {{ message.content }}</v-card-text>
                <v-card-subtitle>{{
                  message.createdAtReformated
                }}</v-card-subtitle>
              </v-card>
            </div>
          </v-card></v-col
        >
        <v-col cols="6" md="4">
          <v-card
            class="mr-5 pa-2"
            max-height="300"
            max-width="800"
            elevation="24"
          >
            <v-form ref="form">
              <v-textarea
                v-model="content"
                :rules="contentRules"
                label="Contenu"
                prepend-inner-icon="mdi-feather"
                counter
              ></v-textarea>
              <v-btn color="success" class="mr-4" @click="submit">
                Envoyer
              </v-btn>
            </v-form>
          </v-card></v-col
        ></v-row
      >
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import store from "@/store";
import { contentRules } from "@/functions/inputRules.js";
import { reformatedDates } from "@/functions/index.js";

export default {
  data() {
    return {
      path_url: process.env.VUE_APP_URL,
      currentIndex: -1,
      currentItem: {},
      content: null,
      contentRules,
    };
  },
  computed: {
    ...mapGetters(["currentUser"]),

    ticketItems: function () {
      const data = store.getters.ticket;
      data.createdAtReformated = reformatedDates(data.createdAt);
      data.updatedAtReformated = reformatedDates(data.updatedAt);
      for (let i = 0; i < data.messages.length; i++) {
        data.messages[i].createdAtReformated = reformatedDates(
          data.messages[i].createdAt
        );
      }
      return data;
    },
  },

  created() {
    this.$store.dispatch("setTicket", this.$route.params.id);
  },

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        const data = {
          ticketId: this.$route.params.id,
          content: this.content,
        };
        this.$store.dispatch("createMessage", data);
        this.content = null;
      }
    },
  },
};
</script>

<style>
.Ticket .scroll {
  overflow-y: scroll;
}
</style>