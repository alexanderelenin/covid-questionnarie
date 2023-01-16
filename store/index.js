import { createStore } from "vuex";
import personal from "./modules/personal.js";
import covid from "./modules/covid.js";
import vaccine from "./modules/vaccine.js";
import policy from "./modules/policy.js";

const store = createStore({
  modules: {
    firstpage: personal,
    covidpage: covid,
    vaccinepage: vaccine,
    opinionpage: policy,
  },
  state() {
    return {
      dataToSend: {},
    };
  },

  mutations: {
    //this is testing function to output vuex store
    outputData(state) {
      state.dataToSend = {
        first_name: state.firstpage.firstName,
        last_name: state.firstpage.lastName,
        email: state.firstpage.email,
        had_covid: state.covidpage.hadCovid,
        had_vaccine: state.vaccinepage.hasVaccine,
        non_formal_meetings: state.opinionpage.online,
        number_of_days_from_office: state.opinionpage.office,
      };
      if (state.covidpage.hadCovid === "yes") {
        state.dataToSend["had_antibody_test"] = state.covidpage.hasAntiBodies;
      }

      if (state.covidpage.hasAntiBodies === false) {
        state.dataToSend["covid_sickness_date"] = new Date(
          state.covidpage.covidDate
        ).toLocaleDateString("en-GB");
      }
      if (
        state.covidpage.hasAntiBodies === true &&
        state.covidpage.antibodiesDate !== null &&
        state.covidpage.antibodiesAmount !== null
      ) {
        state.dataToSend["antibodies"] = {
          test_date: state.covidpage.antibodiesDate,

          number: state.covidpage.antibodiesAmount,
        };
      }

      if (state.vaccinepage.hasVaccine === true) {
        state.dataToSend["vaccination_stage"] =
          state.vaccinepage.vaccinationStage;
      } else {
        state.dataToSend["i_am_waiting"] = state.vaccinepage.waitingFor;
      }

      if (state.opinionpage.live !== "") {
        state.dataToSend["what_about_meetings_in_live"] =
          state.opinionpage.live;
      }
      if (state.opinionpage.opinion !== "") {
        state.dataToSend["tell_us_your_opinion_about_us"] =
          state.opinionpage.opinion;
      }
    },
  },
  actions: {
    sendHttp({ state }) {
      return fetch("https://covid19.devtest.ge/api/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state.dataToSend),
      }).then((response) => {
        if (!response.ok) {
          throw new Error("something went wrong");
        } else {
          throw new Error("EVERYTHING IS FIIIIIIINE ");
        }
      });
    },
  },
});

export default store;
