<template>
  <div class="NotFound">
    <v-btn class="font-weight-black" :to="{ name: 'Home' }"
      >Retouner sur le site</v-btn
    >
    <v-img
      src="assets/img/page_not_found.svg"
      lazy-src="assets/img/page_not_found.svg"
      class="mx-auto"
      max-width="800"
    ></v-img>
    <p
      class="
        font-weight-bold
        text-xs-h6 text-sm-h5 text-md-h4 text-lg-h3 text-xl-h2
      "
    >
      La route n'existe pas !
    </p>
  </div>
</template>