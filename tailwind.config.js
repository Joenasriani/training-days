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
        sans: ['ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      colors: {
        brand: {
          orange: '#D13627',
          black: '#000000',
          bg: '#F5F5F7',
          alert: '#fff6f5'
        }
      }
    },
  },
  plugins: [],
}
