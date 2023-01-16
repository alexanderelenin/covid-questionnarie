<template>
  <section class="mt-10">
    <h1 class="text-xl font-bold">რას ელოდები? *</h1>

    <div class="flex my-5 ml-4">
      <Field
        name="vaccineStatus"
        type="radio"
        value="registered_and_waiting"
        class="p-2 border-2 border-black"
        v-model="waitingFor"
        :rules="inputIsValid"
        id="registeredWaiting"
      />
      <label
        for="registeredWaiting"
        class="font-bold text-center self-center px-2 text-xl"
        >დარეგისტრირებული ვარ და ველოდები რიცხვს</label
      >

      <ErrorMessage name="name " />
    </div>
    <div class="flex my-5 ml-4">
      <Field
        name="vaccineStatus"
        type="radio"
        value="not_planning"
        class="p-2 border-2 border-black"
        v-model="waitingFor"
        :rules="inputIsValid"
        id="notPlanning"
      />
      <label
        for="notPlanning"
        class="font-bold text-center self-center px-2 text-xl"
        >არ ვგეგმავ</label
      >

      <ErrorMessage name="name " />
    </div>
    <div class="flex my-5 ml-4">
      <Field
        name="vaccineStatus"
        type="radio"
        value="had_covid_and_planning_to_be_vaccinated"
        class="p-2 border-2 border-black"
        v-model="waitingFor"
        :rules="inputIsValid"
        id="planning"
      />
      <label
        for="planning"
        class="font-bold text-center self-center px-2 text-xl"
        >გადატანილი მაქვს და ვგეგმავ აცრას</label
      >

      <ErrorMessage name="name " />
    </div>

    <div
      v-if="waitingFor === 'had_covid_and_planning_to_be_vaccinated'"
      class="ml-5 text-xl"
    >
      <p class="font-bold leading-6">
        ახალი პროტოკოლით კოვიდის გადატანიდან 1<br />თვის შემდეგ შეგიძლიათ
        ვაქცინის გაკეთება<br />
        რეგისტრაციის ბმული: <br />
        <a href="https://booking.mog.gov.ge" class="font-bold text-indigo-500"
          >https://booking.mog.gov.ge</a
        >
      </p>
    </div>
  </section>
</template>

<script>
import { Field, ErrorMessage } from "vee-validate";

export default {
  components: {
    Field,
    ErrorMessage,
  },
  methods: {
    inputIsValid(value) {
      if (!value && value !== null) {
        return false;
      } else {
        return true;
      }
    },
  },
  computed: {
    waitingFor: {
      get() {
        return this.$store.state.vaccinepage.waitingFor;
      },
      set(value) {
        this.$store.commit("vaccinepage/setWaitingFor", value);
      },
    },
  },
};
</script>
