import axios from 'axios';
import router from '@/router';

export default {
    state: {
        orders: null,
        order: null,
    },
    getters: {
        orders: (state) => { return state.orders; },
        order: (state) => { return state.order; },
    },
    actions: {
        orders(context, orders) { context.commit('orders', orders); },
        order(context, order) { context.commit('order', order); },
        setOrder(context, number) {
            axios
                .get("orders/" + number)
                .then((response) => {
                    context.commit("order", response.data);
                    if (response.data[0].orderStatusId == "1") {
                        context.dispatch("updateStatus", number);
                    }
                })
                .catch((error) => {
                    context.dispatch("alertError", error.response.data.error);
                    router.push({ name: "Home" });
                });
        },
        setOrders(context) {
            axios
                .get("orders")
                .then((response) => {
                    context.commit("orders", response.data);
                })
                .catch((error) => {
                    context.dispatch("alertError", error.response.data.error);
                });
        },
        updateStatus(context, number) {
            axios
                .put("orders/" + number)
                .then(() => {
                    router.go("")
                })
                .catch((error) => {
                    context.dispatch("alertError", error.response.data.error);
                });
        }
    },
    mutations: {
        orders(state, orders) { state.orders = orders; },
        order(state, order) { state.order = order; },
    }
}