import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  isOpen: false
}

const mutations = {
  clickMenu (
    state,
    data
  ) {
    state.isOpen = data
  }
}

const store = new Vuex.Store({
  strict: debug,
  state,
  mutations
})

export default store
