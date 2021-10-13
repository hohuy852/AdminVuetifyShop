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
    deleteUser({ commit }, user) {
        return axios
            .delete(API + 'admin/user',
                {
                    data:
                    {
                        idUser: user._id
                    }
                }
            )
            .then(
                commit('DELETE_SUCCESS'),
                console.log(user._id)

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
                    DOB: new Date(user.DOB).toISOString(),
                }
            })
            .then(
                () => commit('EDIT_SUCCESS'),
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
                role: user.role,
                DOB: new Date(user.DOB).toISOString(),

            })
            .then(
                () => commit('ADD_SUCCESS'),

            )
            .catch(err => {
                console.log(err)
            })
    }
}
const mutations = {
    GET_USERS(state, resUsers) {
        state.users = resUsers
    },
    DELETE_SUCCESS(state) {
        state
    },
    EDIT_SUCCESS(state) {
        state
    },
    ADD_SUCCESS(){

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