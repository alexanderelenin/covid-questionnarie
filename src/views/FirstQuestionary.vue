<template>
  <main class="mx-28 my-10 relative">
    <header>
      <nav class="flex justify-between border-b-black border-b-[3px] pb-4">
        <img src="../assets/logo.svg" alt="logo" />
        <span class="text-3xl font-bold">1/4</span>
      </nav>
    </header>
    <div class="flex">
      <section class="w-[50%] my-20">
        <MyForm @submit="onSubmit">
          <div class="flex flex-col my-10 relative">
            <label for="name" class="font-bold text-[22px] h-[40px]"
              >სახელი*</label
            >
            <Field
              name="name"
              type="text"
              placeholder="იოსებ"
              :value="firstName"
              :rules="validateFirstName"
              class="p-2 w-[515px] h-[50px] border-2 border-black"
              @input="setName"
            />
            <ErrorMessage
              name="name"
              class="absolute bottom-[-30px] text-red-400 font-normal mt-2 px-4 text-[16px]"
            />
          </div>
          <div class="flex flex-col my-10 relative">
            <label for="lastname" class="font-bold text-[22px] h-[40px]"
              >გვარი*</label
            >
            <Field
              name="lastname"
              type="text"
              placeholder="ჯუღაშვილი"
              :value="lastName"
              :rules="validateLastName"
              class="p-2 w-[515px] h-[50px] border-2 border-black"
              @input="setLastName"
            />
            <ErrorMessage
              name="lastname"
              class="absolute bottom-[-30px] text-red-400 font-normal mt-2 px-4 text-[16px]"
            />
          </div>
          <div class="flex flex-col my-10 relative">
            <label for="email" class="font-bold text-[22px] h-[40px]"
              >მეილი*</label
            >
            <Field
              name="email"
              type="email"
              placeholder="something@redberry.ge"
              :value="email"
              :rules="validateEmail"
              @input="setEmail"
              class="p-2 w-[515px] h-[50px] border-2 border-black"
            />
            <ErrorMessage
              name="email"
              class="absolute bottom-[-30px] text-red-400 font-normal mt-2 px-4 text-[16px]"
            />
          </div>

          <button type="submit" class="absolute top-[850px] right-[800px] p-4">
            <img src="../assets/arrowR.svg" alt="right" />
          </button>
        </MyForm>

        <div class="mt-20">
          <div class="border-b border-gray-300 w-[30%] my-2"></div>
          <p class="w-[50%] text-gray-400">
            *-ით მონიშნული ველების შევსება <br />
            აუცილებელია
          </p>
        </div>
      </section>
      <section>
        <img
          src="../assets/yellow.svg"
          alt=""
          class="absolute top-[280px] right-[155px] transition ease-out"
          v-motion
          :initial="{ opacity: 0, x: -110, y: 10, width: 200 }"
          :enter="{
            opacity: 1,
            x: 0,
            y: 0,
            width: 622,
          }"
        />
        <img src="../assets/questionary1.png" alt="" class="relative" />
      </section>
    </div>
  </main>
</template>

<script>
import { Form as MyForm, Field, ErrorMessage } from "vee-validate";

import { mapGetters } from "vuex";

export default {
  components: {
    MyForm,
    Field,
    ErrorMessage,
  },
  data() {
    return {};
  },

  methods: {
    onSubmit() {
      this.$router.push("/page-2");
    },
    validateFirstName(value) {
      const regex = /^[ა-ჰა-ჰ\s]*$/;
      const numberRegex = /\d/;

      if (!value) {
        return "ეს ველი სავალდებულოა";
      }
      if (value.length < 3) {
        return "სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან";
      }

      if (numberRegex.test(value)) {
        return "სახელის ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს";
      }
      if (value.length > 255) {
        return "სახელის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან";
      }
      if (!regex.test(value)) {
        return "სახელი უნდა იყოს შეყვანილი ქართულად ";
      } else {
        return true;
      }
    },
    validateLastName(value) {
      const regex = /^[ა-ჰა-ჰ\s]*$/;
      const numberRegex = /\d/;
      if (!value) {
        return "ეს ველი სავალდებულოა";
      }
      if (value.length < 3) {
        return "გვარის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან";
      }
      if (numberRegex.test(value)) {
        return "გვარის ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს";
      }
      if (value.length > 255) {
        return "გვარის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან";
      }
      if (!regex.test(value)) {
        return "გვარი უნდა იყოს შეყვანილი ქართულად ";
      } else {
        return true;
      }
    },

    validateEmail(value) {
      if (!value) {
        return "ეს ველი სავალდებულოა";
      }
      if (
        value.trim().toLowerCase().slice(value.indexOf("@"), value.length) ===
        "@redberry.ge"
      ) {
        return true;
      } else {
        return "გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით";
      }
    },

    setName(e) {
      this.$store.commit("firstpage/setFirstName", e.target.value);
    },
    setLastName(e) {
      this.$store.commit("firstpage/setLastName", e.target.value);
    },
    setEmail(e) {
      this.$store.commit("firstpage/setEmail", e.target.value);
    },
  },

  computed: {
    ...mapGetters("firstpage", ["firstName", "lastName", "email"]),
  },
};
</script>
