import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Mychef Design System Colors
        'creamy-white': '#FAF8F5',
        'light-sage': '#A8BFA8',
        'forest-green': {
          DEFAULT: '#2D5F3F',
          hover: '#234A31',
          active: '#1A3624',
        },
        'terracotta': {
          DEFAULT: '#D97757',
          hover: '#C36646',
          active: '#A85437',
        },
        'charcoal': '#2C2C2C',
        'golden-yellow': '#F4C542',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'h1-desktop': ['48px', '56px'],
        'h1-mobile': ['32px', '40px'],
        'h2-desktop': ['36px', '44px'],
        'h2-mobile': ['28px', '36px'],
        'h3-desktop': ['28px', '36px'],
        'h3-mobile': ['24px', '32px'],
        'body-large': ['18px', '28px'],
      },
      spacing: {
        'micro': '4px',
        'tiny': '8px',
      },
      borderRadius: {
        'mychef': '12px',
        'mychef-sm': '8px',
      },
      boxShadow: {
        'mychef-card': '0px 2px 8px rgba(0, 0, 0, 0.08)',
        'mychef-hover': '0px 4px 16px rgba(0, 0, 0, 0.12)',
        'mychef-modal': '0px 8px 32px rgba(0, 0, 0, 0.16)',
      },
      animation: {
        'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'slide-up': 'slide-up 0.5s ease-out',
        'scale-in': 'scale-in 0.4s ease-out',
        'counter': 'counter 1.5s ease-out',
      },
      keyframes: {
        'bounce-gentle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'counter': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, rgba(45, 95, 63, 0.95) 0%, rgba(45, 95, 63, 0.7) 40%, transparent 70%)',
      },
    },
  },
  plugins: [],
} satisfies Config;