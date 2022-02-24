import axios from 'axios';
import router from '@/router';

export default {
    state: {
        users: null,
        user: null,
    },
    getters: {
        users: (state) => { return state.users; },
        user: (state) => { return state.user; },
    },
    actions: {
        users(context, users) { context.commit('users', users); },
        user(context, user) { context.commit('user', user); },
        setUser(context, id) {
            axios
                .get("users/" + id)
                .then((response) => {
                    context.commit("user", response.data);
                })
                .catch((error) => {
                    context.dispatch("alertError", error.response.data.error);
                });
        },
        setUsers(context) {
            axios
                .get("users")
                .then((response) => {
                    context.commit("users", response.data);
                })
                .catch((error) => {
                    context.dispatch("alertError", error.response.data.error);
                });
        },
        createUser(context, data) {
            axios
                .post("users", data)
                .then((response) => {
                    context.dispatch("alertSuccess", response.data.success);
                    router.push({ name: "Users" });
                })
                .catch((error) => {
                    context.dispatch("alertError", error.response.data.error);
                });
        },
        editUser(context, data) {
            axios
                .put("users/" + data.id, data)
                .then((response) => {
                    context.dispatch("alertSuccess", response.data.success);
                    if (data.route == "Users") {
                        context.dispatch("setUsers");
                    } else if (data.route == "Profile") {
                        context.dispatch("setUser", data.id);
                    }
                })
                .catch((error) => {
                    context.dispatch("alertError", error.response.data.error);
                });
        },
        editUserFile(context, { data, photo }) {
            const formData = new FormData();
            formData.append("photo", photo);
            axios
                .put("users/" + data.id, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then((response) => {
                    context.dispatch("alertSuccess", response.data.success);
                    context.dispatch("setUser", data.id);
                    context.dispatch("setCurrentUser");
                })
                .catch((error) => {
                    context.dispatch("alertError", error.response.data.error);
                });
        },
        deleteUser(context, id) {
            axios
                .delete("users/" + id)
                .then((response) => {
                    context.dispatch("alertSuccess", response.data.success);
                    context.dispatch("setUsers");
                })
                .catch((error) => {
                    context.dispatch("alertError", error.response.data.error);
                });
        }
    },
    mutations: {
        users(state, users) { state.users = users; },
        user(state, user) { state.user = user; },
    }
}