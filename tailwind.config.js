/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      backgroundImage: {
        img:'url(./src/assets/fundo.png)'
      },
    fontFamily: {
      sans: 'Roboto, sans-serif'
    }


    },
  },
  plugins: [],
}
