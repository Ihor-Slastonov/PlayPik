/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      transparent: colors.transparent,

      black_transparent: 'rgba(0, 0, 0, 0.8)',
      violet_deep_transparent: 'rgba(46, 35, 108, 0.8)',
      violet_dark_transparent: 'rgba(23, 21, 59, 0.8)',

      dark_deep: '#1E201E',
      dark: '#222831',
      'semi-dark': '#393E46',
      accent: '#FFD369',
      accent_green: '#03C988',
      accent_red: '#E94560',
      light: '#EEEEEE',
      tr_dark: 'rgba(0,0,0,0.5)',
      violet_deep: '#2E236C',
      violet_dark: '#17153B',
    },

    fontFamily: {
      myPlay: ['MyPlay', 'sans-serif'],
    },
    extend: {
      gridTemplateColumns: {
        layout: '350px 1fr',
      },

      boxShadow: {
        center: '0px 0px 20px 4px #000000',
      },
    },
  },
  plugins: [import('@tailwindcss/forms')],
};
