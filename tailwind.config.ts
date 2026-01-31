import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'sans-serif'],
        sans: ['var(--font-plus-jakarta)', 'sans-serif'],
      },
      colors: {
        accent: '#3b82f6',
        dark: '#050505',
        secondary: '#101010',
      },
    },
  },
  plugins: [],
};

export default config;
