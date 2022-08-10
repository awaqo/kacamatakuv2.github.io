/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}'
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
      },
      maxWidth: {
        '8xl': '90rem',
      },
      // screens: {
      //   'lg': '992px',
      // }
    },
  },
  plugins: [],
}
