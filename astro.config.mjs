// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://jubaerhosain.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});
