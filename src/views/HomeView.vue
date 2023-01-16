<template>
  <main class="flex justify-center items-center h-screen">
    <div class="text-center justify-center mb-48">
      <div class="flex w-full justify-center items-center">
        <img
          src="@/assets/redberry.svg"
          alt="logo"
          v-motion
          :initial="{ opacity: 0, x: 0, y: 120, width: 2000, height: 2000 }"
          :enter="{
            opacity: 1,
            x: 0,
            y: 0,
            width: 100,
            height: 100,
            transition: { type: spring },
          }"
          class="transition-all duration-800 ease-out z-2 border rounded-full"
        />
      </div>

      <div
        class="relative px-4 mt-20 transition ease-in-out"
        @mouseenter="mouseOver"
        @mouseleave="show = false"
        v-motion
        :initial="{ opacity: 0, x: 0, y: -80 }"
        :enter="{
          opacity: 1,
          x: 0,
          y: 0,

          transition: { type: spring, delay: 500 },
        }"
      >
        <RouterLink
          to="/page-1"
          class="text-[30px] flex justify-center leading-9 font-bold relative"
          ><img src="../assets/overlaymain.png" alt="overlaymain" class="px-4"
        /></RouterLink>
        <RouterLink
          to="/page-1"
          class="text-[30px] flex justify-center leading-9 font-bold relative"
          ><img
            v-if="show"
            src="../assets/overlay.png"
            alt="overlay"
            class="absolute bottom-0 left-[18px]"
        /></RouterLink>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    mouseOver() {
      this.show = !this.show;
    },
  },
};
</script>
