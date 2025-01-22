import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import type { ServerOptions } from 'vite'

export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 8080,
    host: '::',
    proxy: {
      // Handle client-side routing
      '/': {
        target: 'http://localhost:8080',
        bypass: (req) => {
          if (req.url?.indexOf('.') === -1) {
            return '/index.html'
          }
        }
      }
    }
  } satisfies ServerOptions,
})