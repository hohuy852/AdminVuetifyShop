import axios from "axios"
const API = 'https://web-demo.online/'
const state = {
    revenue: null
}
const actions = {
    async getRevenueByWeek({ commit }) {
        return axios
            .get(API + 'admin/revenue?type=month')
            .then(
                res => commit('GET_REVENUE_BY_WEEK', res.data)

            )
    }
}
const mutations = {
    GET_REVENUE_BY_WEEK(state, revenue){
        state.revenue = revenue
    }
}
const getters = {
    revenueByWeek: state => state.revenue
}

export default {
    state,
    actions,
    mutations,
    getters
}
