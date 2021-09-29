import axios from "axios"
const API = 'https://web-demo.online/'
const state = {
    orders: []
}
const actions = {
    getOrders({ commit }) {
        return axios
            .get(API + 'admin/order')
            .then(response => commit('GET_ORDERS', response.data))
    }
}
const mutations = {
    GET_ORDERS(state, orders) {
        state.orders = orders
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