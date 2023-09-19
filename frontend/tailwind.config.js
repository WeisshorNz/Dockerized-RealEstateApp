/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
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
      },
      colors: {
        "custom-gray": "#73788C",
        "0B2E29": "#0B2E29",
        "5A908D": "#5A908D",
      },
    },
  },
  plugins: [require("daisyui")],
};
