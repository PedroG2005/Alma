/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.jsx",
  ],
  theme: {
    extend: {
      colors: {
        // Cinza Chumbo (do texto "alma")
        primary: {
          50: '#f5f5f5',
          100: '#e5e5e5',
          200: '#cccccc',
          300: '#b2b2b2',
          400: '#999999',
          500: '#7f7f7f',
          600: '#666666',
          700: '#4c4c4c',
          800: '#323232', // Cor principal do texto
          900: '#191919',
        },
        // Magenta (da barra rosa)
        secondary: {
          50: '#fef2f9',
          100: '#fde7f4',
          200: '#fbd0ea',
          300: '#f9a8d9',
          400: '#f472c0',
          500: '#ec48a4',
          600: '#e6007e', // Cor principal do logo
          700: '#ca006f',
          800: '#a8005d',
          900: '#8f004f',
        },
        // Verde Lima (da barra verde)
        accent: {
          50: '#f7fee7',
          100: '#eefccb',
          200: '#dcf99b',
          300: '#c4f062',
          400: '#abdf2c',
          500: '#8cc211',
          600: '#bef264', // Cor principal do logo
          700: '#54880a',
          800: '#466e0c',
          900: '#3a5a0d',
        },
      },
      fontFamily: {
        // Fonte que combina com a estética do logo
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}