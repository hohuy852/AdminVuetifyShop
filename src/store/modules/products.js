import axios from 'axios'
const API = 'https://web-demo.online/'

const state = {
    products: [],
}
const actions = {
    submitImage() {
        if (state.files) {
            var formData = new FormData()
            for (let file of state.files) {
                formData.append("files", file, file.name);
            }
            axios
                .post(API + '/upload', formData)
                .then(response => {
                    console.log("Success!");
                    console.log({ response });
                })
                .catch(error => {
                    console.log({ error });
                });
        }
        else {
            console.log("there are no files.");
        }
    },
    async getProducts({ commit }) {
        return axios
            .get(API + 'product')
            .then(
                response => commit('GET_PRODUCT', response.data.entries)
            )
    },
    async deleteProduct({ commit }, idProduct) {
        return axios
            .delete(API + 'admin/product', {
                idProduct: idProduct
            })
            .then(
                commit('DELETE_SUCCESS')
            )
    },
    updateProduct({ commit }, product) {
        let formData = new FormData()
        formData.append("idProduct", product.id);
        formData.append("img", product.img);
        formData.append("title", product.title);
        formData.append("price", product.price);
        formData.append("description", product.description);
        formData.append("category", product.category);
        // formData.append("previewImage", product.previewImage);
        for (let file of product.previewImage) {
            formData.append("previewImage", file);
        }
        return axios
            .patch(API + 'admin/product', formData)
            .then(
                () => { commit('UPDATE_SUCCESS') },
                (err) => {
                    console.log(err.response.data)
                }
            )
    },
    addProduct({ commit }, product) {
        let formData = new FormData()
        formData.append("id", product.id);
        formData.append("img", product.img);
        formData.append("title", product.title);
        formData.append("price", product.price);
        formData.append("description", product.description);
        formData.append("category", product.category);

        return axios
            .post(API + 'admin/product', formData)
            .then(commit('ADD_SUCCESS'))
            .catch((err) => {
                console.log(err)
            })
    }
}
const mutations = {
    GET_PRODUCT(state, products) {
        state.products = products
    },
    DELETE_SUCCESS(state) {
        state
    },
    UPDATE_SUCCESS(){

    },
    ADD_SUCCESS(){
        
    }
}
const getters = {
    products: state => state.products
}
export default {
    state,
    actions,
    mutations,
    getters
}