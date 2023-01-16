<template>
  <main class="mx-28 my-10 relative">
    <header>
      <nav class="flex justify-between border-b-black border-b-[3px] pb-4">
        <img src="../assets/logo.svg" alt="logo" />
        <span class="text-3xl font-bold">3/4</span>
      </nav>
    </header>
    <div class="flex">
      <section class="w-[50%] my-20">
        <MyForm @submit="onSubmit">
          <VaccinatedStatus></VaccinatedStatus>
          <VaccinationStage v-if="vaccinated"></VaccinationStage>
          <WaitingFor v-if="vaccinated === false"></WaitingFor>

          <div
            class="w-[145px] flex justify-between absolute bottom-[-35px] left-[45%]"
          >
            <button @click="prevPage" class="p-4">
              <img src="../assets/arrowL.svg" alt="left" />
            </button>
            <button type="submit" class="p-4">
              <img src="../assets/arrowR.svg" alt="right" />
            </button>
          </div>
        </MyForm>
      </section>

      <section class="">
        <img src="../assets/doctor2.png" alt="" class="mt-12 relative" />
        <img
          src="../assets/yellowstar.svg"
          alt=""
          class="absolute top-16 opacity-80 left-[870px] transition ease-out"
          v-motion
          :initial="{ opacity: 0, x: -150, y: 250 }"
          :enter="{ opacity: 0.8, x: 0, y: 0 }"
        />
      </section>
    </div>
  </main>
</template>

<script>
import { Form as MyForm } from "vee-validate";
import VaccinatedStatus from "../components/questions/VaccinatedStatus.vue";
import VaccinationStage from "../components/questions/VaccinationStage.vue";
import WaitingFor from "../components/questions/WaitingFor.vue";
export default {
  components: {
    MyForm,
    VaccinatedStatus,
    VaccinationStage,
    WaitingFor,
  },
  methods: {
    onSubmit() {
      this.$router.push("/page-4");
    },
    prevPage() {
      this.$router.push("/page-2");
    },
  },
  computed: {
    vaccinated() {
      return this.$store.getters["vaccinepage/hasVaccine"];
    },
  },
};
</script>
