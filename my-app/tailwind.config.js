module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#19222E',
        secondary: '#F6C327',
      },
      fontFamily: { body: 'Roboto+Condensed' },
    },
    // screens: {
    //   xs: '340px',
    //   // phone
    // },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
