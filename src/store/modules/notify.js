import axios from 'axios'

const state = {

}
const actions = {
    postNotice({ commit }, listUser) {
        return axios
            .post("https://web-demo.online/admin/notify", {
                listUser: listUser.userList,
                content: listUser.content,
            })
            .then(
                () => {commit('SUCCESS'), console.log('success')},
                (err) => {
                    console.log(err.response);
                }
            );
    },
}
const mutations = {
    SUCCESS(state) {
        state
    }
}
const getters = {

}

export default {
    state,
    actions,
    getters,
    mutations
}

