import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

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
    middleware: [
      (req, res, next) => {
        if (req.url.indexOf('.') === -1) {
          req.url = '/index.html'
        }
        next()
      }
    ]
  },
})