<template>
  <div class="Join">
    <p class="TextTitle title text-center">Vous souhaitez nous rejoindre ?</p>
    <v-divider class="mr-2 mb-6 ml-2" inset></v-divider>
    <v-container>
      <p class="MainText text-center">
        Nous rectrutons activement des partenaire et avec le développement de
        notre société nous nécessitons de plus en plus de personnel. Pour nous
        rejoindre, que ce soit en tant que partenaire ou bien au sein de la
        société DragN'Receive, nous vous laissons nous addresser par mail votre
        motivation. Nous vous recontacterons par la suite et vous donnerons les
        directives à suivre. Pour obtenir nos coordonnées nous vous laissons
        vous rendre dans l'onglet
        <router-link class="TextLinks" :to="{ name: 'Contact' }">
          nous contacter </router-link
        >.
      </p>
      <v-img
        src="../../../../public/assets/img/unDraw/career.svg"
        lazy-src="../../../../public/assets/img/unDraw/career.svg"
        class="mx-auto"
        max-width="500"
      ></v-img>
    </v-container>
  </div>
</template>
