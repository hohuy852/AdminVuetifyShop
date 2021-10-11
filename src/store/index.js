import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import users from './modules/users'
import orders from './modules/orders'
import notify from './modules/notify'
import auth from './modules/auth'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    products,
    users,
    orders,
    notify,
    auth
  },
})
