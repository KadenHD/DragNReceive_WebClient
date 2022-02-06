import router from '@/router';

const state = {
    currentUser: null,
};

export default {
    state,
    getters: {
        currentUser: (state) => {
            return state.currentUser;
        },
    },
    actions: {
        logout(context) {
            context.commit('currentUser', null);
            localStorage.removeItem("token");
            context.dispatch("success", "Vous êtes bien déconnecté !");
            router.push({ name: "Home" });
        },
        currentUser(context, currentUser) {
            context.commit('currentUser', currentUser);
        },
    },
    mutations: {
        currentUser(state, currentUser) {
            state.currentUser = currentUser;
        },
    }
}