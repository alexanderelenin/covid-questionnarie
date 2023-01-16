<template>
  <section class="mt-10">
    <h1 class="text-xl font-bold">
      კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?* *
    </h1>
    <div v-for="day in weekDays" :key="day" class="flex my-5 ml-4">
      <Field
        :v-bind="weekDays"
        :key="day"
        name="fromOffice"
        type="radio"
        :value="day"
        class="p-2 border-2 border-black"
        v-model="fromOffice"
        :rules="inputIsValid"
        :id="day"
      />
      <label :for="day" class="text-center self-center px-2 text-xl">{{
        day
      }}</label>

      <ErrorMessage name="name " />
    </div>
  </section>
</template>

<script>
import { Field, ErrorMessage } from "vee-validate";

export default {
  data() {
    return {
      weekDays: [0, 1, 2, 3, 4, 5],
    };
  },
  components: {
    Field,
    ErrorMessage,
  },
  methods: {
    inputIsValid(value) {
      if (value !== undefined) {
        return true;
      } else {
        return false;
      }
    },
  },

  computed: {
    fromOffice: {
      get() {
        return this.$store.state.opinionpage.office;
      },
      set(value) {
        this.$store.commit("opinionpage/setOffice", value);
      },
    },
  },
};
</script>
