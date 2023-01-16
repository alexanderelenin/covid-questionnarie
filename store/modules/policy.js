export default {
  namespaced: true,
  state() {
    return {
      online: "",
      office: undefined,
      live: "",
      opinion: "",
    };
  },
  mutations: {
    setOnline(state, payload) {
      state.online = payload;
    },
    setOffice(state, payload) {
      state.office = payload;
    },
    setLive(state, payload) {
      state.live = payload;
    },
    setOpinion(state, payload) {
      state.opinion = payload;
    },
  },
};
