/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: 'class',
  theme: {
    fontFamily:{
      'dana':['dana']
    },
    extend: {
      keyframes: {
        pulseslow: {
          '0%, 100%': { transform: 'opacity(100%)' },
          '50%': { transform: 'opacity(0%)' },
        }
      },
      animation: {
        'pulseslow': 'pulseslow 2s linear',
      },
      colors: {
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"}
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/forms'),
  ],
}

