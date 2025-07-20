module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // your colors, fonts, shadows, spacing, etc. (leave untouched)
      colors: {
        "brand": {
          "50": "rgb(0, 20, 25)",
          "100": "rgb(0, 40, 50)",
          "200": "rgb(0, 80, 100)",
          "300": "rgb(0, 120, 150)",
          "400": "rgb(0, 160, 200)",
          "500": "rgb(80, 100, 220)",
          "600": "rgb(120, 60, 240)",
          "700": "rgb(163, 67, 255)",
          "800": "rgb(210, 40, 230)",
          "900": "rgb(255, 120, 230)"
        },
        // ...rest of colors
      },
      fontSize: {
        // your font sizes
      },
      fontFamily: {
        // your font families
      },
      boxShadow: {
        // your shadows
      },
      borderRadius: {
        // your border radius
      },
      container: {
        padding: {
          // your container padding
        }
      },
      spacing: {
        // your spacing
      },
      screens: {
        "mobile": {
          "max": "767px"
        }
      }
    }
  }
}