/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        keyframes: {
        slantIn: {
          '0%': {'transform':'translateX(-800px)'},
          '100%': {'transform':'translateX(0px)'},
        },
        rotate: {
          '0%': {'transform':'rotate(90deg)'},
          '100%': {'transform':'translateX(0px)'},
        },
        zoomIn: {
          '0%': {'transform':'translateY(50px)'}, 
          '100%': {'transform':'translateY(0px)'}, 
        },
        zoom2: {
          '0%': {'transform':'scale(1.2)blur(2px)'}, 
          '100%': {'transform':'scale(1)blur(0px)'},
          
      },
      animation: {
        'slantIn' : "slantIn .6s ease-in",
        'zoomIn' : "zoomIn 3s ease-in",
        'rotate': "rotate 2s ease-in",
        'zoom2' : "zoom2 2s ease-in"
      }
    },
  },
  plugins: [],
}
}
