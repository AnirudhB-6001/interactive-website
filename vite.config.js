import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Tailwind/PostCSS setup with Vite
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js',
  },
});