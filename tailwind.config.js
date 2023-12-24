/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:
         {
           'newsletterBG': 'url("./assets/newsletter.svg")',
           'testimonialsBG': 'url("./assets/testimonialsBG.svg")',
         }
    },
  },
  plugins: [],
}