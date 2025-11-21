import daisyui from "daisyui"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  extend: {
    fontFamily: {
      display: ['Playfair Display', 'serif'],
      inter: ['Inter', 'sans-serif'],
    },
  },

  plugins: [
    daisyui,
  ],
}

