<template>
  <div class="NotFound">
    <v-btn class="font-weight-black" :to="{ name: 'Home' }"
      >Retouner sur le site</v-btn
    >
    <v-img
      src="assets/img/unDraw/page_not_found.svg"
      lazy-src="assets/img/unDraw/page_not_found.svg"
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

<style >
.NotFound {
  position: relative;
  text-align: center;
}
.NotFound p {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  color: #24646f;
}
.NotFound .v-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  background-color: #afb854 !important;
  color: whitesmoke !important;
}
.NotFound .v-img {
  z-index: 0;
}
</style>