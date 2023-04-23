/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*components*/*.{js,ts,jsx,tsx}",
    "./src/*pages*/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'mainColor':'#56214d',
        'secondColor':'#ffec00',
      },
    },
  },
  plugins: [],
}