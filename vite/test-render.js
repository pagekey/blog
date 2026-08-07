import http from 'http';
import { spawn } from 'child_process';

const vite = spawn('npm', ['run', 'dev'], { cwd: '/home/steve/repos/blog/vite' });

vite.stdout.on('data', (data) => {
  if (data.toString().includes('ready in')) {
    http.get('http://localhost:5173/blog/2026/01/week-01', (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        console.log(`HTML Response Code: ${res.statusCode}`);
        console.log(`HTML Length: ${body.length}`);
        vite.kill();
      });
    });
  }
});
