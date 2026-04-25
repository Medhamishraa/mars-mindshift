/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1F3A',
          50: '#E8EDF4',
          100: '#C5D0E2',
          200: '#8FA1C5',
          300: '#5A72A8',
          400: '#2E4A7A',
          500: '#0B1F3A',
          600: '#091A31',
          700: '#071428',
          800: '#050F1F',
          900: '#030916',
        },
        coral: {
          DEFAULT: '#FF6B6B',
          50: '#FFF0F0',
          100: '#FFD4D4',
          200: '#FFA8A8',
          300: '#FF8585',
          400: '#FF6B6B',
          500: '#E85555',
          600: '#CC4444',
        },
        teal: {
          DEFAULT: '#1ABC9C',
          50: '#E6F9F5',
          100: '#B3EDE1',
          200: '#80E1CD',
          300: '#4DD5B9',
          400: '#1ABC9C',
          500: '#159A80',
        },
        mars: {
          blue: '#00B4D8',
          green: '#8BC34A',
          pink: '#E91E8C',
          orange: '#FF9800',
          teal: '#009688',
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        heading: ['"DM Sans"', 'sans-serif'],
        body: ['"Source Sans 3"', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'gradient': 'gradient 8s ease infinite',
        'marquee': 'marquee 30s linear infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(26, 188, 156, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(26, 188, 156, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}
