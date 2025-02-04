/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "primary":"#001F3F",
        "secondary":"3A6D8C",
      }
    },
  },
  plugins: [],
};
