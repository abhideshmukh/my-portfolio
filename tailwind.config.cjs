/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      animation: {
        'floatAnimation': 'floatFrames 6s ease-in-out infinite',
      },
      keyframes: {
        floatFrames: {
          '0%, 100%' : {
            boxShadow: '0 5px 15px 0px rgba(0,0,0,0.6)',
		        transform: 'translatey(0px)'
          },
          '50%': {
            boxShadow: '0 25px 15px 0px rgba(0,0,0,0.2)',
		        transform: 'translatey(-20px)'
          }
        }
      }
    },
  },
  plugins: [],
};