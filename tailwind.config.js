/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "#0C1A1A", 
        "secondary" : "#FFFFFF", 
        "tertiary" : "#6ACFC7", 
      },
    },
    screens: {
      sm : {max : '640px'},

      lg : {max : '2024px'},
    },
  },
  plugins: [],
}