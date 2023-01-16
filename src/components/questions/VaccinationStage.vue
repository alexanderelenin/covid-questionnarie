<template>
  <section class="mt-10">
    <h1 class="text-xl font-bold">რომელ ეტაპზე ხარ? *</h1>
    <div class="flex my-5 ml-4">
      <Field
        name="status"
        type="radio"
        value="first_dosage_and_registered_on_the_second"
        class="p-2 border-2 border-black"
        v-model="vaccinationStatus"
        :rules="inputIsValid"
        id="firstDosage"
      />
      <label
        for="firstDosage"
        class="font-bold text-center self-center px-2 text-xl"
        >პირველი დოზა და დარეგისტრირებული ვარ მეორეზე</label
      >

      <ErrorMessage name="name " />
    </div>
    <div class="flex my-5 ml-4">
      <Field
        name="status"
        type="radio"
        value="fully_vaccinated"
        class="p-2 border-2 border-black"
        v-model="vaccinationStatus"
        :rules="inputIsValid"
        id="fully"
      />
      <label for="fully" class="font-bold text-center self-center px-2 text-xl"
        >სრულად აცრილი ვარ</label
      >

      <ErrorMessage name="name " />
    </div>
    <div class="flex my-5 ml-4">
      <Field
        name="status"
        type="radio"
        value="first_dosage_and_not_registered_yet"
        class="p-2 border-2 border-black"
        v-model="vaccinationStatus"
        :rules="inputIsValid"
        id="notRegistered"
      />
      <label
        for="notRegistered"
        class="font-bold text-center self-center px-2 text-xl"
        >პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე</label
      >

      <ErrorMessage name="name " />
    </div>

    <div
      v-if="vaccinationStatus === 'first_dosage_and_not_registered_yet'"
      class="ml-5 text-xl"
    >
      <p class="font-bold">
        რომ არ გადადო,<br />ბარემ ახლავე დარეგისტრირდი<br />
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
      if (!value) {
        return false;
      } else {
        return true;
      }
    },
  },
  computed: {
    vaccinationStatus: {
      get() {
        return this.$store.state.vaccinepage.vaccinationStage;
      },
      set(value) {
        this.$store.commit("vaccinepage/setVaccinationStage", value);
      },
    },
  },
};
</script>
