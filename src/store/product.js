import axios from 'axios';
import router from '@/router';

export default {
    state: {},
    getters: {},
    actions: {
        createProduct(context, { data, image }) {
            const formData = new FormData();
            formData.append("image", image);
            formData.append("name", data.name);
            formData.append("description", data.description);
            formData.append("price", data.price);
            formData.append("stock", data.stock);
            axios
                .post("products", formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then((response) => {
                    context.dispatch("alertSuccess", response.data.success);
                    router.push({ name: "MyProducts" });
                })
                .catch((error) => {
                    context.dispatch("alertError", error.response.data.error);
                });
        },
        editProduct(context, data) {
            axios
                .put("products/" + data.id, data)
                .then((response) => {
                    context.dispatch("alertSuccess", response.data.success);
                    context.dispatch("setShop", data.shopId);
                })
                .catch((error) => {
                    context.dispatch("alertError", error.response.data.error);
                });
        },
        editProductFile(context, { data, image }) {
            const formData = new FormData();
            formData.append("image", image);
            formData.append("name", data.name);
            formData.append("description", data.description);
            formData.append("price", data.price);
            formData.append("stock", data.stock);
            axios
                .put("products/" + data.id, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then((response) => {
                    context.dispatch("alertSuccess", response.data.success);
                    context.dispatch("setShop", data.shopId);
                })
                .catch((error) => {
                    context.dispatch("alertError", error.response.data.error);
                });
        },
        deleteProduct(context, data) {
            axios
                .delete("products/" + data.id)
                .then((response) => {
                    context.dispatch("alertSuccess", response.data.success);
                    context.dispatch("setShop", data.shopId);
                })
                .catch((error) => {
                    context.dispatch("alertError", error.response.data.error);
                });
        }
    },
    mutations: {}
}