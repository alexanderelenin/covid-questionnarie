<template>
  <section class="mt-10">
    <h1 class="text-xl font-bold">ანტისხეულების ტესტი გაქვს გაკეთებული ? *</h1>
    <div class="flex my-5 ml-4">
      <Field
        name="hasAnti"
        type="radio"
        :value="true"
        class="p-2 border-2 border-black"
        v-model="hasAntibodies"
        :rules="inputIsValid"
        id="yes"
      />
      <label for="yes" class="font-bold text-center self-center px-2 text-xl"
        >კი</label
      >

      <ErrorMessage name="hasAnti " />
    </div>
    <div class="flex my-5 ml-4">
      <Field
        name="hasAnti"
        type="radio"
        :value="false"
        class="p-2 border-2 border-black"
        v-model="hasAntibodies"
        :rules="inputIsValid"
        id="no"
      />
      <label for="no" class="font-bold text-center self-center px-2 text-xl"
        >არა</label
      >

      <ErrorMessage name="hasAnti " />
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
      if (value !== null) {
        return true;
      }
      return false;
    },
  },
  computed: {
    hasAntibodies: {
      get() {
        return this.$store.state.covidpage.hasAntiBodies;
      },
      set(value) {
        this.$store.commit("covidpage/setHasAntibodies", value);
      },
    },
  },
};
</script>
