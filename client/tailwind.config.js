/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e1e22",
        secondary: "#73f190",
        tertiary: "#2b5aff",
      },
    },
    screens: {
      lg: { max: "2047px" },

      sm: { max: "639px" },
    },
  },
  plugins: [],
};
