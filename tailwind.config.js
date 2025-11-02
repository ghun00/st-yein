/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-orange': '#EB5A14',
        'ink': '#0A0A0A',
        'paper': '#FFFFFF',
        'muted': '#8A8A8A',
      },
      fontFamily: {
        sans: ['Pretendard', 'Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      spacing: {
        'section-desktop': '96px',
        'section-tablet': '64px',
        'section-mobile': '48px',
      },
    },
  },
  plugins: [],
}


