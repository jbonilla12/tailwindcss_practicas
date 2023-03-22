/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}"],
  theme: {
    fontFamily:{
      rale: ['Raleway', 'sans-serif']
    },
    extend: {
      colors:{
        danger:'#FC2947',
        info:{
          100: '#FFDEB9',
          200: '#7149C6'
        }
      }
    },
  },
  plugins: [],
}