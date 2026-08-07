export function parseFrontmatter(markdown: string) {
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/;
  const match = markdown.match(frontmatterRegex);

  if (!match) {
    return { data: {}, content: markdown };
  }

  const yamlString = match[1];
  const content = match[2];

  const data: Record<string, any> = {};
  const lines = yamlString.split(/\r?\n/);
  let currentKey = '';

  lines.forEach(line => {
    const trimmed = line.trim();
    if (trimmed.startsWith('-') && currentKey === 'tags') {
      const tagVal = trimmed.replace(/^-/, '').trim().replace(/^["']|["']$/g, '');
      if (!data.tags) data.tags = [];
      data.tags.push(tagVal);
    } else if (line.includes(':')) {
      const colonIndex = line.indexOf(':');
      currentKey = line.slice(0, colonIndex).trim();
      let value = line.slice(colonIndex + 1).trim();
      if (value) {
        value = value.replace(/^["']|["']$/g, '');
        data[currentKey] = value;
      } else if (currentKey === 'tags') {
        data.tags = [];
      }
    }
  });

  return { data, content };
}

export function getAllPosts() {
  const markdownFiles = import.meta.glob('../../content/blog/**/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;

  const posts = Object.entries(markdownFiles).map(([filePath, rawMarkdown]) => {
    const { data } = parseFrontmatter(rawMarkdown);

    const match = filePath.match(/\/content\/blog\/(\d{4})\/(\d{2})\/([^\/]+)\/index\.md$/);

    let year = '', month = '', slug = '';
    if (match) {
      year = match[1];
      month = match[2];
      slug = match[3];
    } else {
      const parts = filePath.split('/');
      if (parts.length >= 4) {
        const name = parts[parts.length - 1].replace('.md', '');
        if (name !== 'index') {
          slug = name;
        } else {
          slug = parts[parts.length - 2];
        }
      }
    }

    return {
      title: data.title || 'Untitled',
      date: data.date ? new Date(data.date) : new Date(0),
      dateString: data.date || '',
      tags: data.tags || [],
      url: match ? `/blog/${year}/${month}/${slug}` : `/blog/${slug}`,
      year,
      month,
      slug,
      filePath,
      rawMarkdown
    };
  }).filter(post => post.url.startsWith('/blog/') && post.year);

  return posts.sort((a, b) => b.date.getTime() - a.date.getTime());
}

export function getAllTags() {
  const posts = getAllPosts();
  const tagsMap = new Map<string, number>();

  posts.forEach(post => {
    if (post.tags && Array.isArray(post.tags)) {
      post.tags.forEach(tag => {
        tagsMap.set(tag, (tagsMap.get(tag) || 0) + 1);
      });
    }
  });

  return Array.from(tagsMap.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}
