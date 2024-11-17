// tailwind.config.js 
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: 'rgb(240, 244, 248)',
          DEFAULT: 'rgb(var(--color-primary) / <alpha-value>)',
          dark: 'rgb(10, 25, 47)'
        },
        secondary: {
          light: 'rgb(125, 211, 252)',
          DEFAULT: 'rgb(var(--color-secondary) / <alpha-value>)',
          dark: 'rgb(14, 165, 233)'
        },
        accent: {
          light: 'rgb(232, 121, 249)',
          DEFAULT: 'rgb(var(--color-accent) / <alpha-value>)',
          dark: 'rgb(168, 85, 247)'
        },
        background: 'rgb(var(--color-background) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        'text-primary': 'rgb(var(--color-text-primary) / <alpha-value>)',
        'text-secondary': 'rgb(var(--color-text-secondary) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
        heading: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}