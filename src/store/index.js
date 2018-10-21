import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    users: [{title: 'A',
      items: [
        { name: 'aom', done: true },
        { name: 'aim', done: true },
        { name: 'allen', done: true }]
    }, {title: 'B',
      items: [
        { name: 'bom', done: true },
        { name: 'bim', done: true },
        { name: 'bllen', done: true }]
    }, {title: 'C',
      items: [
        { name: 'com', done: true },
        { name: 'cim', done: true },
        { name: 'cllen', done: true }]
    }, {title: 'D',
      items: [
        { name: 'dom', done: true },
        { name: 'dim', done: true },
        { name: 'dllen', done: true }]
    }, {title: 'E',
      items: [
        { name: 'eom', done: true },
        { name: 'eim', done: true },
        { name: 'ellen', done: true }]
    }]
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
      state.users.push(data)
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
