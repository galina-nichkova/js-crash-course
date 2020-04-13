import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
axios.defaults.withCredentials = true
import router from '../router/index'

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
    seqAsanas: {},
    errMessage: ''
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
    },
    UPDATE_ERR_MESSAGE(state, data) {
      state.errMessage = data
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
      if (!payload.name || !payload.password || !payload.level) {
      commit('UPDATE_ERR_MESSAGE', "All 3 fields need to be filled in")}
        else {
      const res = await axios.post(`${process.env.VUE_APP_API_URL}/auth/register`, 
          {username: payload.name, password: payload.password}
      )

      if (res.data.name == 'UserExistsError') {
        commit('UPDATE_ERR_MESSAGE', res.data.message)} 
        else {
      const updatedUser = await axios.post(`${process.env.VUE_APP_API_URL}/student/updateLevel`,
          {level: payload.level, studentId: res.data._id}
          )

      const newUser = {
        name: updatedUser.data.username,
        id: updatedUser.data._id,
        level: updatedUser.data.level
      }

      commit('SAVE_NEW_USER', newUser)
      commit('UPDATE_ERR_MESSAGE', '')
      router.push('/welcome-registration')}}
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
      router.push('/seqasanas')
    },
    async signInUser({ commit }, payload) {
      const res = await axios.post(`${process.env.VUE_APP_API_URL}/auth/local`, {
        username: payload.username,
        password: payload.password
      }
    )
      console.log(res)
      router.push('/welcome-login')
      const newUser = {
        name: res.data.name,
        id: res.data._id
      }
      commit('SAVE_NEW_USER', newUser)
  },
    async getUserData({ commit }) {
    const response = await axios.get(`${process.env.VUE_APP_API_URL}/auth/login`)    
        .then((response) => {    
            console.log(response)    
            const newUser = {name: response.data.user,
              id: response.data.id, level: response.data.level}
            commit('SAVE_NEW_USER', newUser)
        })    
        .catch((errors) => {    
            console.log(errors)    
            router.push("/")    
        })    
}    
}})