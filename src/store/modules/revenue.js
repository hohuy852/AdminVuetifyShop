import axios from "axios"
const API = 'https://web-demo.online/'
const state = {
    revenue: null,
    visitor: null
}
const actions = {
    async getRevenueByWeek({ commit }) {
        return axios
            .get(API + 'admin/revenue?type=month')
            .then(
                res => commit('GET_REVENUE_BY_WEEK', res.data)

            )
    },
    async getVisitor({ commit }) {
        return axios
            .get(API + 'admin/analytics')
            .then(

                res => { commit('GET_VISITOR', res.data), console.log(res.data) }
            )
    }
}
const mutations = {
    GET_REVENUE_BY_WEEK(state, revenue) {
        state.revenue = revenue
    },
    GET_VISITOR(state, visitor) {
        state.visitor = visitor
    }
}
const getters = {
    revenueByWeek: state => state.revenue,
    visitor: state => state.visitor
}

export default {
    state,
    actions,
    mutations,
    getters
}
