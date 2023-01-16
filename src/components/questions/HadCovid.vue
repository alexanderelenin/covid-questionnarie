<template>
  <section class="w-[50%]">
    <h1 class="text-xl font-bold">გაქვს გადატანილი კოვიდი? *</h1>
    <div class="flex my-5 ml-4">
      <Field
        name="hadCovid"
        type="radio"
        value="yes"
        class="p-2 border-2 border-black"
        @change="resetAntibodies"
        :rules="inputIsValid"
        v-model="hasCovid"
        id="q1"
      />
      <label for="q1" class="font-bold text-center self-center px-2 text-xl"
        >კი</label
      >
    </div>
    <div class="flex my-5 ml-4">
      <Field
        name="hadCovid"
        type="radio"
        value="no"
        class="p-2 border-2 border-black"
        @change="resetAntibodies"
        :rules="inputIsValid"
        v-model="hasCovid"
        id="q2"
      />
      <label for="q2" class="font-bold text-center self-center px-2 text-xl"
        >არა</label
      >
    </div>
    <div class="flex my-5 ml-4">
      <Field
        name="hadCovid"
        type="radio"
        value="have_right_now"
        class="p-2 border-2 border-black"
        v-model="hasCovid"
        :rules="inputIsValid"
        @change="resetAntibodies"
        id="q3"
      />
      <label for="q3" class="font-bold text-center self-center px-2 text-xl"
        >ახლა მაქვს</label
      >
    </div>
  </section>
</template>

<script>
import { Field } from "vee-validate";

export default {
  components: {
    Field,
  },

  methods: {
    setHasCovid(e) {
      this.$store.commit("covidpage/setCovid", e.target.value);
    },
    resetAntibodies() {
      this.$store.commit("covidpage/resetAntibodies");
    },

    inputIsValid(value) {
      if (!value) {
        return false;
      } else {
        return true;
      }
    },
  },

  computed: {
    hasCovid: {
      get() {
        return this.$store.state.covidpage.hadCovid;
      },
      set(value) {
        this.$store.commit("covidpage/setCovid", value);
      },
    },
  },
};
</script>
