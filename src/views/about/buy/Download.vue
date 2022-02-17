<template>
  <div class="Download">
    <p class="TextTitle title text-center">
      Télécharger l'application mobile DragN'Receive
    </p>
    <v-divider class="mr-2 ml-2" inset></v-divider>
    <v-container>
      <v-carousel v-model="model" cycle show-arrows-on-hover>
        <v-carousel-item v-for="slide in slides" :key="slide">
          <v-sheet height="100%" tile>
            <v-container>
              <v-row class="slideContent">
                <p class="slideTitle text-center">{{ slide.title }}</p>
                <p class="MainText text-center">{{ slide.text }}</p>
              </v-row>
              <v-row>
                <v-img
                  :src="slide.img"
                  :lazy-src="slide.img"
                  class="mx-auto"
                  max-width="300"
                ></v-img>
              </v-row>
            </v-container>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: 0,
      slides: [
        {
          title: "Télécharger",
          text: "Effectivement nous avons réalisé la conception d'une application mobile sous android du nom de DragN'Receive, pour la réalisation de toute commande, veuillez installer cette dernière.",
          img: "../../assets/img/unDraw/mobile_app.svg",
        },
        {
          title: "Commander",
          text: "Grâce à notre application, vous allez pouvoir commander divers produits à travers différentes boutiques, pour la pluspart, composé de produits artisanaux.",
          img: "../../assets/img/unDraw/online_groceries.svg",
        },
        {
          title: "Récupérer",
          text: "Soyez rassuré ! Une fois la commande réalisé, vous n'avez plus qu'à aller la récupérer en magasin.",
          img: "../../assets/img/unDraw/successful_purchase.svg",
        },
      ],
    };
  },
};
</script>

<style>
.Download .slideContent {
  display: flex;
  flex-direction: column;
}
.Download .slideTitle {
  color: #afb854;
  font-size: 16px;
  font-weight: bold;
}
.Download .v-carousel__controls {
  background: whitesmoke !important;
}
.Download .v-carousel__controls__item {
  color: #afb854 !important;
}
</style>