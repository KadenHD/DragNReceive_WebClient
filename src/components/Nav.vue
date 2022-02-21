<template>
  <div class="Nav">
    <v-app-bar app absolute>
      <router-link class="mr-1 ml-1" :to="{ name: 'Home' }">
        <v-img
          src="../../public/assets/img/Jimdo/DragNReceive/nameAndLogo/logo.svg"
          lazy-src="../../public/assets/img/Jimdo/DragNReceive/nameAndLogo/logo.svg"
          class="mx-auto"
          max-width="100"
        ></v-img
      ></router-link>
      <v-divider class="mr-5 ml-2" vertical inset></v-divider>

      <!-- Screen -->
      <v-row justify="start" align="center">
        <div
          class="ml-2 mr-2 links hidden-sm-and-down"
          v-for="(item, i) in fetchTab"
          :key="i"
        >
          <router-link :to="{ name: item.value }">{{ item.text }}</router-link>
        </div>
      </v-row>
      <v-row justify="end" class="ma-0">
        <div v-if="currentUser" class="links hidden-sm-and-down">
          <a href="javascript:void(0)" @click="logoutClick">Déconnexion</a>
        </div>
        <v-app-bar-nav-icon
          class="hidden-md-and-up"
          @click.stop="drawer = !drawer"
        />
      </v-row>
    </v-app-bar>

    <!-- Mobile -->
    <v-navigation-drawer v-model="drawer" temporary app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Actions</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list dense>
        <v-list-group
          no-action
          :value="false"
          active-class="selection--text"
          v-if="!currentUser"
        >
          <template v-slot:activator>
            <v-list-item-title>Non connecté</v-list-item-title>
          </template>
          <v-list-item
            v-for="subLink in isNotLoggedItems"
            :to="{ name: subLink.value }"
            :key="subLink.text"
            active-class="accent_font--text"
          >
            <v-list-item-title>{{ subLink.text }}</v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-list-group
          no-action
          :value="false"
          active-class="selection--text"
          v-if="currentUser"
        >
          <template v-slot:activator>
            <v-list-item-title>Utilisateur</v-list-item-title>
          </template>
          <v-list-item
            v-for="subLink in isLoggedItems"
            :to="{ name: subLink.value }"
            :key="subLink.text"
            active-class="accent_font--text"
          >
            <v-list-item-title>{{ subLink.text }}</v-list-item-title>
          </v-list-item>
          <v-list-item @click="logoutClick" active-class="accent_font--text">
            <v-list-item-title>Déconnexion</v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-list-group
          no-action
          :value="false"
          active-class="selection--text"
          v-if="
            currentUser &&
            (currentUser.roleId == '1' || currentUser.roleId == '2')
          "
        >
          <template v-slot:activator>
            <v-list-item-title>Administration</v-list-item-title>
          </template>
          <v-list-item
            v-for="subLink in isAdminOrSadminItems"
            :to="{ name: subLink.value }"
            :key="subLink.text"
            active-class="accent_font--text"
          >
            <v-list-item-title>{{ subLink.text }}</v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-list-group
          no-action
          :value="false"
          active-class="selection--text"
          v-if="currentUser && currentUser.roleId == '3'"
        >
          <template v-slot:activator>
            <v-list-item-title>Management de boutique</v-list-item-title>
          </template>
          <v-list-item
            v-for="subLink in isPartnerItems"
            :to="{ name: subLink.value }"
            :key="subLink.text"
            active-class="accent_font--text"
          >
            <v-list-item-title>{{ subLink.text }}</v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import store from "@/store";

export default {
  data() {
    return {
      drawer: false,
      isNotLoggedItems: [{ text: "Connexion", value: "Login" }],
      isAdminOrSadminItems: [
        { text: "Gestion des utilisateurs", value: "Users" },
        { text: "Gestion des boutiques", value: "Shops" },
      ],
      isPartnerItems: [
        { text: "Ma boutique", value: "MyShop" },
        { text: "Mes produits", value: "Home" },
      ],
      isLoggedItems: [{ text: "Profil", value: "Profile" }],
    };
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
  computed: {
    ...mapGetters(["currentUser"]),
    fetchTab: function () {
      const user = store.getters.currentUser;
      let j = 0;
      let tab = [];
      if (!user) {
        for (let i = 0; i < this.isNotLoggedItems.length; i++) {
          tab[j] = this.isNotLoggedItems[i];
          j++;
        }
      }
      if (user) {
        for (let i = 0; i < this.isLoggedItems.length; i++) {
          tab[j] = this.isLoggedItems[i];
          j++;
        }
      }
      if (user && (user.roleId == "1" || user.roleId == "2")) {
        for (let i = 0; i < this.isAdminOrSadminItems.length; i++) {
          tab[j] = this.isAdminOrSadminItems[i];
          j++;
        }
      }
      if (user && user.roleId == "3") {
        for (let i = 0; i < this.isPartnerItems.length; i++) {
          tab[j] = this.isPartnerItems[i];
          j++;
        }
      }
      return tab;
    },
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