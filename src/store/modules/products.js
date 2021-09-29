import axios from 'axios'
const API = 'https://web-demo.online/'

const state = {
    products: [],
    files: null
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
    getProducts({ commit }) {
        return axios
            .get(API + 'product')
            .then(
                response => commit('GET_PRODUCT', response.data.entries)
            )
    }
}
const mutations = {
    GET_PRODUCT(state, products) {
        state.products = products
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