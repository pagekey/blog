import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import fs from 'fs'

const frontmatterPlugin = () => ({
  name: 'frontmatter-plugin',
  async load(id: string) {
    if (!id.endsWith('?frontmatter')) return null;
    const filePath = id.replace(/\?frontmatter$/, '');
    const code = await fs.promises.readFile(filePath, 'utf-8');
    const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---/;
    const match = code.match(frontmatterRegex);
    const yamlString = match ? match[1] : '';
    return `export default ${JSON.stringify(yamlString)};`;
  }
});

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
    frontmatterPlugin(),
    serveContentPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-router') || id.includes('remix-run')) {
              return 'vendor';
            }
            if (id.includes('remark') || id.includes('rehype') || id.includes('unified') || id.includes('micromark') || id.includes('mdast') || id.includes('hast') || id.includes('unist') || id.includes('vfile')) {
              return 'markdown';
            }
          }
        }
      }
    }
  }
})
