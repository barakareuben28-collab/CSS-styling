/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#16a34a', // Green for eco-friendly
        secondary: '#2563eb', // Blue for tech
        accent: '#ea580c', // Orange for energy
        neutralDark: '#111827', // Dark gray for text
        neutralLight: '#f3f4f6', // Light gray for backgrounds
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}