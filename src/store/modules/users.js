import axios from "axios"
const API = 'https://web-demo.online/'
const state = {
    users: []
}
const actions = {
    async getUsers({ commit }) {
        return axios
            .get(API + 'admin/user')
            .then(response => commit('GET_USERS', response.data))
    },
    deleteUser({ commit }, idUser) {
        return axios
            .delete(API + 'admin/user', {
                idUser: idUser
            })
            .then(
                commit('DELETE_SUCCESS')
            )
    },
    async editUser({ commit }, user) {
        return axios
            .patch(API + 'admin/user', {
                idUser: user._id,
                update: {
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    status: user.status,
                    gender: user.gender,
                    phonenumber: user.phonenumber,
                    role: user.role,
                    wishlist: [],
                    DOB: new Date(user.DOB).toISOString(),
                    cart: []
                }
            })
            .then(
                () => commit('EDIT_SUCCESS'),
                console.log(user)
            )
            .catch(err => {
                console.log(err)
            })
    },
    async addUser({ commit }, user) {
        return axios
            .patch(API + 'admin/register', {
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                gender: user.gender,
                phonenumber: user.phonenumber,
                wishlist: [],
                DOB: new Date(user.DOB).toISOString(),
                cart: []
            })
            .then(
                () => commit('ADD_SUCCESS'),
                console.log(user)
            )
            .catch(err => {
                console.log(err)
            })
    }
}
const mutations = {
    GET_USERS(statem, resUsers) {
        state.users = resUsers
    },
    DELETE_SUCCESS(state) {
        state
    },
    EDIT_SUCCESS(state) {
        state
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