import axios from 'axios';
import router from '@/router';

export default {
    state: {
        shops: null,
        shop: null,
    },
    getters: {
        shops: (state) => { return state.shops; },
        shop: (state) => { return state.shop; },
    },
    actions: {
        shops(context, shops) { context.commit('shops', shops); },
        shop(context, shop) { context.commit('shop', shop); },
        setShop(context, id) {
            axios
                .get("shops/" + id)
                .then((response) => {
                    context.commit("shop", response.data);
                })
                .catch((error) => {
                    context.dispatch("error", error.response.data.error);
                });
        },
        setShops(context) {
            axios
                .get("shops")
                .then((response) => {
                    context.commit("shops", response.data);
                })
                .catch((error) => {
                    context.dispatch("error", error.response.data.error);
                });
        },
        createShop(context, data) {
            axios
                .post("shops", data)
                .then((response) => {
                    context.dispatch("success", response.data.success);
                    router.push({ name: "Shops" });
                })
                .catch((error) => {
                    context.dispatch("error", error.response.data.error);
                });
        },
        deleteShop(context, id) {
            axios
                .delete("shops/" + id)
                .then((response) => {
                    context.dispatch("success", response.data.success);
                    context.dispatch("setShops");
                })
                .catch((error) => {
                    context.dispatch("error", error.response.data.error);
                });
        }
    },
    mutations: {
        shops(state, shops) { state.shops = shops; },
        shop(state, shop) { state.shop = shop; },
    }
}