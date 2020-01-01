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
      id: '',
      level: ''
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
      const res = await axios.post(`${process.env.VUE_APP_API_URL}/auth/register`, 
          {username: payload.name, password: payload.password}
      )

      const updatedUser = await axios.post(`${process.env.VUE_APP_API_URL}/student/updateLevel`,
          {level: payload.level, studentId: res.data._id}
          )

      const newUser = {
        name: updatedUser.data.username,
        id: updatedUser.data._id,
        level: updatedUser.data.level
      }

      commit('SAVE_NEW_USER', newUser)
    },
    async requestSequence({ commit, state }, payload) {
      const res = await axios.post(`${process.env.VUE_APP_API_URL}/sequence-creation`, {
        studentId: state.userDetails.id, sequence: {
          emphasis: payload.emphasis,
          duration: payload.duration, level: state.userDetails.level, asanas: []
        }
      })
      const newSeq = res.data.sequence.asanas
      commit('SAVE_NEW_SEQUENCE', newSeq)
    },
    async signInUser() {
      console.log(req)
      const res = await axios.post(`${process.env.VUE_APP_API_URL}/local`, passport.authenticate('local', {
        successRedirect: '/asanas',
        failureRedirect: '/register'
    }))

      // const newUser = {
      //   name: res.data.name,
      //   id: res.data._id
      // }
      // commit('SAVE_NEW_USER', newUser)
  }
}})