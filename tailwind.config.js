/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#131319',

        primary: {
          100: '#CEFFE3',
          500: '#00B04C',
        },

        secondary: {
          100: '#A3A3A3',
          200: '#1F1F1F',
          300: '#1E1E1E',
        },
      },

      fontFamily: {
        regular: 'Inter_400Regular',
        medium: 'Inter_500Medium',
        semiBold: 'Inter_600SemiBold',
      },
    },
  },
  plugins: [],
}
