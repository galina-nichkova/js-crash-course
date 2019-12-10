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
      id: ''
    },
    seqAsanas: {}
  },
  mutations: {
    SET_COUNTER(state, newCount) {
      state.counter = newCount
    },
    SET_ASANAS(state, data) {
      state.asanas = data
    },
    SAVE_NEW_USER(state, newUser) {
      state.userDetails = newUser
    },
    SAVE_NEW_SEQUENCE(state, newSeq) {
      state.seqAsanas = newSeq
    }
  },
  actions: {
    incrementCounter({ commit, state }) {
      const newCount = state.counter + 1
      commit('SET_COUNTER', newCount)
    },
    async fetchAsanas({ commit }) {
      const result = await axios.get(`${process.env.VUE_APP_API_URL}/asana/all/json`)
      commit('SET_ASANAS', result.data)
    },
    async postUser({ commit }, payload) {
      const res = await axios.post(`${process.env.VUE_APP_API_URL}/student`, {
        name: payload.name, level: payload.level,
        password: payload.password
      })
      const newUser = {
        name: res.data.name, level: res.data.level,
        id: res.data._id
      }
      commit('SAVE_NEW_USER', newUser)
    },
    async requestSequence({ commit, state }, payload) {
      const res = await axios.post(`${process.env.VUE_APP_API_URL}/main`, {
        student: state.userDetails.id, sequence: {
          emphasis: payload.emphasis,
          duration: payload.duration, level: state.userDetails.level, asanas: []
        }
      })
      const newSeq = res.data.sequence.asanas
      commit('SAVE_NEW_SEQUENCE', newSeq)
    }
  }
})