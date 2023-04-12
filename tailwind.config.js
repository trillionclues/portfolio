/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        outline: '#1E2D3D',
        primary: '#011627',
        nav: '#011627',
        textColor: '#607B96',
      },
    },
  },
  plugins: [],
}
