/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      desk: '1200px',
    },
    colors: {
      black: colors.black,
      white: colors.white,
      red: colors.red,

      dark: '#222831',
      'semi-dark': '#393E46',
      accent: '#FFD369',
      light: '#EEEEEE',
    },

    fontFamily: {
      myPlay: ['MyPlay', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
