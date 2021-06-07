import { createStore } from 'vuex';
const store = createStore({
  state: {
    token: '',
    userInfo: ''
  },
  mutations: {
    updateToken(state, data) {
      state.token = data
    }
  },
  modules: {}
})