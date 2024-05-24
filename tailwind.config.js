/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,md,svelte,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
