import http from 'http';
import { spawn } from 'child_process';

const vite = spawn('npm', ['run', 'dev'], { cwd: '/home/steve/repos/blog/vite' });

vite.stdout.on('data', (data) => {
  console.log(`Vite: ${data}`);
  if (data.toString().includes('ready in')) {
    // try to fetch the image
    http.get('http://localhost:5173/content/blog/2026/01/week-01/fig1.png', (res) => {
      console.log(`Image Status: ${res.statusCode}`);
      vite.kill();
    });
  }
});
