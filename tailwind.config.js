/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      aspectRatio: {
        '2/1': '2 / 1'
      },
      colors: {
        'black-1': '#0b0f22',
        'black-2': '#1d1d2a'
      },
      backgroundColor: {
        'light-main': '#FFFFFF',
        'dark-main': '#1b1d2a',
        'light-input': '#f5f5f5',
        'dark-input': '#343746'
      },
      textColor: {
        dark: '#fffff',
        light: '#1B1D2A',
        input: '#999999'
      }
    }
  },
  plugins: []
}
