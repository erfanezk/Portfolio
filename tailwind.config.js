/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        // Cyberpunk-inspired primary colors with variations (light, lighter, dark, darker)
        primary: {
          light: '#64b5f6', // Light neon blue
          lighter: '#92c9f7', // Even lighter neon blue
          main: '#1f73d4', // Standard neon blue (primary)
          dark: '#1565c0', // Darker neon blue
          darker: '#0d47a1', // Darkest neon blue
        },
        secondary: {
          light: '#ff6ec7', // Light neon pink
          lighter: '#ff80d3', // Even lighter neon pink
          main: '#ff3b8f', // Standard neon pink (secondary)
          dark: '#e5006a', // Darker neon pink
          darker: '#b2004d', // Darkest neon pink
        },
        accent: {
          light: '#00f9b2', // Light neon green
          lighter: '#32ff8a', // Even lighter neon green
          main: '#39ff14', // Standard neon green (accent)
          dark: '#00e676', // Darker neon green
          darker: '#00c853', // Darkest neon green
        },
        highlight: {
          light: '#ffeb3b', // Light neon yellow
          lighter: '#fff176', // Even lighter neon yellow
          main: '#f39c12', // Standard neon yellow (highlight)
          dark: '#f57c00', // Darker neon yellow
          darker: '#e65100', // Darkest neon yellow
        },
        background: {
          main: '#121212', // Dark background for the page
          light: '#1f1f1f', // Slightly lighter dark gray for secondary backgrounds
          lighter: '#2c2c2c', // Even lighter background for panels or sections
        },
        black: '#000000', // Black for extreme contrast
      },
    },
  },
  plugins: [],
};
