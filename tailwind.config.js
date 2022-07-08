/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./preline/dist/*.{js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-area': "url('images/law.png')",
        'card-area': "url('images/bulut.png')",
        'alt-bg': "url('images/alt-home.png')",
      }
    },
    colors: {
      'laci': '#303961',
      'kahve': '#625d5d',
      'bgLight': '#fef0d6',
      'btn': '#259eba',
      'play': '#af9c9c',
      'video': '#6e6060',
      'yellow': '#ffea96',
      'why': '#af9c9c',
      'layer': '#55504e',
      'main': '#d29454',
      'border': '#ffbf7d',
      'black':'#000',
      'appLight':'#fff',
      'transparent':'rgba(0, 0, 0, 0)',
      'red':'rgb(255, 31, 31)',
      'white': '#fff'
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... } 
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'] 
    },
  },
  plugins: [
    require('preline/plugin')
  ],
}
