<template>
  <section class="mt-10">
    <h1 class="text-xl font-bold">რას ფიქრობ ფიზიკურ შეკრებებზე?</h1>
    <div class="flex my-5">
      <Field
        as="textarea"
        name="attendance"
        type="text"
        :value="attendance"
        class="p-2 border-2 border-black w-[622px] h-[184px]"
        v-model="attendance"
      />
      <span class="text-center self-center px-2 text-xl"></span>
    </div>
  </section>
</template>

<script>
import { Field } from "vee-validate";

export default {
  components: {
    Field,
  },

  computed: {
    attendance: {
      get() {
        return this.$store.state.opinionpage.live;
      },
      set(value) {
        this.$store.commit("opinionpage/setLive", value);
      },
    },
  },
};
</script>
