import axios from "axios"
const API = 'https://web-demo.online/'
const state = {
    categories: []
}
const actions = {
    async getCategories({ commit }) {
        return axios
            .get(API + 'category')
            .then(
                (res) => {
                    commit('GET_CATEGORIES', res.data.entries)
                }
            )
            .catch(err => {
                console.log(err)
            })
    },
    updateCategory({ commit }, category) {
        let idProducts = category.products.map(item => { return item._id })
        return axios
            .patch(API + 'admin/category', {
                idCategory: category._id,
                update: {
                    products: idProducts,
                    name: category.name
                }
            })
            .then(
                commit('UPDATE_SUCCESS')
            )
    },
    deleteCategory({ commit }, category) {
        return axios
            .delete(API + 'admin/category', {
                data: {
                    idCategory: category._id
                }
            })
            .then(commit('DELETE_SUCCESS'))
    },
    addCategory({ commit }, category) {
        let idProducts = category.products.map(item => { return item._id })
        console.log(idProducts)
        return axios
            .post(API + 'admin/category', {
                products: idProducts,
                name: category.name
            })
            .then(commit('DELETE_SUCCESS'))
    }


}
const mutations = {
    GET_CATEGORIES(state, categories) {
        state.categories = categories
    },
    UPDATE_SUCESS() {

    },
    DELETE_SUCCESS() { }

}
const getters = {
    categories: state => state.categories
}
export default {
    state,
    actions,
    mutations,
    getters
}