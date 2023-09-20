/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        custom: "20rem",
      },
      fontFamily: {
        "dm-sans": ["DM Sans", "sans-serif"],
        "better-yesterday": ["Better Yesterday", "sans"],
        nunitoSans: ["Nunito Sans", "sans"],
        poppins: ["Poppins", "sans"],
      },
      fontSize: {
        dream: "240.345px",
      },
      letterSpacing: {
        "dream-tight": "-4.807px",
      },
      spacing: {
        15: "60px",
        590: "590px",
        910: "910px",
        150: "250px",
      },
      colors: {
        "custom-gray": "#73788C",
        "custom-gray2": "#575757",
        "0B2E29": "#0B2E29",
        "5A908D": "#5A908D",
      },
    },
  },
  plugins: [require("daisyui")],
};
