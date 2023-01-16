<template>
  <main class="mx-28 my-10 relative">
    <header>
      <nav class="flex justify-between border-b-black border-b-[3px] pb-4">
        <img src="../assets/logo.svg" alt="logo" />
        <span class="text-3xl font-bold">4/4</span>
      </nav>
    </header>
    <div class="flex">
      <section class="w-[50%] my-20">
        <p class="text-[22px] w-[606px] font-normal">
          რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო,
          რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა წლების
          განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის კი —
          ჩვენთან გადმოსვლის. <br /><br />პანდემიის პერიოდში ერთმანეთსაც
          იშვიათად ვნახულობთ პირისპირ და ყოველდღიური კომუნიკაციაც გაიშვიათდა.
        </p>
        <MyForm @submit="onSubmit" class="mt-10">
          <OnlineMeetings />
          <OfficeTimes />
          <AttendanceOpinion />
          <FinalOpinion />
          <div
            class="w-[145px] flex justify-between absolute bottom-10 left-[45%]"
          >
            <button
              type="submit"
              class="p-4 bg-[#208298] text-white border rounded-3xl absolute right-[280px]"
            >
              დასრულება
            </button>
          </div>
        </MyForm>
      </section>

      <section class="mt-10">
        <img
          src="../assets/heart.svg"
          alt=""
          class="absolute top-[150px] right-[550px] transition ease-out"
          v-motion
          :initial="{ opacity: 0, x: -150, y: -150 }"
          :enter="{ opacity: 0.8, x: 0, y: 0 }"
        />
        <img src="../assets/bike.png" alt="" class="relative" />
      </section>
    </div>
  </main>
</template>

<script>
import { Form as MyForm } from "vee-validate";
import OnlineMeetings from "../components/questions/OnlineMeetings.vue";
import OfficeTimes from "../components/questions/OfficeTimes.vue";
import AttendanceOpinion from "../components/questions/AttendanceOpinion.vue";
import FinalOpinion from "../components/questions/FinalOpinion.vue";

export default {
  components: {
    MyForm,
    OnlineMeetings,
    OfficeTimes,
    AttendanceOpinion,
    FinalOpinion,
  },
  methods: {
    onSubmit() {
      this.$store.commit("outputData");
      this.$router.push("/final-page");
      this.$store.dispatch("sendHttp");
    },
  },
};
</script>
