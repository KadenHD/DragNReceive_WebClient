<template>
    <div>

        <div v-if="user">Hi, {{user.firstname}} {{user.lastname}}</div>
        <div v-if="!user">Vous n'êtes pas connecté !</div>

    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'Home',
    computed: {
        ...mapGetters(['user'])
    }
}
</script>
