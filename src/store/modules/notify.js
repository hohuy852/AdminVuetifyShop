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
            .then(commit('SUCCESS'), console.log(listUser));
    },
    postBanner({ commit }, notifyContent) {
        return axios
            .post("https://web-demo.online/admin/notify_banner", {
                content: notifyContent.content,
                percent: notifyContent.percent
            })
            .then(commit('SUCCESS'), console.log(notifyContent))
    }
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

