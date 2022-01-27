<template>
  <div class="Footer">
    <v-container>
      <v-list>
        <v-row>
          <v-list-group
            v-for="item in items"
            :key="item.title"
            v-model="item.active"
            :prepend-icon="item.action"
            color="#91a16a"
            no-action
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </template>

            <v-divider class="mr-2 ml-2" inset></v-divider>

            <v-list-item v-for="child in item.items" :key="child.title">
              <v-list-item-icon v-if="child.action">
                <a :href="child.path" target="_blank" rel="noopener noreferrer"
                  ><v-icon :color="child.color"> {{ child.action }} </v-icon></a
                >
              </v-list-item-icon>
              <v-list-item-content v-if="child.title">
                <router-link :to="{ name: child.path }">
                  <v-list-item-title v-text="child.title"></v-list-item-title>
                </router-link>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-row>
      </v-list>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: "L'Entreprise",
        action: "mdi-domain",
        items: [
          { title: "À propos de nous", path: "About-us" },
          { title: "Nos services", path: "Services" },
          { title: "Politique de confidentialité", path: "Policy" },
        ],
      },
      {
        title: "Besoin d'aide",
        action: "mdi-handshake-outline",
        items: [
          { title: "Nous contacter", path: "Contact" },
          { title: "Comment nous rejoindre", path: "Join" },
        ],
      },
      {
        title: "Acheter dans nos boutiques",
        action: "mdi-cart-arrow-down",
        items: [
          { title: "Nos partenaires", path: "Partner" },
          { title: "Télécharger l'application mobile", path: "Download" },
        ],
      },
      {
        title: "Nous suivre",
        action: "mdi-thumb-up-outline",
        items: [
          {
            action: "mdi-facebook",
            path: "https://www.facebook.com/",
            color: "blue darken-1",
          },
          {
            action: "mdi-twitter",
            path: "https://www.twitter.com/",
            color: "light-blue",
          },
          {
            action: "mdi-instagram",
            path: "https://www.instagram.com/",
            color: "pink",
          },
          {
            action: "mdi-linkedin",
            path: "https://www.linkedin.com/",
            color: "blue darken-3",
          },
        ],
      },
    ],
  }),
};
</script>

<style scoped>
.Footer a {
  text-decoration: none;
  color: #014d5a;
}

.Footer a:hover {
  color: #4a7f88;
}

.router-link-exact-active,
.router-link-active {
  color: #91a16a !important;
}

.router-link-exact-active:hover,
.router-link-active:hover {
  color: #afb891 !important;
}
</style>