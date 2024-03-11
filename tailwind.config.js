/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: '#EAEEFE',
        rdeep:'#0832BD',
        rlight:'#CACFE3'
      },
    },
  },
  plugins: [],
};
