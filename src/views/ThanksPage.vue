<template>
  <div
    class="bg-[#232323] w-full h-screen flex justify-center items-center relative transition ease-out duration-1700"
  >
    <img
      src="../assets/მადლობა.svg"
      alt="thanks"
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{
        opacity: 1,
        transition: {
          duration: 800,
        },
      }"
    />
    <img
      src="../assets/star.svg"
      alt=""
      class="absolute top-[370px] left-[760px]"
      v-motion
      :initial="{ opacity: 0, x: 50, y: 70 }"
      :enter="{
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 400,
          delay: 200,
        },
      }"
    />
    <img
      src="../assets/smallStar.svg"
      alt=""
      class="absolute top-[530px] left-[1120px]"
      v-motion
      :initial="{ opacity: 0, x: -50, y: -70 }"
      :enter="{
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 400,
          delay: 200,
        },
      }"
    />
  </div>
</template>
