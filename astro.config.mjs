// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

const isProd = process.env.NODE_ENV === 'production';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  base: isProd ? '/oriol' : '/',
  vite: {
    plugins: [tailwindcss()]
  }
});