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
              <v-list-item-content :id="item.id">
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
                <router-link
                  :id="child.path"
                  :to="{ name: 'About' + child.path }"
                >
                  {{ child.title }}
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
  data() {
    return {
      items: [
        {
          id: "Company",
          title: "L'Entreprise",
          action: "mdi-domain",
          items: [
            { title: "À propos de nous", path: "Us" },
            { title: "Nos services", path: "Services" },
            { title: "Politique de confidentialité", path: "Policy" },
          ],
        },
        {
          id: "Help",
          title: "Besoin d'aide",
          action: "mdi-handshake-outline",
          items: [
            { title: "Nous contacter", path: "Contact" },
            { title: "Comment nous rejoindre", path: "Join" },
          ],
        },
        {
          id: "Buy",
          title: "Acheter dans nos boutiques",
          action: "mdi-cart-arrow-down",
          items: [
            { title: "Nos partenaires", path: "Partner" },
            { title: "Télécharger l'application mobile", path: "Download" },
          ],
        },
        {
          id: "Social",
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
    };
  },
};
</script>

<style >
.Footer .v-list-item a {
  text-decoration: none;
  color: #014d5a;
}
.Footer .v-list-item a:hover {
  color: #4a7f88;
}
</style>