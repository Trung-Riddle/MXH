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
        'dark-second': '#0c0f1d',
        chatBoxLight: '#F5F5F5',
        messageLight: '#F5F5F5',
        inputLight: '#F5F5F5',
        inputLightSecondary: '#77757580',
        light: '#FFFFFF',
        lightMain: '#F5F6FC'
      },
      textColor: {
        dark: '#1B1D2A',
        light: '#FFFFFF'
      },
      width: {
        main: '1200px'
      }
    }
  },
  plugins: []
}
