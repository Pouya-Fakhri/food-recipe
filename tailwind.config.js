/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        Primary:"#046E1B",
        Secondary:"#F79F1A",
        white:"#F3F3F3",
        gray:"#7F7D7D"
      },
      fontFamily:{
      inter:['Inter',"sans-serif"]
      }
    },
  },
  plugins: [],
}