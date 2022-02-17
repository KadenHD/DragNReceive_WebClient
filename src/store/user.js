import axios from 'axios';
import router from '@/router';

export default {
    state: {
        users: null,
    },
    getters: {
        users: (state) => { return state.users; }
    },
    actions: {
        users(context, users) { context.commit('users', users); },
        setUsers(context) {
            axios
                .get("users")
                .then((response) => {
                    context.commit("users", response.data);
                })
                .catch((error) => {
                    context.dispatch("error", error.response.data.error);
                });
        },
        createUser(context, data) {
            axios
                .post("users", data)
                .then((response) => {
                    context.dispatch("success", response.data.success);
                    router.push({ name: "Users" });
                })
                .catch((error) => {
                    context.dispatch("error", error.response.data.error);
                });
        },
        editUser(context, data) {
            axios
                .put("users/" + data.id, data)
                .then((response) => {
                    context.dispatch("success", response.data.success);
                    context.dispatch("setUsers");
                })
                .catch((error) => {
                    context.dispatch("error", error.response.data.error);
                });
        },
        deleteUser(context, data) {
            axios
                .delete("users/" + data.id)
                .then((response) => {
                    context.dispatch("success", response.data.success);
                    context.dispatch("setUsers");
                })
                .catch((error) => {
                    console.log(error.response.data.error)
                    context.dispatch("error", error.response.data.error);
                });
        }
    },
    mutations: {
        users(state, users) { state.users = users; },
    }
}