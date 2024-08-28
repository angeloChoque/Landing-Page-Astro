/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: [`Poppins`],
      },
      colors: {
        blue: {
          dark: "#0f172a",
        },
      },
    },
  },
  plugins: [],
};
