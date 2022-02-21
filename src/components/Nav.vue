<template>
  <div class="Nav">
    <v-row class="links">
      <div
        class="isAdminOrSadmin"
        v-if="
          currentUser &&
          (currentUser.roleId == '1' || currentUser.roleId == '2')
        "
      >
        <router-link class="mr-1 ml-1" :to="{ name: 'Users' }"
          >Gestion des utilisateurs</router-link
        >
        <router-link class="mr-1 ml-1" :to="{ name: 'Shops' }"
          >Gestion des boutiques</router-link
        >
      </div>
      <div class="isPartner" v-if="currentUser && currentUser.roleId == '3'">
        <router-link class="mr-1 ml-1" :to="{ name: 'MyShop' }"
          >Ma boutique</router-link
        >
        <router-link class="mr-1 ml-1" :to="{ name: 'Home' }"
          >Mes produits</router-link
        >
      </div>
      <div class="noUser" v-if="!currentUser">
        <router-link class="mr-1 ml-1" :to="{ name: 'Login' }"
          >Connexion</router-link
        >
      </div>
      <div class="isUser" v-if="currentUser">
        <router-link class="mr-1 ml-1" :to="{ name: 'Profile' }"
          >Profil</router-link
        >
        <a class="mr-1 ml-1" href="javascript:void(0)" @click="logoutClick"
          >Déconnexion</a
        >
      </div>
    </v-row>
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
.Nav .links a {
  text-decoration: none;
  color: #014d5a;
}
.Nav .links a:hover {
  color: #4a7f88;
}
</style>
