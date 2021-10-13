import axios from "axios"
const API = 'https://web-demo.online/'
const state = {
    orders: []
}
const actions = {
    async getOrders({ commit }) {
        return axios
            .get(API + 'admin/order')
            .then(response => commit('GET_ORDERS', response.data))
    },
    deleteOrder({ commit }, idOrder) {
        return axios
            .delete(API + 'admin/order', {
                data: {
                    idOrder: idOrder
                }
            })
            .then(
                commit('DELETE_SUCCESS'),
                console.log(idOrder)
            )
    }
}
const mutations = {
    GET_ORDERS(state, orders) {
        state.orders = orders
    },
    DELETE_SUCCESS() {

    }
}
const getters = {
    orders: state => state.orders
}
export default {
    state,
    actions,
    mutations,
    getters
}