/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'ml': '940px',
      // => @media (min-width: 640px) { ... }
      'sm': '650px',
      'xs': '480px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1600px'
    },
    
    extend: {
    },
  },
  plugins: [],
}