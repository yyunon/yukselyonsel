/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        colors: {
        },
      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
      },
    },
    fontFamily: {
      'ralewaysans' : ['Raleway', 'sans-serif'],
    }
  },
  layers: {
    'no-tailwindcss': {
      // Add any styles you want to disable here
      '.no-tailwindcss': {
        all: 'unset',
      },
    },
  },
  content: [
    "./node_modules/flowbite/**/*.js"
  ],
  plugins: [
    require('flowbite/plugin')
  ],
}

