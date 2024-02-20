const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/renderer/**/*.{js,jsx,ts,tsx,ejs}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary-gradient': '#471cfd',
        'secondary-gradient': '#1400ff',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
