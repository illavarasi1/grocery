/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
   theme: {
    extend: {
      colors: {
        'primary': 'var(--color-primary)',
        'primary-dull': 'var(--color-primary-dull)',
      },
    },
  },
  plugins: [],
}