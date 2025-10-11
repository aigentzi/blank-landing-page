/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors (from brand guidelines)
        "tixae-dark-purple": "#421566", // Dark Purple - CMYK: C88 M100 Y25 K200, RGB: R66 G21 B102
        "tixae-white": "#ffffff", // White - CMYK: C00 M00 Y00 K00, RGB: R255 G255 B255
        "tixae-bright-purple": "#9A00F7", // Bright Purple - CMYK: C60 M80 Y00 K00, RGB: R154 G0 B247
        "tixae-black": "#050A23", // Black - CMYK: C87 M79 Y55 K73, RGB: R5 G10 B35

        // Secondary Brand Colors
        "tixae-peach": "#D46686", // Peach - CMYK: C13 M74 Y27 K00, RGB: R212 G102 B134
        "tixae-deep-purple": "#490CBA", // Deep Purple - CMYK: C76 M77 Y58 K79, RGB: R73 G12 B186

        // Legacy colors for backwards compatibility and variations
        "tixae-purple": "#421566",
        "tixae-purple-dark": "#490CBA",
        "tixae-purple-darker": "#050A23",
        "tixae-light-purple": "#F5F0F7", // Lighter tint for backgrounds
        "tixae-orange": "#D46686", // Using peach as orange alternative
        "tixae-red": "#D46686", // Using peach
        "tixae-blue": "#9A00F7", // Using bright purple
        "tixae-dark": "#050A23",
      },
      fontFamily: {
        // Primary fonts (Avenir with Figree fallbacks as per brand guidelines)
        avenir: [
          "Avenir",
          "Figree",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        body: [
          "Avenir Book",
          "Figree Light 300",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        title: [
          "Avenir Roman",
          "Figree Regular 400",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        heading: [
          "Avenir Medium",
          "Figree Medium 500",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        sans: [
          "Avenir",
          "Figree",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      maxWidth: {
        800: "800px",
        1000: "1000px",
        1100: "1100px",
        1200: "1200px",
      },
      spacing: {
        // Brand spacing guidelines
        "10mm": "10mm", // Minimum logo clearance space
        "2mm": "2mm", // Minimum lettermark space
      },
      letterSpacing: {
        brand: "-0.025em", // 25pt tracking as per brand guidelines
      },
    },
  },
  plugins: [],
};
