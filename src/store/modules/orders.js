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
                idOrder: '615e68f9e933cad168215c46'
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
    DELETE_SUCCESS(state){
        state
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