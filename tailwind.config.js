/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'black-1': '#0b0f22',
        'black-2': '#1d1d2a'
      }
    }
  },
  plugins: []
}
