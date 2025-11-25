import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'node:path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 5173
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-router-dom')) return 'router';
            if (id.includes('@tanstack/react-query')) return 'query';
            if (id.includes('framer-motion')) return 'motion';
            if (id.includes('react-i18next') || id.includes('i18next')) return 'i18n';
            return 'vendor';
          }
        }
      }
    },
    chunkSizeWarningLimit: 900
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@config': path.resolve(__dirname, './src/config'),
      '@lib': path.resolve(__dirname, './src/lib'),
      '@store': path.resolve(__dirname, './src/store'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@data': path.resolve(__dirname, './src/data'),
      '@i18n': path.resolve(__dirname, './src/i18n'),
      '@constants': path.resolve(__dirname, './src/constants')
    }
  }
});
