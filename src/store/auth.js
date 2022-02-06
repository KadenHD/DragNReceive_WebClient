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