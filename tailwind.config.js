/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '639px',
        'md': '767px',
        'lg': '1023px',
        'xl': '1279px',
      }
    },
    fontFamily: {
      signature: ["Great Vibes"],
    },
  },
  plugins: [],
}

