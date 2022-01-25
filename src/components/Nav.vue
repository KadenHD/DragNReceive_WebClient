<template>
  <div>
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link v-if="!user" :to="{ name: 'Login' }">Connexion</router-link>
    <router-link v-if="!user" :to="{ name: 'Register' }"
      >Inscription</router-link
    >
    <a v-if="user" href="javascript:void(0)" @click="handleClick"
      >Déconnexion</a
    >
  </div>
</template>

<script>
export default {
  name: "Nav",
};
</script>
