<template>
  <main class="mx-28 my-10 relative">
    <header>
      <nav class="flex justify-between border-b-black border-b-[3px] pb-4">
        <img src="../assets/logo.svg" alt="logo" />
        <span class="text-3xl font-bold">2/4</span>
      </nav>
    </header>
    <div class="flex">
      <section class="w-[40%] my-20 relative">
        <MyForm @submit="netxpage">
          <HadCovid></HadCovid>
          <AntiBodies v-if="hasCovid" />
          <AntiBodiesAmount v-if="hasCovid && showAntiDate"></AntiBodiesAmount>
          <CovidDate v-if="hasCovid && showCovidDate"></CovidDate>

          <div
            class="w-[145px] flex justify-between absolute bottom-[-30px] left-[760px] z-10"
          >
            <button class="p-4" @click="prevPage">
              <img src="../assets/arrowL.svg" alt="left" />
            </button>
            <button type="submit" class="p-4">
              <img src="../assets/arrowR.svg" alt="right" />
            </button>
          </div>
        </MyForm>
      </section>

      <section class="relative">
        <img src="../assets/questionary2.jpg" alt="" class="z-20" />
        <div
          v-motion
          :initial="{ opacity: 0, x: 310, y: -150, width: 100, height: 100 }"
          :enter="{
            opacity: 0.8,
            x: 0,
            y: 0,
            width: 250,
            height: 250,
          }"
          class="w-[250px] h-[250px] border rounded-full bg-red-600 opacity-80 top-[250px] left-16 absolute transition ease-out"
        ></div>
      </section>
    </div>
  </main>
</template>

<script>
import { Form as MyForm } from "vee-validate";
import HadCovid from "../components/questions/HadCovid.vue";
import AntiBodies from "../components/questions/AntiBodies.vue";
import AntiBodiesAmount from "../components/questions/AntiBodiesAmount.vue";
import CovidDate from "../components/questions/CovidDate.vue";

export default {
  components: {
    MyForm,

    CovidDate,
    AntiBodies,
    HadCovid,
    AntiBodiesAmount,
  },
  computed: {
    hasCovid() {
      return this.$store.getters["covidpage/hasCovid"];
    },
    showAntiDate() {
      return this.$store.getters["covidpage/showAntiDate"];
    },
    showCovidDate() {
      return this.$store.getters["covidpage/showCovidDate"];
    },
  },
  methods: {
    netxpage() {
      this.$router.push("/page-3");
    },
    prevPage() {
      this.$router.push("/page-1");
    },
  },
};
</script>
