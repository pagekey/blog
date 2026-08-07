import { globSync } from 'glob';
const files = globSync('./content/blog/2026/**/*.md');
console.log(files);
