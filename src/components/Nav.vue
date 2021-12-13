<template>
    <div>

        <router-link :to="{name: 'Home'}">Home</router-link>
        <router-link  v-if="!user" :to="{name: 'Login'}">Connexion</router-link>
        <router-link v-if="!user" :to="{name: 'Register'}">Inscription</router-link>
    
    </div>
</template>

<script>
    export default {
        name: 'Nav'
    }
</script>
