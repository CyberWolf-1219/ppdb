/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        pallet: {
          light: 'hsl(0, 0%, 100%)',
          dark: 'hsl(0, 0%, 17%)',
          accent: 'hsl(197, 90%, 50%)',
        },
      },
    },
  },
  plugins: [],
};
