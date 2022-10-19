/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize:{
      xs:14,
      sm:16,
      md:18,
      lg:20,
      xl:24,
      '2xl':32,


    },
    colors: {
      'black': '#000000',
      'white': '#FFFFFF',
      'transparent': 'transparent',

      gray: {

        900: '#121214',
        800: '#202024',
        600: '#7C7C8A',
        500: '#8E9090',
        400: '#C4C4CC',
        200: '#E1E1E6',
      },

      grass: {
        
        800: '#0E955E',
        500: '#0ED282',
      },


      'blue-700': '#005083',

      'yellow-800': '#FDD420',

      'red-500': 'D95E5C'


    },
    extend: {
      fontFamily:{
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
