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
                        if (!response.data.currentUser) {
                            localStorage.removeItem("token");
                        }
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
                    context.dispatch("alertError", error.response.data.error);
                });
        },
        logout(context) {
            context.commit('currentUser', null);
            localStorage.removeItem("token");
            context.commit('clearAll');
            router.go({ name: "Home" });
        },
        forgot(context, data) {
            axios
                .post("forgotUser", data)
                .then((response) => {
                    context.dispatch("alertSuccess", response.data.success);
                    router.push({ name: "ForgotSuccess" });
                })
                .catch((error) => {
                    context.dispatch("alertError", error.response.data.error);
                });
        },
        reset(context, data) {
            axios
                .post("resetUser/" + data.userId + "/" + data.token, data)
                .then((response) => {
                    context.dispatch("alertSuccess", response.data.success);
                    router.push({ name: "Login" });
                })
                .catch((error) => {
                    context.dispatch("alertError", error.response.data.error);
                    router.push({ name: "Forgot" });
                });
        },
        clearAll(context) {
            context.commit("alert", {});
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