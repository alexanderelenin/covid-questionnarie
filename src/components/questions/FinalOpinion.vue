<template>
  <section class="mt-10">
    <h1 class="text-xl font-bold">
      რას ფიქრობ არსებულ გარემოზე:<br />
      რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?
    </h1>
    <div class="flex my-5">
      <Field
        as="textarea"
        name="opinion"
        type="text"
        :value="opinion"
        class="p-2 border-2 border-black w-[622px] h-[184px]"
        v-model="opinion"
      />
      <span class="text-center self-center px-2 text-xl"></span>

      <ErrorMessage name="name " />
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
    opinion: {
      get() {
        return this.$store.state.opinionpage.opinion;
      },
      set(value) {
        this.$store.commit("opinionpage/setOpinion", value);
      },
    },
  },
};
</script>
