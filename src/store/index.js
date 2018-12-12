import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    users: null
  },
  getters: {
    getStorage: state => {
      if (!state.user) {
        state.user = JSON.parse(localStorage.getItem('user'))
      }
      return state.user
    },
    doneUsers: state => {
      return state.users
    }
  },
  mutations: {
    $_setStorage (state, value) {
      state.user = value
      localStorage.setItem('user', JSON.stringify(value))
    },
    $_removeStorage (state) {
      state.user = null
      localStorage.removeItem('user')
    },
    add (state, data) {
      state.users = data
    },
    del (state, i) {
      state.users.splice(i, 1)
    }

  },
  actions: {
    addUser ({ commit }, data) {
      commit('add', data)
    },
    delUser ({ commit }, i) {
      commit('del', i)
    }
  }
})
