import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        blue: '#3B82F6',
        black: '#02050B',

        'alice-blue': '#F0F6FF',
        'light-gray': '#D9D9D9',
        'navy-blue': '#001A44',
      },
    },
  },
  plugins: [],
};
export default config;
