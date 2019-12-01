import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0,
    asanas: [],
    userDetails: {
      name: '',
      level: '',
      password: ''
    }
  },
  mutations: {
    SET_COUNTER(state, newCount) {
      state.counter = newCount
    },
    SET_ASANAS(state, data) {
      state.asanas = data
    },
    SAVE_NEW_USER(state, data){
      state.user = data
    }
  },
  actions: {
    incrementCounter({ commit, state }) {
      const newCount = state.counter + 1
      commit('SET_COUNTER', newCount)
    },
    async fetchAsanas({ commit }) {
      const result = await axios.get('http://localhost:3000/asana/all/json')
      commit('SET_ASANAS', result.data)
    },
    async postUser({ commit }) {
    const result = await axios.post('http://localhost:3000/student', {
         name: this.state.userDetails.name, level: this.state.userDetails.level, 
         password: this.state.userDetails.password
       })
       commit('SAVE_NEW_USER', result.res)
     }
  },
  modules: {
  },
  getters: {
    getUserDetails: state => {
        return state.userDetails.name, state.userDetails.level,
        state.userDetails.password
    }
}
})