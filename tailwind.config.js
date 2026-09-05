/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#0C0D0E',
        surface: '#141517',
        'surface-border': 'rgba(255, 255, 255, 0.08)',
        indigo: {
          glow: '#4F46E5',
          accent: '#6366F1',
        },
        sky: {
          accent: '#38BDF8',
        },
        emerald: {
          terminal: '#10B981',
        },
        heading: '#EDEEF0',
        muted: '#8A8F98',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      boxShadow: {
        'indigo-glow': '0 0 25px -5px rgba(79, 70, 229, 0.4), 0 0 10px -5px rgba(79, 70, 229, 0.2)',
        'sky-glow': '0 0 25px -5px rgba(56, 189, 248, 0.4)',
        'emerald-glow': '0 0 20px -5px rgba(16, 185, 129, 0.4)',
      },
    },
  },
  plugins: [],
};
