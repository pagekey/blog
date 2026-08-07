import { useMemo, useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { useParams, Link } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Layout from '../components/Layout';
import { getAllPosts, parseFrontmatter } from '../lib/blog';

export default function BlogPost() {
  const { year, month, slug } = useParams();
  
  // Find the matching markdown file
  const posts = useMemo(() => getAllPosts(), []);
  const currentPath = `/blog/${year}/${month}/${slug}`;
  const postIndex = posts.findIndex(p => p.url === currentPath);
  const post = postIndex !== -1 ? posts[postIndex] : null;
  
  // Since posts are sorted descending (newest first), 
  // the "next" post is postIndex - 1, and "previous" is postIndex + 1.
  const nextPost = postIndex > 0 ? posts[postIndex - 1] : null;
  const prevPost = postIndex !== -1 && postIndex < posts.length - 1 ? posts[postIndex + 1] : null;

  const [content, setContent] = useState<string | null>(null);

  useEffect(() => {
    if (!post) {
      setContent(null);
      return;
    }

    if (post.getRawMarkdown) {
      post.getRawMarkdown().then(rawMarkdown => {
        const parsed = parseFrontmatter(rawMarkdown);
        let processedContent = parsed.content;
        processedContent = processedContent.replace(
          /{%\s*youtube\s*"([^"]+)"\s*%}/g,
          '<div className="youtube-wrapper my-8"><iframe className="w-full aspect-video" src="https://www.youtube.com/embed/$1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>'
        );
        setContent(processedContent);
      }).catch(err => {
        console.error("Failed to load markdown:", err);
      });
    }
  }, [post]);

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8 max-w-3xl">
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <p>We couldn't find the blog post for {year}/{month}/{slug}.</p>
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-2">Available posts:</h2>
            <ul className="list-disc pl-5">
              {posts.slice(0, 10).map(p => (
                <li key={p.url} className="text-sm text-gray-500">
                  <Link to={p.url} className="hover:underline">{p.url}</Link>
                </li>
              ))}
              {posts.length > 10 && <li className="text-sm text-gray-500">...and {posts.length - 10} more</li>}
            </ul>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="flex justify-between items-center mb-6 text-sm border-b border-border pb-4">
          <Link to="/blog" className="text-muted-foreground hover:text-orange-500 transition-colors flex items-center gap-1.5 font-medium">
            ← <span className="hidden sm:inline">Back to </span>Blog
          </Link>
          <div className="flex items-center gap-4 text-muted-foreground font-medium">
            {prevPost ? (
              <Link to={prevPost.url} className="hover:text-orange-500 transition-colors flex items-center gap-1" title={prevPost.title}>
                ← Prev
              </Link>
            ) : (
              <span className="text-muted-foreground/45 cursor-not-allowed select-none flex items-center gap-1">← Prev</span>
            )}
            <span className="text-muted-foreground/30">|</span>
            {nextPost ? (
              <Link to={nextPost.url} className="hover:text-orange-500 transition-colors flex items-center gap-1" title={nextPost.title}>
                Next →
              </Link>
            ) : (
              <span className="text-muted-foreground/45 cursor-not-allowed select-none flex items-center gap-1">Next →</span>
            )}
          </div>
        </div>

        {post.title && (
          <h1 className="text-4xl font-extrabold mb-4">{post.title}</h1>
        )}
        
        <div className="flex flex-wrap items-center gap-4 mb-8">
          {post.dateString && (
            <div className="text-gray-500">
              {new Date(post.dateString).toLocaleDateString()}
            </div>
          )}
          
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((t: string) => (
                <Link key={t} to={`/blog/tags/${t}`} className="text-xs font-medium bg-muted text-muted-foreground hover:bg-orange-500/10 hover:text-orange-600 transition-colors px-2 py-1 rounded-md">
                  #{t}
                </Link>
              ))}
            </div>
          )}
        </div>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              img({ src, alt, ...props }) {
                let imageSrc = src;
                if (src && !src.startsWith('http') && !src.startsWith('/')) {
                   imageSrc = `/content/blog/${year}/${month}/${slug}/${src}`;
                }
                return <img src={imageSrc} alt={alt} {...props} className="rounded-lg shadow-md max-w-full" />;
              },
              code({ className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
                const { ref: _ref, ...rest } = props as any;
                return match ? (
                  <SyntaxHighlighter
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    style={vscDarkPlus as any}
                    language={match[1]}
                    PreTag="div"
                    {...rest}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              }
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
        
        <hr className="my-12 border-border" />
        
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div className="flex-1">
            {prevPost && (
              <Link to={prevPost.url} className="block group">
                <div className="text-sm text-gray-500 mb-1">← Previous</div>
                <div className="font-medium group-hover:text-orange-500 transition-colors">{prevPost.title}</div>
              </Link>
            )}
          </div>
          <div className="flex-1 text-right">
            {nextPost && (
              <Link to={nextPost.url} className="block group">
                <div className="text-sm text-gray-500 mb-1">Next →</div>
                <div className="font-medium group-hover:text-orange-500 transition-colors">{nextPost.title}</div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
