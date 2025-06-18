/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 0 rgba(16, 185, 129, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(16, 185, 129, 0.6)' }
        }
      },
      boxShadow: {
        'glow': '0 0 15px -3px rgb(16 185 129 / 0.1)',
        'glow-lg': '0 0 25px -5px rgb(16 185 129 / 0.2)',
        'neon': '0 0 5px theme(colors.emerald.400), 0 0 20px theme(colors.emerald.700)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      backdropBlur: {
        xs: '2px',
      },
      colors: {
        'neutral': {
          750: '#2F3235',
        },
      },
      transitionDuration: {
        '2000': '2000ms',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}