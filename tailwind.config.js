/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff6a00', // Main brand orange
        secondary: '#0b1220', // Deep neutral background
        accent: '#ff8a3d', // Accent for highlights
        neutralDark: '#e6e6e9', // Light text on dark backgrounds
        neutralLight: '#0b0b0b', // Page background
        surface: '#0f1724', // Card/section surface
        muted: '#9aa0a6', // Muted text
        success: '#22c55e', // for states
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'Arial'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }]
      }
    },
  },
  plugins: [],
}