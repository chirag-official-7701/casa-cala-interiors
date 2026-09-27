import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        // Split heavy vendors so the initial route stays lean and cacheable.
        manualChunks(id) {
          if (id.includes('node_modules/framer-motion')) return 'motion';
          if (
            id.includes('node_modules/react-router') ||
            id.includes('node_modules/react-dom') ||
            id.includes('node_modules/react/') ||
            id.includes('node_modules/scheduler')
          ) {
            return 'react';
          }
        },
      },
    },
  },
});
