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
    './js/**/*.js',
    './_tools-services/**/*.{html,js,md}',
    './_site/**/*.html',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#ffffff',
      yellow: '#f4ba16',
      purple: '#af45f4',
      blue: '#007eab',
      orange: {
        500: '#ff7600',
        600: '#d60',
      },
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
      slate: {
        100: '#2f3f4e',
        200: '#4d5966',
        300: '#354859',
        400: '#5c7b98',
        500: '#7994ae'
      }
    },
    screens: {
     'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {},
  plugins: [],
}
