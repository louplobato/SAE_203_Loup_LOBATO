module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "tonique": "#fc9a85",
        "fond": "#15181f",
        "fond-light": "#333945",
        "tonique-black": "#c04f51"
      },
      "fontFamily": {
        // Ici vos familles de polices exportées de Figma
        // Ne pas oublier de les charger dans '/index.html' !
        "bar": "Libre Barcode 128",
        "text": "Outfit",
        "heading": "Germania One",
      },

      "padding": {
      }
    },

  },
  plugins: [],
}
