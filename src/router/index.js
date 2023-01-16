import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FirstQuestionary from "../views/FirstQuestionary.vue";
import SecondQuestionary from "../views/SecondQuestionary.vue";
import ThirdQuestionary from "../views/ThirdQuestionary.vue";
import FourthQuestionary from "../views/FourthQuestionary.vue";
import ThanksPage from "../views/ThanksPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
      path: "/page-1",
      name: "questionary-1",
      component: FirstQuestionary,
    },
    { path: "/page-2", name: "questionary-2", component: SecondQuestionary },
    { path: "/page-3", name: "questionary-3", component: ThirdQuestionary },
    { path: "/page-4", name: "questionary-4", component: FourthQuestionary },
    { path: "/final-page", name: "thanks-page", component: ThanksPage },
  ],
});

export default router;
