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
        slate: {
          900: '#0f172a',
          950: '#020617',
        },
        brand: {
          500: '#3b82f6',
          600: '#2563eb',
        },
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'fade-in': 'fadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
    },
  },
  plugins: [],
};
