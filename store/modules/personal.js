export default {
  namespaced: true,
  state() {
    return {
      firstName: "",
      lastName: "",
      email: "",
    };
  },
  mutations: {
    setFirstName(state, payload) {
      state.firstName = payload;
    },
    setLastName(state, payload) {
      state.lastName = payload;
    },
    setEmail(state, payload) {
      state.email = payload;
    },
  },

  getters: {
    firstName(state) {
      return state.firstName;
    },
    lastName(state) {
      return state.lastName;
    },
    email(state) {
      return state.email;
    },
  },
};
