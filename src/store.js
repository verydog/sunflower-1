import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nowStatus: 'loading'
  },
  mutations: {
    nowStatus (state, data) {
      state.nowStatus = data
    }
  },
  actions: {

  },
  getters: {
    nowStatus: state => {
      return state.nowStatus
    }
  }
})
