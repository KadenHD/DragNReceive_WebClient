<template>
    <div>
        
        <a v-if="user" href="javascript:void(0)" @click="handleClick">Déconnexion</a>

        <router-link  v-if="!user" :to="{name: 'Login'}">Connexion</router-link>
        <router-link v-if="!user" :to="{name: 'Register'}">Inscription</router-link>


        <router-link :to="{name: 'Home'}">
            <img
                src="@/assets/img/logoDashName/logo_large.png"
            />
        </router-link>

    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: 'Nav',
        methods: {
            handleClick() {
                localStorage.removeItem('token');
                this.$store.dispatch('user', null);
                this.$router.push({name: 'Home'});
            }
        },
        computed: {
            ...mapGetters(['user'])
        }
    }
</script>
