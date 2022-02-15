import axios from 'axios'
import router from '@/router';

export default {
    state: {
        currentUser: null,
    },
    getters: {
        currentUser: (state) => { return state.currentUser; },
    },
    actions: {
        currentUser(context, currentUser) { context.commit('currentUser', currentUser); },
        setCurrentUser(context) {
            if (localStorage.getItem('token')) {
                axios.get("currentUser")
                    .then((response) => {
                        context.dispatch("currentUser", response.data.currentUser);
                    })
                    .catch(() => {
                        localStorage.removeItem('token');
                    });
            }
        },
        login(context, data) {
            axios
                .post("loginUser", data)
                .then((response) => {
                    localStorage.setItem("token", response.data.token);
                    context.dispatch("currentUser", response.data.user);
                    context.dispatch("success", "Vous êtes connecté !");
                    if (response.data.user.roleId == "1") {
                        router.push({ name: "Sadmin" });
                    } else if (response.data.user.roleId == "2") {
                        router.push({ name: "Admin" });
                    } else if (response.data.user.roleId == "3") {
                        router.push({ name: "Partner" });
                    }
                })
                .catch((error) => {
                    context.dispatch("error", error.response.data.error);
                });
        },
        logout(context) {
            context.commit('currentUser', null);
            localStorage.removeItem("token");
            context.dispatch("success", "Vous êtes bien déconnecté !");
            router.push({ name: "Home" });
        },
    },
    mutations: {
        currentUser(state, currentUser) { state.currentUser = currentUser; },
    }
}