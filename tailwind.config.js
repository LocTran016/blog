/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./src/**/*.{astro,html,md,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Super Grotesk", ...defaultTheme.fontFamily.sans],
        serif: ["Minion Pro", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/typography"),
  ],
};
