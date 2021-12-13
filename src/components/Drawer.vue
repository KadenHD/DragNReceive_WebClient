<template>
    <div>

        <router-link :to="{name: 'Home'}">Home</router-link>
        <a v-if="user" href="javascript:void(0)" @click="handleClick">Déconnexion</a>

    </div>
</template>

<script>
    export default {
        name: 'Drawer',
        methods: {
            handleClick() {
                localStorage.removeItem('token');
                this.$store.dispatch('user', null);
                this.$router.push({name: 'Home'});
            }
        }
    }
</script>