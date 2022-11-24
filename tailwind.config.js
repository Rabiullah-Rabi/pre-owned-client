/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E14D2A",
        secondary: "#FD841F",
      },
    },
  },
  plugins: [require("daisyui")],
};
