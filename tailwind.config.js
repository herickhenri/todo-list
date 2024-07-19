/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Inter', 'sans-serif']
    },
    extend: {
      colors: {
        gray: {
          700: '#0D0D0D',
          600: '#1A1A1A',
          500: '#262626',
          400: '#333333',
          300: '#808080',
          200: '#D9D9D9',
          100: '#F2F2F2',
        },
        red: {
          400: '#E25858',
        },
        blue: {
          800: '#1E6F9F',
          600: '#4EA8DE',
        },
        purple: {
          700: '#5E60CE',
          600: '#8284FA',
        }
      },
    },
  },
  plugins: [],
}