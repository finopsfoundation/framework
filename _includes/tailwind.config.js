module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: '#000',
      white: '#fff',

      gray: {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#5e6a75',
        800: '#2d3748',
        900: '#1a202c',
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
      }
    },
    fontFamily: {
       'sans': ['Roboto', 'sans-serif']
    }
  },
  variants: {},
  plugins: [
  ],
}