/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        150: "250px",
      },
      width: {
        custom: "20rem",
      },
      fontFamily: {
        "dm-sans": ["DM Sans", "sans-serif"],
        poppins: ["Poppins", "sans"],
      },
    },
  },
  plugins: [require("daisyui")],
};
