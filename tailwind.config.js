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
        paraColor: '#E5E9F0',
        devColor: '#4D5BCE',
        comment: '#607B96',
        span1: '#E99287',
        span2: '#43D9AD',
        span3: '#4D5BCE',
        span4: '#E5E9F0',
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
    },

    screens: {
      sm: '640px',
      md: '800px',
      lg: '1024px',
      xl: '1280px',
      oxl: '1300px',
    },
  },
  plugins: [],
}
