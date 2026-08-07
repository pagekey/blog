import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import fs from 'fs'

const serveContentPlugin = () => ({
  name: 'serve-content',
  configureServer(server: any) {
    server.middlewares.use('/content', (req: any, res: any, next: any) => {
      const filePath = path.join(__dirname, './content', req.url);
      if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        const stream = fs.createReadStream(filePath);
        // Basic mime types
        if (filePath.endsWith('.png')) res.setHeader('Content-Type', 'image/png');
        else if (filePath.endsWith('.jpg') || filePath.endsWith('.jpeg')) res.setHeader('Content-Type', 'image/jpeg');
        else if (filePath.endsWith('.svg')) res.setHeader('Content-Type', 'image/svg+xml');
        stream.pipe(res);
      } else {
        next();
      }
    });
  }
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    serveContentPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
