export default {
  namespaced: true,
  state() {
    return {
      hasVaccine: undefined,
      vaccinationStage: "",
      waitingFor: "",
    };
  },

  mutations: {
    setHasVaccine(state, payload) {
      state.hasVaccine = payload;
      if (state.hasVaccine === false) {
        state.vaccinationStage = " ";
      }
    },

    setVaccinationStage(state, payload) {
      state.vaccinationStage = payload;
    },
    setWaitingFor(state, payload) {
      state.waitingFor = payload;
    },
  },

  getters: {
    hasVaccine(state) {
      if (state.hasVaccine === true) {
        return true;
      } else if (state.hasVaccine === undefined) {
        return undefined;
      } else {
        return false;
      }
    },
  },
};
