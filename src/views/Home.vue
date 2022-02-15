<template>
  <div class="Home">
    <p class="TextTitle title text-center">Bienvenue chez DragN'Receive !</p>
    <v-divider class="mr-2 mb-6 ml-2" inset></v-divider>
    <v-container>
      <p class="MainText text-center">
        Bienvenue sur la plateforme de gestion des partenaires et de stocks de
        <router-link class="TextLinks" :to="{ name: 'AboutUs' }">
          DragN'Receive </router-link
        >, la boutique des Click & Collect à grande échelle de l'aglomération de
        Compiègne !
      </p>
      <v-img
        src="../../public/assets/img/unDraw/map.svg"
        lazy-src="../../public/assets/img/unDraw/map.svg"
        class="mx-auto"
        max-width="500"
      ></v-img>
      <v-divider class="mr-2 mt-6 mb-6 ml-2" inset></v-divider>
      <v-row align="center" justify="center">
        <v-img
          src="../../public/assets/img/Jimdo/DragNReceive/squareName/logo.svg"
          lazy-src="../../public/assets/img/Jimdo/DragNReceive/squareName/logo.svg"
          class="mx-auto"
          max-width="250"
        ></v-img>
        <v-divider class="mr-6 ml-6" inset vertical></v-divider>
        <v-img
          src="../../public/assets/img/Jimdo/Deviliser/logo.svg"
          lazy-src="../../public/assets/img/Jimdo/Deviliser/logo.svg"
          class="mx-auto"
          max-width="175"
        ></v-img>
      </v-row>
    </v-container>
  </div>
</template>