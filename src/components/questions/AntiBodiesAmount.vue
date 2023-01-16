<template>
  <section class="mt-10">
    <h1 class="text-xl font-bold">
      თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების
      რაოდენობა*
    </h1>

    <Field
      name="antibodiesDate"
      type="date"
      class="p-2 my-2 w-[515px] h-[50px] border-2 border-black"
      v-model="antiDate"
    ></Field>
    <Field
      name="antiAmount"
      type="number"
      placeholder="ანტისხეულების რაოდენობა"
      class="p-2 w-[515px] h-[50px] border-2 border-black"
      v-model="antiAmount"
    ></Field>
  </section>
</template>

<script>
import { Field } from "vee-validate";
export default {
  components: {
    Field,
  },

  computed: {
    antiAmount: {
      get() {
        return this.$store.state.covidpage.antibodiesAmount;
      },
      set(value) {
        this.$store.commit("covidpage/setAntibodiesAmount", value);
      },
    },
    antiDate: {
      get() {
        return this.$store.state.covidpage.antibodiesDate;
      },
      set(value) {
        this.$store.commit("covidpage/setAntibodiesDate", value);
      },
    },
  },
};
</script>
