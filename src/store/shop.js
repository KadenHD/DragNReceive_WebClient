const state = {
    shops: null,
};

export default {
    state,
    getters: {
        shops: (state) => {
            return state.shops;
        }
    },
    actions: {
        shops(context, shops) {
            context.commit('shops', shops);
        },
    },
    mutations: {
        shops(state, shops) {
            state.shops = shops;
        },
    }
}