/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0A0E27',
        secondary: '#6C63FF',
        accent: '#00F5FF',
        highlight: '#FF6B9D',
        text: '#E4E4E7',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(0, 245, 255, 0.3)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 40px rgba(0, 245, 255, 0.6)' },
        },
      },
    },
  },
  plugins: [],
} 