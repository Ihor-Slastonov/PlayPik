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
      blue: colors.blue,
      cyan: colors.cyan,

      dark: '#222831',
      'semi-dark': '#393E46',
      accent: '#FFD369',
      accent_green: '#03C988',
      accent_red: '#E94560',
      light: '#EEEEEE',
      tr_dark: 'rgba(0,0,0,0.5)',
    },

    fontFamily: {
      myPlay: ['MyPlay', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        center: '0px 0px 20px 4px #000000',
      },
    },
  },
  plugins: [],
};
