<template>
  <section class="mt-10">
    <h1 class="text-xl font-bold">
      მიუთითე დაახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა კოვიდი *
    </h1>

    <Field
      name="antiDate"
      type="date"
      class="p-2 my-2 w-[515px] h-[50px] border-2 border-black"
      v-model="covidDate"
      :rules="inputIsValid"
    ></Field>

    <ErrorMessage name="antiDate" class="text-red-500" />
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
        return "";
      } else {
        return true;
      }
    },
  },
  computed: {
    covidDate: {
      get() {
        return this.$store.state.covidpage.covidDate;
      },
      set(value) {
        this.$store.commit("covidpage/setCovidDate", value);
      },
    },
  },
};
</script>
