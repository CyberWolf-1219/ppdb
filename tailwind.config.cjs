/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        pallet: {
          light: '#ffffff',
          dark: '#2C2C2C',
          accent: '#19ace6',
        },
      },
    },
  },
  plugins: [],
};
