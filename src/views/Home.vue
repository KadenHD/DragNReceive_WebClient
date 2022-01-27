<template>
  <div class="Home">
    <div v-if="user">Hi, {{ user.firstname }} {{ user.lastname }}</div>
    <div v-if="!user">Vous n'êtes pas connecté !</div>
  </div>
</template>

<style >
</style>