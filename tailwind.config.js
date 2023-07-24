/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        fontFamily: {
          'inter' : ['inter', 'sans-serif'],
        },
      keyframes: {
        zoomIn: {
          '0%': {'transform':'scale(1.1)'}, 
          '100%': {'transform':'scale(1)'}, 
        },
        slantIn: {
          '0%': {'transform':'translateX(-800px)'},
          '100%': {'transform':'translateX(0px)'},
        },
        slant2: {
          '0%': {'transform':'translateX(-100px)'},
          '100%': {'transform':'translateX(0px)'},
        },
        rotate: {
          '0%': {'transform':'rotate(90deg)'},
          '100%': {'transform':'translateX(0px)'},
        },
        zoom2: {
          '0%': {'transform':'scale(.7)'}, 
          '100%': {'transform':'scale(1)'},
        },
      },
      animation: {
        'slantIn' : "slantIn .6s ease-in",
        'slant2' : "slant2 .6s ease-in",
        'zoomIn' : "zoomIn 1.5s ease-in",
        'rotate': "rotate 2s ease-in",
        'zoom2' : "zoom2 2s ease-in"
      }
    },
  plugins: [],
}
}
