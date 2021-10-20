import axios from "axios"
const API = 'https://web-demo.online/'
const state = {
    discount: []
}
const actions = {
    async getDiscount({ commit }) {
        return axios
            .get(API + 'admin/discount')
            .then(
                (res) => { commit('GET_DISCOUNT', res.data) }

            )
            .catch(err => {
                console.log(err)
            })
    },
    async addDiscount({ commit }, discount) {
        return axios
            .post(API + 'admin/discount', {
                code: discount.code,
                startDate: discount.startDate,
                expireDate: discount.expireDate,
                amount: discount.amount
            })
            .then(
                commit('ADD_SUCCESS')
            )
    },
    deleteDiscount({ commit }, discount) {
        return axios
            .delete(API + 'admin/discount', {
                data: {
                    code: discount.code,
                }

            })
            .then(
                commit('ADD_SUCCESS'), 
            )
            
    },
    updateDiscount({ commit }, discount) {
        return axios
            .patch(API + 'admin/discount', {
                code: discount.code,
                startDate: discount.startDate,
                expireDate: discount.expireDate,
                amount: discount.amount
            })
            .then(
                commit('ADD_SUCCESS')
            )
    }

}
const mutations = {
    GET_DISCOUNT(state, discount) {
        state.discount = discount
    },
    ADD_SUCCESS() {

    }
}
const getters = {
    discount: state => state.discount.foundDiscount
}

export default {
    state,
    actions,
    mutations,
    getters
}