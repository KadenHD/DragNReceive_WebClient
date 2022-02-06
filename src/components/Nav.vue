<template>
  <div class="Nav">
    <v-container>
      <v-row>
        <v-toolbar-title @click="$router.push({ name: 'Home' })">
          <v-img
            src="../../public/assets/img/Jimdo/DragNReceive/nameAndLogo/logo.svg"
            lazy-src="../../public/assets/img/Jimdo/DragNReceive/nameAndLogo/logo.svg"
            class="mx-auto"
            max-width="100"
          ></v-img>
        </v-toolbar-title>

        <v-divider class="mr-2 ml-2" inset vertical></v-divider>

        <div class="links">
          <div class="noUser" v-if="!currentUser">
            <router-link class="mr-1 ml-1" :to="{ name: 'Login' }"
              >Connexion</router-link
            >
          </div>
          <div class="isUser" v-if="currentUser">
            <a class="mr-1 ml-1" href="javascript:void(0)" @click="logoutClick"
              >Déconnexion</a
            >
          </div>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["currentUser"]),
  },
  methods: {
    logoutClick() {
      this.$store.dispatch("logout");
    },
  },
};
</script>


<style >
.Nav .links {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.Nav .links a {
  text-decoration: none;
  color: #014d5a;
}
.Nav .links a:hover {
  color: #4a7f88;
}
</style>
