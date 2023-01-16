/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    fontFamily: {
      bpg: ["BPG", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
