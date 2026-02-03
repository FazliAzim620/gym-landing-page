/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#0b1120',
        aurora: '#22d3ee',
        nova: '#a855f7',
        ember: '#fb7185',
      },
      boxShadow: {
        glow: '0 0 32px rgba(34, 211, 238, 0.35)',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.9s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 6s ease infinite',
      },
    },
  },
  plugins: [],
}
