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
                        context.dispatch("logout");
                    });
            }
        },
        login(context, data) {
            axios
                .post("loginUser", data)
                .then((response) => {
                    localStorage.setItem("token", response.data.token);
                    context.dispatch("currentUser", response.data.user);
                    if (response.data.user.roleId == "1") {
                        router.go({ name: "Sadmin" });
                    } else if (response.data.user.roleId == "2") {
                        router.go({ name: "Admin" });
                    } else if (response.data.user.roleId == "3") {
                        router.go({ name: "Partner" });
                    }
                })
                .catch((error) => {
                    context.dispatch("error", error.response.data.error);
                });
        },
        logout(context) {
            context.commit('currentUser', null);
            localStorage.removeItem("token");
            context.commit('clearAll');
            router.go({ name: "Home" });
        },
        clearAll(context) {
            context.dispatch("error", null);
            context.dispatch("success", null);
            context.dispatch("users", null);
            context.dispatch("user", null);
            context.dispatch("shops", null);
        },
    },
    mutations: {
        currentUser(state, currentUser) { state.currentUser = currentUser; },
    }
}