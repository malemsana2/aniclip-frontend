/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./blogs/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#0f172a',
          950: '#020617',
        },
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [],
};
