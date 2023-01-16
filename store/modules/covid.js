export default {
  namespaced: true,
  state() {
    return {
      hadCovid: "",
      hasAntiBodies: null,
      antibodiesDate: null,
      antibodiesAmount: null,
      covidDate: null,
    };
  },

  mutations: {
    setCovid(state, payload) {
      state.hasAntiBodies = undefined;

      state.hadCovid = payload;
    },
    setHasAntibodies(state, payload) {
      state.hasAntiBodies = payload;
    },
    setAntibodiesDate(state, payload) {
      state.antibodiesDate = payload;
    },

    setAntibodiesAmount(state, payload) {
      state.antibodiesAmount = payload;
    },
    setCovidDate(state, payload) {
      state.covidDate = payload;
    },
    resetAntibodies(state) {
      state.hasAntiBodies = null;
    },
  },

  getters: {
    hasCovid(state) {
      if (state.hadCovid === "yes") {
        return true;
      } else {
        return false;
      }
    },
    showAntiDate(state) {
      if (state.hasAntiBodies === true) {
        return true;
      } else {
        return false;
      }
    },
    showCovidDate(state) {
      if (state.hadCovid === "yes" && state.hasAntiBodies === false) {
        return true;
      } else {
        return false;
      }
    },
  },
};
