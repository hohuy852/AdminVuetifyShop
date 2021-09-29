import axios from "axios"
const API = 'https://web-demo.online/'
const state = {
    users: []
}
const actions = {
    getUsers({ commit }) {
        return axios
            .get(API + 'admin/user')
            .then(response => commit('GET_USERS', response.data))
    }
}
const mutations = {
    GET_USERS(statem, resUsers) {
        state.users = resUsers
    }
}
const getters = {
    users: state => state.users
}
export default {
    state,
    actions,
    mutations,
    getters
}