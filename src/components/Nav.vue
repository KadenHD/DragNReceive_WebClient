<template>
  <div class="Nav">
    <v-container>
      <v-row>
        <v-toolbar-title @click="$router.push({ name: 'Home' })">
          <v-img
            src="assets/img/nameAndLogo/logo.svg"
            lazy-src="assets/img/nameAndLogo/logo.svg"
            class="mx-auto"
            max-width="100"
          ></v-img>
        </v-toolbar-title>

        <v-divider class="mr-2 ml-2" inset vertical></v-divider>

        <div class="links">
          <div class="noUser" v-if="!user">
            <router-link class="mr-1 ml-1" :to="{ name: 'Login' }"
              >Connexion</router-link
            >
            <router-link class="mr-1 ml-1" :to="{ name: 'Register' }"
              >Inscription</router-link
            >
          </div>
          <div class="isUser" v-if="user">
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
export default {
  setup() {},
};
</script>
