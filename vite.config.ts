
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { componentTagger } from "lovable-tagger"

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
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
  },
}))
