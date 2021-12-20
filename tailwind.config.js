const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: [
    './_capabilities/**/*.{html,js,md}',
    './_domains/**/*.{html,js,md}',
    './_includes/**/*.{html,js,md}',
    './_layouts/**/*.{html,js,md}',
    './_links/**/*.{html,js,md}',
    './_pages/**/*.{html,js,md}',
    './_stories/**/*.{html,js,md}',
    './_tools-services/**/*.{html,js,md}',
    './_site/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      green: {
        100: '#f0fff4',
        200: '#c6f6d5',
        300: '#9ae6b4',
        400: '#24c099',
        500: '#1fa382',
        600: '#1a866b',
        700: '#2f855a',
        800: '#276749',
        900: '#22543d',
      },
      gray: {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#cccecd',
        600: '#718096',
        700: '#4d5966',
        800: '#1f2937',
        900: '#2f3f4e',
      },
      yellow: {
        500: '#f4ba16',
      },
      orange: {
        500: '#ff7600',
      },
      purple: {
        500: '#af45f4',
      },
      blue: {
        500: '#007eab',
      },
    },
  },
  variants: {},
  plugins: [],
}
