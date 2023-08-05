/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {

        red: "#9b6dff",
        yellow: "#624aa1",
        grey: "#ededed",
        blue: "#d8c7ff",
        "light-purple" : "#d8c7ff",
        "deep-purple":"#9b6dff",
        "dark-purple":"#624aa1",
        "deep-blue": "#010026",
        "opaque-black": "rgba(0,0,0,0.35)"
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
            "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",
          "gradient-rainblue":
            "linear-gradient(90deg, #9b6dff 14.53%, #b99aff 69.36%, #d8c7ff 117.73%)",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"]
      },
      content: {
        brush: "url('./assets/brush.png')",
        person1: "url('./assets/person-1.png')",
        person2: "url('./assets/person-2.png')",
        person3: "url('./assets/person-3.png')",
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1216px"
    }
  },
  plugins: [],
}

