/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        powder: {
          50: '#FDF6F7',
          100: '#F9E4E8',
          200: '#F3CFD6',
          300: '#EDB5BF',
          400: '#E69BA8',
          500: '#D87F8E',
          600: '#C25F70',
          700: '#A04555',
          800: '#7E3543',
          900: '#5C2530',
        },
        rosegold: {
          50: '#FBF3EE',
          100: '#F5E0D2',
          200: '#EBC4A8',
          300: '#E0A87E',
          400: '#D68E5E',
          500: '#C2734A',
          600: '#A85C3D',
          700: '#8A4730',
          800: '#6C3525',
          900: '#4E2520',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Jost"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '10px',
      },
      boxShadow: {
        soft: '0 4px 20px -4px rgba(160, 69, 85, 0.12)',
        premium: '0 8px 30px -6px rgba(160, 69, 85, 0.18)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.6s ease-out',
        fadeIn: 'fadeIn 0.5s ease-out',
      },
    },
  },
  plugins: [],
};
