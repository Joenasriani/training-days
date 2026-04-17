/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.tsx",
    "./index.tsx",
    "./audioController.ts",
    "./constants.tsx",
    "./types.ts",
    "./utils.ts",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        brand: {
          orange: '#D13627',
          black: '#000000',
          bg: '#F5F5F7'
        }
      }
    },
  },
  plugins: [],
}
