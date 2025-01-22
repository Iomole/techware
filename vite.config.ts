import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import type { Connect } from 'vite'

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
      (req: Connect.IncomingMessage, res: Connect.ServerResponse, next: Connect.NextFunction) => {
        if (req.url?.indexOf('.') === -1) {
          req.url = '/index.html'
        }
        next()
      }
    ]
  },
})