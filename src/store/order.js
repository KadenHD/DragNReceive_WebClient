import axios from 'axios';

export default {
    state: {
        orders: null,
    },
    getters: {
        orders: (state) => { return state.orders; },
    },
    actions: {
        orders(context, orders) { context.commit('orders', orders); },
        setOrders(context) {
            axios
                .get("orders")
                .then((response) => {
                    context.commit("orders", response.data);
                })
                .catch((error) => {
                    context.dispatch("alertError", error.response.data.error);
                });
        }
    },
    mutations: {
        orders(state, orders) { state.orders = orders; },
    }
}