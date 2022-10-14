/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      stone: '#F7F5ED',
      line: '#D8D8D8',
      primary: {
        100: '#FFEBDD',
        300: '#FFB49A',
        400: '#FF9781',
        500: '#FF6857',
        600: '#DB423F',
        700: '#B72B34',
      },
      secondary: {
        100: '#E9EBFF',
        300: '#BEC4FF',
        400: '#AEB5FF',
        500: '#949CFF',
        600: '#6C73DB',
        700: '#4A51B7',
      },
      nuetral: {
        100: '#EFF3F6',
        200: '#D9DEE4',
        300: '#AFB6C0',
        400: '#878D99',
        500: '#2F3033',
      },
    },
    extend: {
      fontFamily: {
        cabinetVariable: ['CabinetGrotesk-Variable'],
        cabinetRegular: ['CabinetGrotesk-Regular'],
        cabinetMedium: ['CabinetGrotesk-Medium'],
        cabinetLight: ['CabinetGrotesk-Light'],
        cabinetExtraLight: ['CabinetGrotesk-ExtraLight'],
        cabinetBold: ['CabinetGrotesk-Bold'],
        cabinetExtraBold: ['CabinetGrotesk-ExtraBold'],
        cabinetThin: ['CabinetGrotesk-Thin'],
        cabinetBlack: ['CabinetGrotesk-Black'],
        redHatDisplay: ['Red Hat Display']
      }
    }
  },
  plugins: [],
}
