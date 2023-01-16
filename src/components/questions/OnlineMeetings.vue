<template>
  <section>
    <h1 class="text-xl font-bold w-[60%]">
      რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები, სადაც
      ყველა სურვილისამებრ ჩაერთვება?*
    </h1>
    <div class="flex my-5 ml-4">
      <Field
        name="nonFormal"
        type="radio"
        value="twice_a_week"
        class="p-2 border-2 border-black"
        v-model="nonFormal"
        :rules="inputIsValid"
        id="twiceAWeek"
      />
      <label for="twiceAWeek" class="text-center self-center px-2 text-xl"
        >კვირაში ორჯერ</label
      >

      <ErrorMessage name="name " />
    </div>
    <div class="flex my-5 ml-4">
      <Field
        name="nonFormal"
        type="radio"
        value="once_a_week"
        class="p-2 border-2 border-black"
        v-model="nonFormal"
        :rules="inputIsValid"
        id="onceAWeek"
      />
      <label for="onceAWeek" class="text-center self-center px-2 text-xl"
        >კვირაში ერთხელ</label
      >

      <ErrorMessage name="name " />
    </div>
    <div class="flex my-5 ml-4">
      <Field
        name="nonFormal"
        type="radio"
        value="once_in_a_two_weeks"
        class="p-2 border-2 border-black"
        v-model="nonFormal"
        :rules="inputIsValid"
        id="once2Weeks"
      />
      <label for="once2Weeks" class="text-center self-center px-2 text-xl"
        >ორ კვირაში ერთხელ</label
      >

      <ErrorMessage name="name " />
    </div>
    <div class="flex my-5 ml-4">
      <Field
        name="nonFormal"
        type="radio"
        value="once_in_a_month"
        class="p-2 border-2 border-black"
        v-model="nonFormal"
        :rules="inputIsValid"
        id="onceAMonth"
      />
      <label for="onceAMonth" class="text-center self-center px-2 text-xl"
        >თვეში ერთხელ</label
      >

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
    nonFormal: {
      get() {
        return this.$store.state.opinionpage.online;
      },
      set(value) {
        this.$store.commit("opinionpage/setOnline", value);
      },
    },
  },
};
</script>
