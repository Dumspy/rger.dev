/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        nodejs: '#339933',
        typescript: '#3178C6',
        react: '#61dafb',

        trpc: '#2596BE',
        nextjs: '#000000',
        headlessui: '#66E3FF',
      }
    },
  },
  plugins: [],
}
