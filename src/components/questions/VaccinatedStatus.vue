<template>
  <section class="w-[50%]">
    <h1 class="text-xl font-bold">უკვე აცრილი ხარ? *</h1>
    <div class="flex my-5 ml-4">
      <Field
        name="vaccinated"
        type="radio"
        :value="true"
        class="p-2 border-2 border-black"
        v-model="hasVaccine"
        :rules="inputIsValid"
        id="vaccinated"
      />
      <label
        for="vaccinated"
        class="font-bold text-center self-center px-2 text-xl"
        >კი</label
      >

      <ErrorMessage name="vaccinated " />
    </div>
    <div class="flex my-5 ml-4">
      <Field
        name="vaccinated"
        type="radio"
        :value="false"
        class="p-2 border-2 border-black"
        v-model="hasVaccine"
        :rules="inputIsValid"
        id="notVaccinated"
      />
      <label
        for="notVaccinated"
        class="font-bold text-center self-center px-2 text-xl"
        >არა</label
      >

      <ErrorMessage name="vaccinated " />
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
  computed: {
    hasVaccine: {
      get() {
        return this.$store.state.vaccinepage.hasVaccine;
      },
      set(value) {
        this.$store.commit("vaccinepage/setHasVaccine", value);
      },
    },
  },
  methods: {
    resetStage() {
      this.$store.commit["vaccinepage/resetStage"];
    },
    inputIsValid(value) {
      if (value !== undefined) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
