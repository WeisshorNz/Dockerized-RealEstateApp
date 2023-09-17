/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "dm-sans": ["DM Sans", "sans-serif"],
        "better-yesterday": ["Better Yesterday", "sans"],
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
    },
  },
  plugins: [require("daisyui")],
};
