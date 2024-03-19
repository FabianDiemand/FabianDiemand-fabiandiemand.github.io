import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      tablet: { max: '850px' },
    },
    extend: {
      backgroundImage: {
        wip: 'linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)), url("../public/wip.webp")',
      },
    },
  },
  plugins: [daisyui],
};

export default config;
